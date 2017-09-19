var gulp = require('gulp');
var sass = require('gulp-sass');
const image = require('gulp-image');

gulp.task('styles', function() {
    gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./assets/css/'));
});

gulp.task('image', function () {
    gulp.src('./images/**/*')
      .pipe(image())
      .pipe(gulp.dest('./assets/img'));
  });

//Watch task
gulp.task('default',function() {
    gulp.watch('sass/**/*.scss',['styles']);
});