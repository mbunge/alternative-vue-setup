export default (() => {
    return {
        getInstance: function(){
            return {
                logEvent(data){
                    return data;
                },
                setUserId(userId){
                    return userId;
                },
                init(apiKey){
                    return apiKey;
                }
            }
        }
    }
})()
