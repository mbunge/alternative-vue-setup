module.exports = {
    js: {
        files: [
            '<%= options.js.src %>/**/*.js'
        ],
        tasks: [
            'browserify:development',
            'js'
        ]
    }
};
