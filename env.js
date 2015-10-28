var path = require('path');

module.exports = (function() {

    // PROJECT PATHS
    function PATH() {
        // ROOT
        process.env.PROJECT_HOME    = this.PROJECT_HOME = '.';
        process.env.CLIENT          = this.CLIENT       = path.join(this.PROJECT_HOME, '/client');
        process.env.SERVER          = this.SERVER       = path.join(this.PROJECT_HOME, '/server');
        process.env.TESTS           = this.TESTS        = path.join(this.PROJECT_HOME, '/test');

        // CLIENT
        process.env.APP             = this.APP          = path.join(this.CLIENT, '/app');
        process.env.ASSETS          = this.ASSETS       = path.join(this.CLIENT, '/assets');
        process.env.VIEWS           = this.VIEWS        = path.join(this.CLIENT, '/views');

        // APP (Client)
        process.env.CONTROLLERS     = this.CONTROLLERS  = path.join(this.APP, '/controllers');
        process.env.SERVICES        = this.SERVICES     = path.join(this.APP, '/services');

        // ASSETS
        process.env.CSS             = this.CSS          = path.join(this.ASSETS,  '/css');
        process.env.SASS            = this.SASS         = path.join(this.CSS, '/_sass');
        process.env.JS              = this.JS           = path.join(this.ASSETS, '/js');
        process.env.LIBS            = this.LIBS         = path.join(this.ASSETS + '/libs');


        // BUILD ROOT
        process.env.BUILD_HOME      = this.BUILD_HOME   = '../melhoreme-build';
        process.env.BUILD_TEMP      = this.BUILD_TEMP   = path.join(this.BUILD_HOME, '/temp');
        process.env.BUILD_CLIENT    = this.BUILD_CLIENT = path.join(this.BUILD_HOME, '/client');

        // BUILD CLIENT
        process.env.BUILD_APP       = this.BUILD_APP    = path.join(this.BUILD_CLIENT, '/app');
        process.env.BUILD_ASSETS    = this.BUILD_ASSETS = path.join(this.BUILD_CLIENT, '/assets');

        // BUILD APP (Client)
        process.env.BUILD_CONTROLLERS  = this.BUILD_CONTROLLERS  = path.join(this.BUILD_APP, '/controllers');
        process.env.BUILD_SERVICES     = this.BUILD_SERVICES     = path.join(this.BUILD_APP, '/services');

        // BUILD ASSETS
        process.env.BUILD_CSS       = this.BUILD_CSS    = path.join(this.BUILD_ASSETS, '/css');
        process.env.BUILD_JS        = this.BUILD_JS     = path.join(this.BUILD_ASSETS, '/js');





    };

    new PATH();

    //process.env.PROJECT_HOME    = PATH.PROJECT_HOME;
    //process.env.CLIENT          = PATH.CLIENT;
    //process.env.VIEWS           = PATH.VIEWS;
    //
    //// APP (client)
    //process.env.CONTROLLERS = PATH.CONTROLLERS;
    //process.env.SERVICES    = PATH.SERVICES;
    //
    //// ASSETS
    //process.env.ASSETS      = PATH.ASSETS;
    //process.env.CSS         = PATH.CSS;
    //process.env.SASS        = PATH.SASS;
    //process.env.JS          = PATH.JS;
    //process.env.LIBS        = PATH.LIBS;
    //// PROJECT BUILD
    //process.env.BUILD_HOME     = PATH.BUILD_HOME;
    //process.env.BUILD_CLIENT   = PATH.BUILD_CLIENT;
    //process.env.BUILD_ASSETS   = PATH.BUILD_ASSETS;
    //process.env.BUILD_TEMP     = PATH.BUILD_TEMP;
    //
    //// BUILD ASSETS
    //process.env.BUILD_CSS  = PATH.BUILD_CSS;
    //process.env.BUILD_JS   = PATH.BUILD_JS;

})();

