import '../src';
import TestService from './Stubs/TestService'

describe('Analytics tool kit', () => {

    it('should be available', () => {
        expect(window.AnalyticsToolKit).toBeDefined();
        expect(typeof window.AnalyticsToolKit).toEqual('object');

    });

});

describe('App instance', () => {

    const app = new window.AnalyticsToolKit.App({
        services: {
            test: TestService('my-api-key')
        }
    });

    it('should initialize', () => {
        expect(typeof app).toEqual('object');
    });

    it('should have a test service', () => {
        expect(app.config().get('services').test).toBeDefined();
        expect(typeof app.config().get('services').test).toEqual('object');
    });

    it('should track event', () => {
        const data = {category: 'unit', action: 'test'},
            resultdata = data;

        resultdata.label = null;
        resultdata.value = null;

        expect(app.trackEvent(data)).toEqual({
            test: {
                trackEvent: resultdata
            }
        });
    });

    it('should track page view', () => {
        const data = "/index";
        expect(app.trackPageview(data)).toEqual({
            test: {
                trackPageview: data
            }
        });
    });

    it('should assign user id', () => {
        const data = 42;
        expect(app.identifyUser(data)).toEqual({
            test: {
                identifyUser: data
            }
        });
    });

    it('should anonymize client', () => {
        expect(app.anonymize()).toEqual({
            test: {
                anonymize: true
            }
        });
    });

    it('should call custom command', () => {
        const data = "custom-value";
        expect(app.service('custom', [data])).toEqual({
            test: {
                custom: data
            }
        });
    });
});
