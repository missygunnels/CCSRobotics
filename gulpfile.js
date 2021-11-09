'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));;
var htmlmin = require('gulp-htmlmin');;

gulp.task('sass', () => {
    return gulp.src('./scss/*').pipe(sass()).pipe(gulp.dest("./build/css"));
});
gulp.task('html', () => {
    return gulp.src('./html/*')
      .pipe(htmlmin({ collapseWhitespace: true }))
      .pipe(gulp.dest('./build/html'));
  });
gulp.task('images', () => {
return gulp.src('./images/*')
    .pipe(gulp.dest('./build/images'));
});
gulp.task('js', () => {
    return gulp.src('./js/*')
        .pipe(gulp.dest('./build/js'));
    });
gulp.task('build', gulp.series('sass', 'html', 'images', 'js'));

gulp.task('watch', () => {
    gulp.series('build');
    gulp.watch('./html/*', gulp.series('html'));
    gulp.watch('./images/*', gulp.series('images'));
    gulp.watch('./scss/*', gulp.series('sass'));
    return
});