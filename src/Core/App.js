import ConfigStore from "./ConfigStore";

export default class App {

    _config;

    constructor(config) {

        const
            _defaults = {
                services: {},
                enabled: true
            },
            _spec = {
                services: "object",
                enabled: "boolean"
            };

        this._config = new ConfigStore(config, _defaults, _spec);

        // initialize services

        this.service('initialize');
    }

    config() {
        return this._config;
    }

    /**
     * Push tracking events to analytic services
     *
     * @param data
     * @returns {*}
     */
    trackEvent(data) {

        return this.service('trackEvent', [_normalize(data)]);

        function _normalize(data) {
            /** String[] */
            return Object.assign({
                'category': null,
                'action': null,
                'label': null,
                'value': null,
            }, data);
        }
    }

    /**
     * Track page views
     * @param page
     * @returns {*}
     */
    trackPageview(page) {
        return this.service('trackPageview', [page])
    }

    /**
     * identify user
     * @param id
     * @returns {*}
     */
    identifyUser(id) {
        return this.service('identifyUser', [id])
    }

    /**
     * identify user
     * @returns {*}
     */
    anonymize() {
        return this.service('anonymize')
    }

    /**
     * Execute command bus
     *
     * @param func
     * @param args
     * @returns {Array}
     */
    service(func, args) {

        const config = this.config(),
            enabled = config.get('enabled'),
            services = config.get('services'),
            results = {};

        if (!enabled) {
            return results;
        }

        for (let service in services) {
            results[service] = _execute(services[service]);
        }

        return results;

        function _execute(service) {
            if (!service.hasOwnProperty(func)) {
                return false;
            }

            return service[func].apply(this, args);
        }
    }

}
