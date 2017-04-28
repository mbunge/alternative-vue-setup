import '../src';
import amplitude from './Stubs/amplitude'

// fake window
window.amplitude = amplitude;

describe('Amplitude', () => {

    it('should be available', () => {
        expect(window.AnalyticsToolKit.Services.Amplitude).toBeDefined();
        expect(typeof window.AnalyticsToolKit.Services.Amplitude).toEqual('function');
    });

    const app = new window.AnalyticsToolKit.App({
        services: {
            Amplitude: window.AnalyticsToolKit.Services.Amplitude('my-api-key')
        }
    });

    it('should have a amplitude service', () => {
        expect(app.config().get('services').Amplitude).toBeDefined();
        expect(typeof app.config().get('services').Amplitude).toEqual('object');
    });

    it('should track event', () => {
        const data = {category: 'unit', action: 'test'},
            resultData =  data.category + ' ' + data.action;

        expect(app.trackEvent(data)).toEqual({
            Amplitude: {
                trackEvent: resultData
            }
        });
    });

    it('should assign user id', () => {
        const data = 42;
        expect(app.identifyUser(data)).toEqual({
            Amplitude: {
                identifyUser: data
            }
        });
    });
});
