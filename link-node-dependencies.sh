#!/bin/sh

rm -Rf assets/node && mkdir -p assets/node
link node_modules/bootstrap/dist/js/bootstrap.bundle.min.js assets/node/bootstrap.bundle.min.js
link node_modules/jquery/dist/jquery.min.js assets/node/query.min.js
link node_modules/jquery.easing/jquery.easing.min.js assets/node/jquery.easing.min.js
