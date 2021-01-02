const { series } = require('gulp');
const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');

function transformacaoJS(cb) {
    console.log('_________________________________Padrão!')
    // src/**/*.js -> { ** = todos diretórios dentro da pasta src, *.js todos aquivos javascript dentros desses diretórios }
    return gulp.src('src/**/*.js')
                .pipe(babel({
                    comments: false,
                    presets: ["env"]
                }))
                .pipe(uglify())
                .on('error', err => console.log(err))
                .pipe(concat('codigo.min.js'))
                .pipe(gulp.dest('build'));
}

function fim(cb) {
    console.log('_________________________________Fim!');
    return cb();
}

exports.default = series(transformacaoJS, fim);