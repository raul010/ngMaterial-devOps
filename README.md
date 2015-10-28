# Angular Material App

## Features
* Angular
* Angular Material
* DevOps (gulp)
    * tests
    * builds
    * compilations
    * commits
    * deploys
* Node.js
    * Express
    * MongoDB
* Nginx (for static files)


## Installation
1. Clone the repository
2. Install npm modules: `npm install`
3. Install bower dependencies `bower install`
4. Simple start up the server: `npm start` OR  `nodemon .` (show: gulp help)

5. Test navigation: in browser at http://localhost:8080
6. Ctrl C - The server will not be run this way. As will be shown below.

# Settings and configuring dependencies

## Download, install and configure Nginx

1 - Install [nginx](https://www.nginx.com/resources/wiki/start/topics/tutorials/install/). Something like, in Ubuntu:

    sudo -s
    nginx=stable # use nginx=development for latest development version
    add-apt-repository ppa:nginx/$nginx
    apt-get update
    apt-get install nginx

2 - Configuring Nginx. Download [this three files](https://drive.google.com/open?id=0B7xj8KJbuS8vSXV0MVY0eUlkU0k):

Then copy and make synlinc:
    
    sudo -s
    cp -r melhore.me /etc/nginx/sites-available/melhore.me
    cp -r melhore.me3000 /etc/nginx/sites-available/melhore.me3000
    
    ln -s /etc/nginx/sites-available/melhore.me /etc/nginx/sites-enabled/
    ln -s /etc/nginx/sites-available/melhore.me3000 /etc/nginx/sites-enabled/

and overwrite this:
    
    sudo -s
    cp - r nginx.conf /etc/nginx/nginx.conf
    
3 - Run nginx (ubuntu like):
    
    sudo service nginx start | stop | status | restart
    

## Running App

`gulp run` - Will run node server on port 8080, and Browsersync on port 3000, and should be accessed from nginx proxy: http://127.0.0.1:83 (OR :80 without browsersync)

`gulp build` - Make all builds, minifyes, compiles, to deploy in production. Flags `-h` and `-m` makes the deploy;

These are certainly the two most used tasks.

## Build/Run Help
`gulp help`

<pre>
    Usage
       gulp [TASK] [OPTIONS...]
     
     Available tasks
      build                         Prepara para Deploy | Aliases: b, B [build_SYNC] 
       --h                          --> E faz deploy (no heroku) 
       --m                          --> E força instalaçao de dependencias front end no heroku (bower install)
      help                          Display this help text.
      heroku                        Faz deploy no HEROKU | Aliases: h, H [heroku-deploy-SYNC] 
       --m                          --> força instalaçao de dependencias front end no heroku (bower install)
      minify-css                    Minifica CSS | Aliases: mc, MC [mini-css]
      pageres                       Captura IMAGENS | [pageres-snapshot-SYNC]
      pre-tests                     (AINDA EM VERSÃO BETA, NÃO USAR) Start-up all requiriments to run tests | Aliases: p, P [ngrok-jenkins, karma-start, webdriver-start]
      reload-sync                   Faz RELOAD de todos Browsers | Aliases: r, R [browser-sync-reload-SYNC]
      run                           Inicia o NODEMON e BROWSER-SYNC | [nodemon, browser-sync, sass:watch, watch:copy-src]
      sass                          Watch Sass | Aliases: s, S [mini-css]
      server                        Inicia o NODEMON | Aliases: n, N [nodemon]

</pre>

## Logs

    tail -f /var/log/nginx/error.log
    tail -f /var/log/nginx/access.log
    tail -f /var/log/nginx/melhore.me
