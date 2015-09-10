module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            
        }
    });

    grunt.registerTask('build', []);

    // default task when calling "grunt" => call task build
    grunt.registerTask('default', ['build','watch']);
};