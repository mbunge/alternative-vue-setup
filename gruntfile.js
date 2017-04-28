module.exports = function (grunt) {
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),
        options: require('./grunt/options'),
        browserify: require('./grunt/browserify'),
        karma: require('./grunt/karma'),
        // Watch
        watch: require('./grunt/watch'),
    });

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('prod', ['test', 'browserify:production']);
    grunt.registerTask('default', ['browserify:development']);
    grunt.registerTask('test', ['karma']);
};
