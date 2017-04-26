module.exports = function (config) {
    config.set({
        basePath: '',

        frameworks: ['browserify', 'jasmine'],

        files: [
            './tests/**/*.spec.js'
        ],

        preprocessors: {
            './src/**/*.js': ['browserify'],
            './tests/**/*.js': ['browserify']
        },

        reporters: ['mocha'],

        mochaReporter: {
            // The option autowatch means that the first run will have the full
            // output and the next runs just output the summary and errors in mocha style.
            output: 'autowatch'
        },

        browserify: {
            debug: true,
            transform: [['babelify', {presets: ["es2015", "stage-2"]}]]
        },

        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: [/*'Chrome',*/ 'PhantomJS'],

        plugins: [
            'karma-chrome-launcher',
            'karma-phantomjs-launcher',
            'karma-jasmine',
            'karma-browserify',
            'karma-mocha-reporter'
        ],

        singleRun: true
    });
};