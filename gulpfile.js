var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var pug = require('gulp-pug');


gulp.task('default', ['help'], function () {

});

gulp.task('sass', function () {
  return gulp.src("styles/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass().on('Sass Error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("./styles/"));
});

gulp.task('pug', function buildHTML() {
  return gulp.src('views/*.pug')
    .pipe(pug())
    .pipe(gulp.dest("./"));
});


gulp.task('watch', function () {

  gulp.watch("styles/*.scss", ['sass']);
  gulp.watch("views/*.pug", ['pug']);
});
