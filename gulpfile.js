var gulp = require('gulp');

var GulpEste = require('gulp-este');
var runSequence = require('run-sequence');
var yargs = require('yargs');

var args = yargs
  .alias('p', 'production')
  .argv

var este = new GulpEste(__dirname, args.production, '../../../..');

gulp.task('server', este.bg('node', ['server']));

gulp.task('run', function(done) {
  runSequence('server', done);
});

gulp.task('default', function(done) {
  runSequence('run', done);
});
