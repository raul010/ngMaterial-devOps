/**
 * Created by raul on 13/10/15.
 */

var path = require('path');

// TASKs NAMEs
var TASK = {

    NODEMON           : 'nodemon',
    EXIT_GULP       : 'exit-gulp',
    BROWSER_SYNC    : 'browser-sync',

    SASS_CONFIG             : 'sass-config',
    SASS_WATCH              : 'sass:watch',
    CSS_RESOURCES_WATCH     : 'watch:copy-src',

    BROWSER_SYNC_RELOAD_$ync    : 'browser-sync-reload-SYNC',
    PAGERES_SNAPSHOT_$ync       : 'pageres-snapshot-SYNC',
    HEROKU_DEPLOY_$ync          : 'heroku-deploy-SYNC',
    BUILD_$ync                  : 'build_SYNC',

    BROWSER_SYNC_RELOAD : 'browser-sync-reload',
    HEROKU_DEPLOY       : 'heroku-deploy',
    PAGERES_SNAPSHOT    : 'pageres-snapshot',
    COPY_ALL            : 'copy-all',
    NG_ANNOTATE         : 'annotate',
    MINI_CSS            : 'mini-css',
    MINI_JS             : 'mini-js',
    //COPY_SRC_CSS_BUILD  : 'copy-src-css-build',
    PROCESS_HTML        : 'process-html',
    MINIFY_HTML         : 'minify-html',
    NPM_INSTALL         : 'npm-install',
    COPY_MOD_GULPFILE   : 'copy-modified-gulpfile',
    COPY_ALL_CSS        : 'copy-all-css',
    ECHO                : 'echo',
    WEBDRIVER_START     : 'webdriver-start',
    KARMA_START         : 'karma-start',
    NGROK_JENKINS       : 'ngrok-jenkins'
}

// PROJECT PATHS
function PATH() {
    // ROOT
    this.PROJECT_HOME    = process.env.PROJECT_HOME;
    this.CLIENT          = process.env.CLIENT;

    // ROOT/CLIENT
    this.APP             = process.env.APP;
    this.ASSETS     = process.env.ASSETS;
    this.VIEWS           = process.env.VIEWS;

    // ROOT/CLIENT/APP
    this.CONTROLLERS    = process.env.CONTROLLERS;
    this.SERVICES       = process.env.SERVICES;

    // ROOT/CLIENT/ASSETS
    this.CSS        = process.env.CSS;
    this.SASS       = process.env.SASS;
    this.JS         = process.env.JS;
    this.LIBS       = process.env.LIBS;

    // BUILD - ROOT
    this.BUILD_HOME     = process.env.BUILD_HOME;

    this.BUILD_TEMP     = process.env.BUILD_TEMP;
    this.BUILD_CLIENT   = process.env.BUILD_CLIENT;

    // ROOT/CLIENT
    this.BUILD_APP      = process.env.BUILD_APP;
    this.BUILD_ASSETS   = process.env.BUILD_ASSETS;

    // ROOT/CLIENT/ASSETS
    this.BUILD_CSS  = process.env.BUILD_CSS;
    this.BUILD_JS   = process.env.BUILD_JS;

    // BUILD APP (Client)
    this.BUILD_CONTROLLERS  = process.env.BUILD_CONTROLLERS;
    this.BUILD_SERVICES     = process.env.BUILD_SERVICES;

    // BUILD ASSETS

};

var PATH = new PATH();

// TASKs SPECIFICATIONS
var SPECS = {
    _nodemon : {
        ignoreFiles : [
            // Root Folder
            PATH.PROJECT_HOME + '/.bin',
            PATH.PROJECT_HOME + '/node_modules',
            PATH.CLIENT,
            PATH.PROJECT_HOME + '/z_old',
            PATH.PROJECT_HOME + '/.git',

            // Root Files
            PATH.PROJECT_HOME + '/gulpfile.js',
            PATH.PROJECT_HOME + '/z-old.configs'
        ]
    },

    _browserSync : {
        watchFiles : [
            PATH.CLIENT + '*.html',
            PATH.VIEWS  + '/*.html',
            PATH.JS     + '/**/*.js',
            PATH.CSS    + '/**/*.*',

            //// Ignore
            '!' + PATH.SASS   + '/**', // CSS already Reload with SAAS Task
        ]
    },

    _copyAll : {
        src : [
            PATH.PROJECT_HOME + '/**',
            PATH.PROJECT_HOME + '/.*',
            PATH.PROJECT_HOME + '/*.*',

            '!' + PATH.PROJECT_HOME + '/node_modules/**',
            '!' + PATH.PROJECT_HOME + '/z_old/**',
            '!' + PATH.PROJECT_HOME + '/.idea/**',

            // Will be have copy build later
            '!' + PATH.SASS + '/**',
            '!' + PATH.JS   + '/**',
            '!' + PATH.LIBS + '/**'
            //'!' + PATH.CSS  + '/**/*.css'
        ]
    }

}

console.log(PATH);

module.exports = {
    TASK:   TASK,
    PATH:   PATH,
    SPECS:  SPECS
}