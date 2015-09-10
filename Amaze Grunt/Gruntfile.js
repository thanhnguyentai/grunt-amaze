module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        // task for minify
        minify: {
            
        },
        
        // build hbs to js
        handlerbars: {
            
        }
    });

    grunt.registerTask('install', []);

    grunt.registerTask('build', ['handlerbars']);

    // default task when calling "grunt" => call task build
    grunt.registerTask('default', ['build']);
};