module.exports = {
    development: {
        files: {
            '<%= options.js.dist %>/js.min.js': "<%= options.js.src %>/**/*.js"
        },
        options: {
            debug: true,
            bundleDelay: 1000,
            transform: [["babelify", {"presets": ["es2015", "stage-2"]}]]
        }
    },
    production: {
        files: {
            '<%= options.js.dist %>/<%= options.js.distName %>': "<%= options.js.src %>/**/*.js"
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

