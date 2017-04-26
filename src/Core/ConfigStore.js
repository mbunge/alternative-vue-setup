export default class ConfigStore {

    _config = {};
    _spec = {};

    constructor(config, defaults = {}, spec = {}) {

        const _config = Object.assign(config, defaults);

        this._spec = spec;

        for(let key in _config){
            this.set(key, _config[key])
        }
    }

    get(key, _default = null) {
        return this._config.hasOwnProperty(key)
            ? this._config[key]
            : _default;
    }

    set(key, value){
        let condition = true;

        if(this._spec.hasOwnProperty(key)){
            condition = typeof value === typeof this._spec[key];
        }

        if(!condition){
            throw new Error('Value of '+ key +' is not valid! Expect ' + typeof this._spec[key]);
        }

        this._config[key] = value;
    }

}
