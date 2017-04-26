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
            'test': TestService
        }
    });

    it('should initialize', () => {
        expect(typeof app).toEqual('object');
    });

    it('should have a test service', () => {
        console.log('Services', app.config().get('services'));
        expect(app.config().get('services').test).toBeDefined()
        expect(typeof app.config().get('services').test).toEqual('object')
    })
});
