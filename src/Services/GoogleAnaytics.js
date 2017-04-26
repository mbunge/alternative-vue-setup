import Service from './Service'

export default (() => {

    if(!window.hasOwnProperty('ga')){
        return new Service();
    }

    const _service = window['ga'];

    let service = new Service({
        trackEvent(data){
            _service('send', 'event', data.category, data.action, data.label, data.value);
        },
        trackPageView(data){
            _service('send', 'pageview', data.page)
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
