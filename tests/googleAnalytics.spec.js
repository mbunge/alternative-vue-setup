import '../src';
import ga from './Stubs/dummy'

// fake window
window.ga = ga;

describe('Google Analytics', () => {

    it('should be available', () => {
        expect(window.AnalyticsToolKit.Services.GoogleAnalytics).toBeDefined();
        expect(typeof window.AnalyticsToolKit.Services.GoogleAnalytics).toEqual('function');
    });

});

describe('App instance', () => {

    const app = new window.AnalyticsToolKit.App({
        services: {
            GoogleAnalytics: window.AnalyticsToolKit.Services.GoogleAnalytics('my-api-key')
        }
    });

    it('should have a ga service', () => {
        expect(app.config().get('services').GoogleAnalytics).toBeDefined();
        expect(typeof app.config().get('services').GoogleAnalytics).toEqual('object');
    });

    it('should track event', () => {
        const data = {category: 'unit', action: 'test'},
            resultData = [
                'send',
                'event',
                data.category,
                data.action,
                null,
                null
            ];

        expect(app.trackEvent(data)).toEqual({
            GoogleAnalytics: {
                trackEvent: resultData
            }
        });
    });

    it('should track page view', () => {
        const data = "/index",
            resultData = [
                'send',
                'pageview',
                data
            ];

        expect(app.trackPageview(data)).toEqual({
            GoogleAnalytics: {
                trackPageview: resultData
            }
        });
    });

    it('should assign user id', () => {
        const data = 42;
        expect(app.identifyUser(data)).toEqual({
            GoogleAnalytics: {
                identifyUser: ['set', 'userId', data]
            }
        });
    });

    it('should anonymize client', () => {
        expect(app.anonymize()).toEqual({
            GoogleAnalytics: {
                anonymize: ['set', 'anonymizeIp', true]
            }
        });
    });
});
