/**
 * Created by raul on 13/10/15.
 */

var constants = require('./constants');
var TASK = constants.TASK;
var PATH = constants.PATH;

module.exports = function (gulp, sass) {
    gulp.task(TASK.SASS_CONFIG, function () {
        gulp.src(PATH.SASS + '/**/*.scss')
                .pipe(sass().on('error', sass.logError))
                .pipe(gulp.dest(PATH.CSS));
    });
    gulp.task(TASK.SASS_WATCH, function () {
        gulp.watch(PATH.SASS +  '/**/*.scss', [TASK.SASS_CONFIG]);
    });

// copy all misc (non saas)
    gulp.task('copy-src-css', function () {
        gulp.src([
            PATH.SASS +  '/**/*.*',
            '!' + PATH.SASS +  '/**/*.scss'
        ])
            //.pipe(cache('watch:copy-B'))
                .pipe(gulp.dest(PATH.CSS));
    });
    gulp.task(TASK.CSS_RESOURCES_WATCH, function () {
        gulp.watch(PATH.SASS +  '/**/*.*', ['copy-src-css']);
    });
};
