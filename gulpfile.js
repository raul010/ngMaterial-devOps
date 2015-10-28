'use strict';
var path = require('path');

//GULP
var gulp = require('gulp-help')(require('gulp'), {
    'hideEmpty': true
});
var runSequence = require('run-sequence');

//APP
var nodemon         = require('gulp-nodemon');
var browserSync     = require('browser-sync').create();
var sass            = require('gulp-sass');
var csso            = require('gulp-csso');
var ngAnnotate      = require('gulp-ng-annotate');
var uglify          = require('gulp-uglify');
var processhtml     = require('gulp-processhtml');
var changed         = require('gulp-changed');
var cache           = require('gulp-cached');
var minifyHTML      = require('gulp-minify-html');
var rename          = require("gulp-rename");

//var uncss           = require('gulp-uncss');
//var gulpIgnore      = require('gulp-ignore');
//var del             = require('del');
//var inlineCss       = require('gulp-inline-css');

//HELPERS
var shell   = require('gulp-shell');
var argv    = require('yargs')
    // HEROKU (-m = [re]isntala modulos)
        .boolean('m')
        .default('m', false)
        .string('s')
        .boolean('h')
        .default('h', false)
        .argv;


require('./env');

var constants = require('./.bin/gulp/constants');
var TASK = constants.TASK;

var NODE_ENV = process.env.NODE_ENV || 'development';

console.log('gulp libs --> ' + process.env.LIBS);
console.log('*********************')
console.log(NODE_ENV);
console.log('*********************')

require('./.bin/gulp/pre-tests')(gulp, shell);
require('./.bin/gulp/build')(gulp, changed, ngAnnotate, uglify, csso, processhtml, minifyHTML, rename);
require('./.bin/gulp/run')(gulp, nodemon, browserSync, shell);
require('./.bin/gulp/deploy')(gulp, shell, argv);
require('./.bin/gulp/watch')(gulp, sass);
require('./.bin/gulp/utils')(gulp, shell, argv);


//  SEQUENCE Tasks -------------------------------------------------
gulp.task(TASK.PAGERES_SNAPSHOT_$ync, function(cb) {
    runSequence(TASK.PAGERES_SNAPSHOT, TASK.EXIT_GULP, cb);
});

gulp.task(TASK.BROWSER_SYNC_RELOAD_$ync, function(cb) {
    runSequence(TASK.BROWSER_SYNC_RELOAD, TASK.EXIT_GULP, cb);
});

gulp.task(TASK.HEROKU_DEPLOY_$ync, function(cb) {
    runSequence(TASK.HEROKU_DEPLOY, TASK.EXIT_GULP, cb);
});

gulp.task(TASK.BUILD_$ync, function(cb) {
    if (argv.h) {
        runSequence(
            TASK.COPY_ALL,
            TASK.NG_ANNOTATE,
            TASK.COPY_ALL_CSS,
            TASK.MINI_CSS,
            TASK.PROCESS_HTML,
            TASK.COPY_MOD_GULPFILE,
            TASK.HEROKU_DEPLOY,
            TASK.EXIT_GULP,
            cb
        );
    } else {
        runSequence(
                TASK.COPY_ALL,
                TASK.NG_ANNOTATE,
                TASK.COPY_ALL_CSS,
                TASK.MINI_CSS,
                TASK.PROCESS_HTML,
                TASK.COPY_MOD_GULPFILE,
                TASK.EXIT_GULP,
                cb
        );
    }
});
// //// SEQUENCE Tasks -------------------------------------------


//  Run ALIAS Tasks -------------------------------------------------

gulp.task('default', '', [], null, {});

gulp.task('run', 'Inicia o NODEMON e BROWSER-SYNC |',
    [TASK.NODEMON, TASK.BROWSER_SYNC, TASK.SASS_WATCH, TASK.CSS_RESOURCES_WATCH], null, {
});

gulp.task('pre-tests', '(AINDA EM VERSÃO BETA, NÃO USAR) Start-up all requiriments to run tests |',
    [TASK.NGROK_JENKINS, TASK.KARMA_START, TASK.WEBDRIVER_START], null, {
        aliases: ['p', 'P'],
    });

gulp.task('build', 'Prepara para Deploy |', [TASK.BUILD_$ync], null, {
    aliases: ['b', 'B'],
    options: {
        'h': '--> E faz deploy (no heroku)',
        'm': '--> E força instalaçao de dependencias front end no heroku (bower install)',
    },
});

gulp.task('sass', 'Watch Sass |', [TASK.MINI_CSS], null, {
    aliases: ['s', 'S']
});

gulp.task('minify-css', 'Minifica CSS |', [TASK.MINI_CSS], null, {
    aliases: ['mc', 'MC']
});

gulp.task('server', 'Inicia o NODEMON |' , [TASK.NODEMON], null, {
    aliases: ['n', 'N']
});

gulp.task('reload-sync', 'Faz RELOAD de todos Browsers |', [TASK.BROWSER_SYNC_RELOAD_$ync], null, {
    aliases: ['r', 'R']
});
gulp.task('heroku', 'Faz deploy no HEROKU |', [TASK.HEROKU_DEPLOY_$ync], null , {
    options: {'m': '--> força instalaçao de dependencias front end no heroku (bower install)'},
    aliases: ['h', 'H']
});

gulp.task('pageres', 'Captura IMAGENS |', [TASK.PAGERES_SNAPSHOT_$ync], null , {
    //options: {'s': '--> Site [localhost:3000]'},
    //aliases: ['p'] já tem 'p'
});

//  ////Run ALIAS Tasks ----------------------------------------------


/*
 https://www.npmjs.com/package/gulp-closure-compiler
 https://github.com/miickel/gulp-angular-templatecache
 https://github.com/darylldoyle/Gulp-Email-Creator
 https://github.com/doctyper/gulp-modernizr
 https://github.com/alexeyraspopov/gulp-complexity
 https://github.com/contra/gulp-concat

 Unit Tests

 gulp-nodeunit
 gulp-jasmine
 gulp-qunit
 gulp-mocha
 gulp-karma

 Graphics

 https://github.com/mahnunchik/gulp-responsive
 (produce syslos at different sizes for responsive websites.)
 https://github.com/rizalp/gulp-sharp
 ( fastest module for work JPEG, PNG, WebP and TIFF images.)
 https://github.com/sindresorhus/gulp-imagemin
 (image compression.)
 https://github.com/otouto/gulp-spritesmith
 (converting a set of images into a spritesheet and corresponding CSS variables.)

 Outros

 https://github.com/jsBoot/gulp-jsdoc
 https://github.com/ck86/main-bower-files
 (inject Bower packages. - Overwite)
 https://github.com/jas/gulp-preprocess

 Fim

 https://github.com/addyosmani/psi
 (PageSpeed Insights with reporting)
 https://github.com/addyosmani/tmi



 */