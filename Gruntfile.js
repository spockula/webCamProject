module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.initConfig({
    concat: {
      dist: {
        src: [
            'src/license.js',
            'src/header.js.txt',
            'src/main.js',
            'src/ccv.js',
            'src/cascade.js',
            'src/whitebalance.js',
            'src/smoother.js',
            'src/camshift.js',
            'src/facetrackr.js',
            'src/ui.js',
            'src/headposition.js',
            'src/controllers.js',
            'src/footer.js.txt'],
        dest: './maintracker.js'
      }
    },
    uglify: {
      options: {
        report: 'gzip',
        preserveComments: 'false',
        mangle: {
          except: ['maintracker']
        }
      },
      dist: {
        src: ['./maintracker.js'],
        dest: './maintracker.min.js'
      }
    }
  });

  // Default task.
  grunt.registerTask('default', [
    'concat',
    'uglify'
  ]);
};
