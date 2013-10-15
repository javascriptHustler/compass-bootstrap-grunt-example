module.exports = function(grunt) {

  var requirejs = require('requirejs');

  grunt: grunt.initConfig({

    compass: {
      dist: {   
        options: {
          outputStyle: 'compressed',
          sassDir: 'compass',
          specify: 'compass/main.scss',
          cssDir: 'build/css'
        }
      }
    },

    watch: {
      sass: {
        files: ['compass/sass/**/*.scss', '!compass/sass/vendor/**/*.scss'],
        tasks: ['compass:dist']
      }
    }

  });

  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');

};