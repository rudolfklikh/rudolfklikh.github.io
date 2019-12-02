const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const GulpAutoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const del = require('del');



function styles() {
    return gulp.src('./src/scss/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(GulpAutoprefixer({
            cascade: false
        }))
        .pipe(cleanCSS({
            level: 2
        }))
        .pipe(gulp.dest('./build/css'));
}

function script() {
    return gulp.src('./src/js/main.js')
    .pipe(concat('main.js'))
    .pipe(uglify({
        toplevel: true
    }))
    .pipe(gulp.dest('./build/js'));
}

async function watch() {
    gulp.watch('./src/scss/main.scss', styles);
    gulp.watch('./src/js/main.js', script);
}

async function clean() {
    del(['build/*']);
}

gulp.task('build',  gulp.series(clean, gulp.parallel(styles, script)));
gulp.task('dev', gulp.series('build', watch));