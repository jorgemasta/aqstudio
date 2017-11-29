var gulp = require('gulp');
var sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const image = require('gulp-image');
const rename = require('gulp-rename');
var htmlmin = require('gulp-htmlmin');

gulp.task('styles', function() {
    gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./assets/css/'));
});

gulp.task('minify-css', () => {
    return gulp.src('assets/css/style.css')
      .pipe(cleanCSS())
      .pipe(rename({
        suffix: '.min'
      }))
      .pipe(gulp.dest('assets/css/'));
});

gulp.task('minify', function() {
    return gulp.src('src/*.html')
      .pipe(htmlmin({collapseWhitespace: true}))
      .pipe(gulp.dest('.'));
});

gulp.task('image', function () {
    gulp.src('./images/**/*')
      .pipe(image())
      .pipe(gulp.dest('./assets/img'));
  });

//Watch task
gulp.task('default',function() {
    gulp.watch('sass/**/*.scss',['styles', 'minify-css']);
    gulp.watch('src/**/*.html',['minify']);
});