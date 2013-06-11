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
        var options = this.options({linebreak:true});
        if (this.data.file) {
            if (options.linebreak) {
                grunt.log.writeln(grunt.file.read(this.data.file));
            }
            else {
              grunt.log.write(grunt.file.read(this.data.file));
            }
        }
        if (this.filesSrc) {
          if (options.linebreak) {
              grunt.util._.each(this.filesSrc, function (src) {
                  grunt.log.writeln(grunt.file.read(src));
              });
          }
          else {
              grunt.util._.each(this.filesSrc, function (src) {
                  grunt.log.write(grunt.file.read(src));
              });
          }
        }
    });
};
