'use strict';
var gulp = require('gulp'),
  concat = require('gulp-concat'),
  sass = require('gulp-sass'),
  prefix = require('gulp-autoprefixer'),
  browserSync = require('browser-sync').create(),
  neat = require('node-neat').includePaths,
  reload = browserSync.reload;

var scssFiles = [
    './style/sass/basic/*.scss',
    './style/sass/modules/*.scss',
    './style/sass/*.scss'
  ]

gulp.task('styles', function() {
  gulp.src('./style/sass/style.scss')
    .pipe(sass({ includePaths: neat }).on('error', sass.logError))
    .pipe(prefix())
    .pipe(gulp.dest('./style/css'))
    /* Reload the browser CSS after every change */
    .pipe(reload({stream:true}));
});

//Watch task
gulp.task('watch', ['browser-sync'], function() {
    gulp.watch(scssFiles, ['styles']);
});

gulp.task('inject', function() {
  gulp.src('./index.html')
    .pipe(inject(gulp.src(bowerFiles(), {read: false}), { relative: true, name: 'bower' }))
    .pipe(inject(gulp.src(['!./app/bower_components/**/*', './app/**/*.js']) 
      .pipe(angularFilesort()), { relative: true}
    ))
    .pipe(gulp.dest('./app'));
})

gulp.task('browser-sync', function() {
  browserSync.init({
    server: "./"
  });
});


gulp.task('concat', function() {
  return gulp.src('./bower_components/**/*.min.js')
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('./vendor/'));
});