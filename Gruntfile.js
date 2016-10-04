module.exports = function(grunt) {

  grunt.initConfig({
    sass: {
      dist: {
        files: [{
          expand: true,
          flatten: true,
          src: ['scss/*.scss'],
          dest: 'css/',
          ext: '.css'
        }]
      },
    },
		watch: {
			options: {
				spawn: false,
				livereload: true
			},
			all:{
				files: ['scss/*.scss', 'www/js/**/*.js', 'www/**/*.html', 'www/**/*.json'],
				tasks: ['sass']
			}
		}
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-preprocess');
  grunt.loadNpmTasks('grunt-env');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-ng-annotate');
  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-newer');

  grunt.registerTask('generateDev', ['env:dev', 'preprocess:dev', 'babel', 'concat',  'sass:dist']);
  grunt.registerTask('generateProd', ['env:prod', 'preprocess:prod', 'babel', "ngAnnotate", "uglify", 'sass:dist' ]);

};
