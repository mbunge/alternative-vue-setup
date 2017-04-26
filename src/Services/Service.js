import ES6ObjectAssign from "es6-object-assign";

ES6ObjectAssign.polyfill();

export default class Service {

    _instance = {};

    constructor(instance){

        if(typeof instance !== 'object'){
            instance = {};
        }

        const emptyCallback = () => null;
        this._instance = Object.assign({
            trackEvent: emptyCallback,
            trackPageView: emptyCallback,
            identifyUser: emptyCallback,
            initialize: emptyCallback,
            anonymize: emptyCallback,
        }, instance);
    }

    instance(){
        return this.instance;
    }
}
