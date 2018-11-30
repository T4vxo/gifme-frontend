module.exports = grunt => {
  //  Setup sass
  const sass = require('node-sass');

  grunt.initConfig({
    components: 'src/components',
    dist: '/dist/',
    
    clean: ['dist'],

    htmlbuild: {
      dist: {
        src: 'src/public/**/*.html',
        dest: 'dist/',
        options: {
          relative: true,
          basePath: 'src/public',
          sections: {
            common: '<%= components %>/head/common.html',
            header: '<%= components %>/header/index.html',
            meme_display: '<%= components %>/meme_display/index.html',
          },
          styles: {
            styles: 'styles.css'
          }
        }
      }
    },
    sass: {
      options: {
        implementation: sass,
        sourceMap: true
      },
      dist: {
        files: {
          'dist/greetings_9gag/styles.css': 'src/public/greetings_9gag/styles.scss',
          'dist/meme_builder/styles.css': 'src/public/meme_builder/styles.scss',
          'dist/random_gif/styles.css': 'src/public/random_gif/styles.scss',
          'dist/sign_in/styles.css': 'src/public/sign_in/styles.scss',
          'dist/header/styles.css': 'src/components/header/styles.scss'
        }
      }
    },
    watch: {
      tasks: ['clean', 'htmlbuild', 'sass'],
      files: ['src/**/*.html', 'src/**/*.scss']
    },
    uglify: {
      defaultTarget: {
        files: {
          'dist/greetings_9gag/main.js': ['src/public/greetings_9gag/main.js'],
          'dist/random_gif/main.js': ['src/public/random_gif/main.js'],
          'dist/meme_builder/main.js': ['src/public/meme_builder/main.js'],
          'dist/sign_in/main.js': ['src/public/sign_in/main.js'],
          'dist/scripts/backend.js': ['src/scripts/backend.js'],
          'dist/scripts/meme_view.js': ['src/scripts/meme_view.js'],
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-html-build');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify-es');
  grunt.registerTask('default', ['clean', 'htmlbuild', 'sass', 'uglify:defaultTarget']);
}