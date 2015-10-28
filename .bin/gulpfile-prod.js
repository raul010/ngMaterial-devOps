'use strict';

//GULP
var gulp    = require('gulp');
var uglify  = require('gulp-uglify');

// PATHS
var PATH_SRC = './public/src/';

gulp.task('minify-js-lib', function () {
    gulp.src(PATH_SRC + 'libs/**/*.min.js')
            .pipe(uglify())
            .pipe(gulp.dest(PATH_SRC + 'libs'));
});