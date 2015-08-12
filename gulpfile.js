var gulp = require('gulp'),
    mocha = require('gulp-mocha'),
    testbrowser = require('jsdom-test-browser'),
    istanbul = require('gulp-istanbul'),
    babel = require('gulp-babel');


gulp.task('build', function () {
  return gulp.src(['lib/*', 'lib/**/*', 'tests/*'], {base: '.'})
    .pipe(babel())
    .pipe(gulp.dest('dist/build'));
});

gulp.task('jsdom', function (callback) {
  testbrowser.newBrowser(callback);
});

gulp.task('coverage', ['build', 'jsdom'], function (callback) {
  gulp.src(['dist/build/lib/*.js', 'dist/build/lib/**/*.js', 'dist/plexus-form.js'])
    .pipe(istanbul({includeUntested: true}))
    .pipe(istanbul.hookRequire())
    .on('finish', function () {
      gulp.src(['dist/build/tests/*.spec.js'])
        .pipe(mocha())
        .pipe(istanbul.writeReports())
        .on('end', callback);
    });
});