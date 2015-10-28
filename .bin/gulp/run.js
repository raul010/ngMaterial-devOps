/**
 * Created by raul on 13/10/15.
 */
var constants = require('./constants');
var TASK    = constants.TASK;
var SPECS    = constants.SPECS;

module.exports = function run(gulp, nodemon, browserSync, shell) {

    gulp.task(TASK.NODEMON, function () {
        nodemon({
            script: 'server.js',
            ext: 'js',
            ignore: SPECS._nodemon.ignoreFiles
        }).on('restart', function (file) {
            //console.log(file);
        });
    });

    gulp.task(TASK.BROWSER_SYNC, function() {
        browserSync.init({
            proxy: 'localhost:8080',
            open: false
        });

        gulp
            .watch(SPECS._browserSync.watchFiles)
            .on('change', browserSync.reload);
    });

    gulp.task(TASK.BROWSER_SYNC_RELOAD, shell.task([
        'browser-sync reload'
    ]));

};