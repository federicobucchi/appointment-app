module.exports = function(grunt) {

  grunt.initConfig({
    less: {
      style: {
        options: {
          compress: true
        },
        files: {
          "dist/css/style.css": "less/style.less"
        }
      }
    },
    haml: {
      html: {
        options: {
          style: 'expanded'
        },
        files: {
          'dist/index.html': 'haml/index.haml'
        }
      }
    },
    watch: {
      style: {
        files: ['less/*'],
        tasks: ['less']
      },
      html: {
        files: ['haml/*'],
        tasks: ['haml']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-haml');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('dev', ['watch']);

};
