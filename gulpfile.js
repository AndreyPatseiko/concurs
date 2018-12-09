var gulp = require("gulp");
var browserSync = require("browser-sync");
var stylus = require('gulp-stylus');
jade = require('gulp-jade');

//──── Tasks ─────────────────────────────────────────────────────────────────────────────
gulp.task('stylus', function () {
  return gulp.src(['./styl/*.styl'])
    .pipe(stylus())
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.reload({ stream: true }))
});

gulp.task('jade', function () {
  return gulp.src('./jade/*.jade')
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest('./'))
    .pipe(browserSync.reload({ stream: true }))
});

gulp.task("browser-sync", function () {
  browserSync({
    server: {
      baseDir: "./"
    },
    notify: false,
    open: false,
  });
});

gulp.task('watch', ['browser-sync', 'stylus', 'jade'], function () {
  gulp.watch('./jade/*.jade', ['jade']);
  gulp.watch('./styl/*.styl', ['stylus']);
});

gulp.task('default', ['watch']);

