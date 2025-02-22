const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const uglifyCSS = require('gulp-uglifycss');
const concat = require('gulp-concat');
const htmlmin = require('gulp-htmlmin');

function appHTML() {
    return gulp.src("src/**/*.html")
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest("build"));
}
function appCSS() {
    return gulp.src("src/assets/sass/index.scss")
        .pipe(sass().on('error', sass.logError ))
        .pipe(uglifyCSS({ "uglyComments": true }))
        .pipe(concat('app.min.css'))
        .pipe(gulp.dest('build/assets/css'));
}

function appJS() {
    return gulp.src("src/assets/js/**/*.js")
        .pipe(babel({ presets: ['ENV'], comments: false }))
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('build/assets/js'));
}

function appIMG() {
    return gulp.src("src/assets/imgs/**/*.*")
        .pipe(gulp.dest('build/assets/imgs'));
}

//nomeando a task para poder usar o watch no arquivo servidor.js
gulp.task('appHTML', appHTML);
gulp.task('appCSS',appCSS)
gulp.task('appJS',appJS)
gulp.task('appIMG',appIMG)

module.exports = {
    appHTML,
    appCSS,
    appJS,
    appIMG
}