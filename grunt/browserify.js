module.exports = {
    development: {
        files: {
            '<%= options.es6.dist %>/es6.min.js': "<%= options.es6.src %>/**/*.js"
        },
        options: {
            debug: true,
            bundleDelay: 1000,
            transform: [["babelify", {"presets": ["es2015", "stage-2"]}]]
        }
    },
    production: {
        files: {
            '<%= options.es6.dist %>/es6.min.js': "<%= options.es6.src %>/**/*.js"
        },
        options: {
            debug: true,
            bundleDelay: 1000,
            transform: [["babelify", {"presets": ["es2015", "stage-2"]}]],
            plugin: [
                ["minifyify", {map: false}]
            ]
        }
    }
};

