/**
 * Created by raul on 13/10/15.
 */

var constants = require('./constants');
var TASK = constants.TASK;
var PATH = constants.PATH;
var SPECS = constants.SPECS;

module.exports = function build (gulp, changed, ngAnnotate, uglify, csso, processhtml, minifyHTML, rename) {

    // Copia o projeto pro destino
    gulp.task(TASK.COPY_ALL, function () {
        return gulp.src(SPECS._copyAll.src)
                .pipe(changed(PATH.BUILD_HOME))
                .pipe(gulp.dest(PATH.BUILD_HOME));
    });

    // Arruma Injecao Angular, minifica eles e os outros js.
    gulp.task(TASK.NG_ANNOTATE, function () {
        return gulp.src(PATH.CONTROLLERS + '/**/*.js')
                .pipe(ngAnnotate())
                .pipe(uglify())
                .pipe(gulp.dest(PATH.BUILD_CONTROLLERS));
    });

    // Copia todos arquivos (nao sass) da pasta de assets/css
    gulp.task(TASK.COPY_ALL_CSS, function() {
        return gulp.src([
            PATH.CSS + '/**',
            '!' + PATH.SASS + '/**'
        ])
                .pipe(gulp.dest(PATH.BUILD_CSS));
    });

    // Minify the CSS
    gulp.task(TASK.MINI_CSS, function() {
        return gulp.src([
            PATH.BUILD_CSS + '/**/*.css'
        ])
            //.pipe(uncss({
            //    html: [PATH.CLIENT + '/index.html'] // It contains some bugs
            //}))
                .pipe(csso())
                .pipe(gulp.dest(PATH.BUILD_CSS));
    });

    // Dependency Injection in html and minify the html
    gulp.task(TASK.PROCESS_HTML, function () {
        return gulp.src(PATH.CLIENT + '/index.html')
                .pipe(processhtml())
                .pipe(minifyHTML({
                    conditionals: true,
                    spare: true
                }))
                .pipe(gulp.dest(PATH.BUILD_CLIENT));
    });

    // Injeta dependencias no html e minifica o html
    gulp.task(TASK.COPY_MOD_GULPFILE, function () {
        return gulp.src(PATH.PROJECT_HOME + '/.bin/gulpfile-prod.js')
                .pipe(rename(function (path) {
                    //path.dirname += "/ciao";
                    path.basename = 'gulpfile';
                    //path.extname = '.js';
                }))
                .pipe(gulp.dest(PATH.BUILD_HOME));
    });
};