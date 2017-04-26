import Service from '../../src/Services/Service'

export default (() => {

    const service = new Service({
        trackEvent(data){
            return 7;
        },
        trackPageView(data){
            return 13;
        },
        identifyUser(userId){
            return 23;
        },
        initialize(apiKey){
            return 42;
        },
        anonymize(){
            return 1337
        }
    });

    return service.instance();
})();