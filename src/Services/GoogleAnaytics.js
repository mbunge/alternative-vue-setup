import Service from './Service'

export default (apiKey) => {

    if(!window.hasOwnProperty('ga')){
        return new Service();
    }

    const _service = window['ga'];

    let service = new Service({
        trackEvent(data){
            return _service('send', 'event', data.category, data.action, data.label, data.value);
        },
        trackPageview(page){
            return _service('send', 'pageview', page)
        },
        identifyUser(userId){
            return _service('set', 'userId', userId);
        },
        initialize(){
            return _service('create', apiKey, 'auto');
        },
        anonymize(){
            return _service('set', 'anonymizeIp', true);
        }
    });

    return service.instance();
};
