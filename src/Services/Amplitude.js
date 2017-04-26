import 'Service'

export default (() => {
    const _service = ga;

    if(_service === typeof "undefined"){
        return new Service();
    }

    let service = new Service({
        trackEvent(data, options){
            _service('send', 'event', data.category, data.action, data.label, data.value, options);
        },
        trackPageView(data, options){
            _service('send', 'pageview', data.page, options)
        },
        identifyUser(userId){
            _service('set', 'userId', userId);
        },
        initialize(apiKey){
            _service('create', apiKey, 'auto');
        },
        anonymize(){
            _service('set', 'anonymizeIp', true);
        }
    });
    return service.instance();
})();