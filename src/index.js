import Core from "./Core"
import Services from "./Services"

(function (window) {
    window.AnalyticsToolKit = {
        App: Core,
        Services: Services()
    };
})(window);
