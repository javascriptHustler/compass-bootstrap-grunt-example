### Grunt Compass Bootstrap Example

Above you will find a boilerplate to help you establish the basic foundations of a "Nodejs" site. I have provided several technologies such as grunt which will help you quickly perform repetive tasks.

**Does Grunt have your attention?**

Let's set the scene. You're working on a project and hours of tedious and repetitive work lays before you. For example:

picture holder
![alt text](https://github.com/yung-vitto/markdown-here/raw/master/readme.fw.png "Sass Example")

Grunt is particularly useful when you want to automate tasks like the one above. Check out my Grunt config for more details.

  ```javascript
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
  ```