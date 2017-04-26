import ConfigStore from "./ConfigStore";

export default class App {

    _config;

    constructor(config) {

        const
            _defaults = {
                services: Object,
                trackEvents: true,
                identifyUser: false,
                userId: null,
                anonymise: true
            },
            _spec = {
                services: Object,
                trackEvents: Boolean,
                identifyUser: Boolean,
                userId: Number,
                anonymise: Boolean
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
     * Execute services commands
     *
     * @param func
     * @param args
     * @returns {Array}
     */
    service(func, args) {

        const config = this.config(),
            canTrack = config.get('canTrack'),
            results = [];

        if (false === !!canTrack) {
            return results;
        }

        for (let service of config.get('services')) {
            results.push(_execute(service));
        }

        return results;

        function _execute(service) {
            if (service.hasOwnProperty(func)) {
                return false;
            }

            return service[func].apply(this, args);
        }
    }

}
