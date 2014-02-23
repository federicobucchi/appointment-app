module.exports = function(grunt) {

  grunt.initConfig({
    less: {
      style: {
        options: {
          compress: true
        },
        files: {
          "www/css/style.css": "less/style.less"
        }
      }
    },
    haml: {
      html: {
        options: {
          style: 'expanded'
        },
        files: {
          'www/index.html': 'haml/index.haml'
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
    },
    copy: {
      all: {
        files: [
          { expand: true, cwd: 'lib/', src: '**', dest: 'www/js/', filter: 'isFile' }
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-haml');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('dev', ['watch']);
  grunt.registerTask('move', ['copy']);

};
