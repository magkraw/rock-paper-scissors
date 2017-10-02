module.exports = function(grunt) {

  grunt.initConfig({
    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'main.css': 'style.sass'
        }
      }
    },
    watch: {
      scripts: {
        files: ['*.sass'],
        tasks: ['sass'],
        options: {
          spawn: false,
        },
      }
    },
    browserSync: {
      dev: {
        bsFiles: {
          src : [
              'main.css',
              'index.html'
          ]
        },
        options: {
          watchTask: true,
          server: './'
        }
      }
    }
  });

  // Load the plugins tasks
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');

  // Default task(s).
  grunt.registerTask('default', ['sass', 'browserSync', 'watch']);
};
