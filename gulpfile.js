var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var pug = require('gulp-pug');


gulp.task('serve', ['sass', 'template', 'fonts', 'scripts', 'img'], function() {

    browserSync.init({
        server: "../dist/"
    });

    gulp.watch("scss/**/*.scss", ['sass']);
    gulp.watch("pug/**/*.pug", ['template']);
    gulp.watch("fonts/**/*", ['fonts']);
    gulp.watch("js/**/*", ['scripts']);
    gulp.watch("img/**/*", ['img']);
    gulp.watch("../dist/*.html").on('change', browserSync.reload);
});


gulp.task('sass', function() {
    return gulp.src("scss/**/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("../dist/css"))
        .pipe(browserSync.stream());
});

gulp.task('template', function buildHTML() {
    return gulp.src('pug/**/*.pug')
        .pipe(pug({

        }))
        .pipe(gulp.dest("../dist/"))
});

gulp.task('fonts', function() {
    return gulp.src([
        'fonts/**/*'])
        .pipe(gulp.dest('../dist/fonts/'))
        .pipe(browserSync.stream());
});

gulp.task('img', function() {
    return gulp.src([
        'img/**/*'])
        .pipe(gulp.dest('../dist/img/'))
        .pipe(browserSync.stream());
});

gulp.task('scripts', function() {
    return gulp.src([
        'js/**/*'])
        .pipe(gulp.dest('../dist/js/'))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);