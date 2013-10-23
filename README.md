### Grunt Compass Bootstrap Example

*If you're on the fast track and don't need any help, feel free to clone the repo.*

  ```javascript
  > npm install // downloads all packages
  > grunt watch // will automate sass build
  ```

Above you will find a boilerplate to help you establish the basic foundations of a "Nodejs" site. I have provided several technologies such as grunt which will help you quickly perform repetive tasks.

**Does Grunt have your attention?**

Let's set the scene. You're working on a project and hours of tedious and repetitive work lays before you. For example:

![alt text](https://raw.github.com/yungVitto/compass-bootstrap-grunt-example/master/readme.fw.png "Sass Example")

Grunt is particularly useful when you want to automate tasks like the one above. Check out my Grunt config for more details:

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
    
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');

  });
  ```
  
  ``` javascript
  > git clone git@github.com:yungVitto/compass-bootstrap-grunt-example.git
  ```
 
Now that you have cloned this repo, it's time to set up your node_modules.

  ``` javascript
  > npm install // run from project dir
  ```
  
At this point, all dependecies are being downloaded and installed for your project.
  
  
  
