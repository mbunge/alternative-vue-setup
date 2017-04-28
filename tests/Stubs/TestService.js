import Service from '../../src/Services/Service'

export default (apiKey) => {

    const service = new Service({
        trackEvent(data){
            return data;
        },
        trackPageview(data){
            return data;
        },
        identifyUser(userId){
            return userId;
        },
        initialize(){
            return apiKey;
        },
        anonymize(){
            return true;
        },
        custom(val){
            return val;
        }
    });

    return service.instance();
};