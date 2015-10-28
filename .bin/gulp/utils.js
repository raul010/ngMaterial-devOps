/**
 * Created by raul on 13/10/15.
 */
var constants = require('./constants');
var TASK    = constants.TASK;

module.exports = function(gulp, shell, argv){
    gulp.task(TASK.EXIT_GULP, function () {
        process.exit(0);
    });
    gulp.task(TASK.PAGERES_SNAPSHOT, shell.task([
        'node ./pageres.js ' + argv.s
    ]));
};