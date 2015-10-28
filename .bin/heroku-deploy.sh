#!/usr/bin/env bash

# $1 path (../melhoreme-build)
# $2 boolean

cd $1 \
echo "App Deploy:" && pwd \
&& git init \
&& heroku git:remote -a melhoreme \
&& heroku config:set NODE_MODULES_CACHE=$2 \
&& git add . \
&& git commit -m "gulp-commit" --allow-empty \
&& git push -f heroku master;