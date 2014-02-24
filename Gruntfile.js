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
    coffee: {
      compile: {
        files: {
          'www/js/main.js': 'coffee/main.coffee'
        }
      }
    },
    watch: {
      less: {
        files: ['less/*.less'],
        tasks: ['less']
      },
      haml: {
        files: ['haml/*.haml'],
        tasks: ['haml']
      },
      coffee: {
        files: ['coffee/*.coffee'],
        tasks: ['coffee']
      },
    },
    connect: {
      server: {
        options: {
          port: 9001,
          base: 'www'
        }
      }
    },
    open: {
      server: {
        url: 'http://localhost:9001',
        app: 'Google Chrome'
      }
    },
    copy: {
      all: {
        files: [{
          expand: true,
          cwd: 'lib/',
          src: '**',
          dest: 'www/js/',
          filter: 'isFile'
        }],
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-haml');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-open');

  grunt.registerTask('dev', ['connect', 'open', 'watch']);
  grunt.registerTask('www', ['copy', 'less', 'haml', 'coffee']);

};
