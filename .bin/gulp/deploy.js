/**
 * Created by raul on 13/10/15.
 */

var constants = require('./constants');
var TASK = constants.TASK;
var PATH = constants.PATH;

module.exports = function (gulp, shell, argv) {

    // PS. to install without cache module, than m = false.
    gulp.task(TASK.HEROKU_DEPLOY, shell.task([
        '.bin/heroku-deploy.sh ' + PATH.BUILD_HOME + ' ' + !argv.m
    ]));
};