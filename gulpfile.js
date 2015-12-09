var gulp = require('gulp'),
    browserify = require('browserify'),
    babelify = require('babelify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    uglify = require('gulp-uglify');


gulp.task('calendar', function() {
  return browserify('src/calendar/Year.js', {debug: false})
  .transform(babelify, {presets: ['es2015', 'react']})
  .bundle()
  .pipe(source('calendar.js'))
  .pipe(buffer())
  //.pipe(uglify())
  .pipe(gulp.dest('build/'));
});