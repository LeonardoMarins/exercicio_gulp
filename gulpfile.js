const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

function compilaSass() {
    return gulp.src("./src/styles/*.scss")
    .pipe(sass({
        outputStyle: 'compressed',
    }))
    .pipe(gulp.dest("./build/styles"));
}

function comprimeJavascript() {
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify()) // comprimindo arquivos js
        .pipe(gulp.dest('./build/scripts'));
}

function comprimeImagem() {
    return gulp.src("./src/images/*")
        .pipe(imagemin())
        .pipe(gulp.dest("./build/images"));
}


exports.default = function() {
    gulp.watch("./src/styles/*.scss",{ignoreInitial:false}, gulp.series(compilaSass));
    gulp.watch("./src/scripts/*.js",{ignoreInitial:false}, gulp.series(comprimeJavascript));
    gulp.watch("./src/images/*",{ignoreInitial:false}, gulp.series(comprimeImagem));
}