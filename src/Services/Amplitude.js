import Service from './Service'

export default () => {

    let exists = false;

    exists = window.hasOwnProperty('amplitude');

    if(exists){
        exists = window.amplitude.hasOwnProperty('getInstance');
    }

    if(exists){
        return (new Service()).instance();
    }

    const _service = window['amplitude'].getInstance();

    let service = new Service({
        trackEvent(data){
            return _service.logEvent(data.category + " " + data.action)
        },
        identifyUser(userId){
            return _service('set', 'userId', userId);
        },
        initialize(apiKey){
            return _service.init(apiKey)
        }
    });

    return service.instance();
};