export default class ConfigStore {

    _config = {};
    _spec = {};

    constructor(config, defaults = {}, spec = {}) {

        const _config = Object.assign(defaults, config);

        this._spec = spec;

        for (let key in _config) {
            this.set(key, _config[key])
        }
    }

    get(key, _default = null) {
        return this._config.hasOwnProperty(key)
            ? this._config[key]
            : _default;
    }

    set(key, value) {

        this.checkType(key, value);
        this._config[key] = value;
    }

    checkType(key, value) {
        if (!this._spec.hasOwnProperty(key)) {
            // always true if not exists
            return true;
        }
        let actualType = typeof value;
        let expectedType = this._spec[key];

        if (actualType !== expectedType) {
            throw new Error('Value of ' + key + ' is not valid! Expect ' + expectedType + ' instead of ' + actualType);
        }
    }

}
