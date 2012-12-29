/*
 * grunt-cat
 * https://github.com/dylang/grunt-cat
 *
 * Copyright (c) 2012 Dylan Greene
 * Licensed under the MIT license.
 */

'use strict';
/**
 * Just cats a file for now but could have it do figlets and ansi images
 * @param grunt
 */
module.exports = function (grunt) {
    grunt.registerMultiTask('cat', 'Echos a file to the console. Good for showing logos.', function () {
        if (this.data.file) {
            grunt.log.writeln(grunt.file.read(this.data.file));
        }
    });
};
