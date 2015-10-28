/**
 * Created by raul on 13/10/15.
 *
 * AINDA EM VERSÃO BETA, NÃO USAR
 *
 */

var constants = require('./constants');
var TASK = constants.TASK;

module.exports = function (gulp, shell) {

    gulp.task(TASK.WEBDRIVER_START, shell.task([
        'sh ./.bin/startup/webdriver-start.sh'
    ]));

    gulp.task(TASK.KARMA_START, shell.task([
        'sh ./.bin/startup/karma-start.sh'
    ]));

    gulp.task(TASK.NGROK_JENKINS, shell.task([
        'sh ./.bin/startup/ngrok-jenkins.sh'
    ]));
};