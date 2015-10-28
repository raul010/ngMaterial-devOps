var psi = require('psi');; fi

//// get the PageSpeed Insights report
//psi('html5rocks.com', function (err, data) {
//    console.log(data);
//    console.log(data.pageStats);
//});

// output a formatted report to the terminal
psi.output(process, function (err) {
    console.log('done');
});


//"postinstall": "if ! $NODE_MODULES_CACHE; then bower install; fi"
//    "postinstall": "bower install"
//    "postinstall": "bower install && gulp minify-js-lib"

