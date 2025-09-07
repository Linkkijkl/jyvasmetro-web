#!/bin/sh
# Creates links to all required dependencies, so that they become available to Hugo.

rm -Rf assets/node && mkdir -p assets/node
# Bootstrap
link node_modules/bootstrap/dist/js/bootstrap.bundle.min.js assets/node/bootstrap.bundle.min.js
link node_modules/bootstrap/dist/css/bootstrap.min.css assets/node/bootstrap.min.css
# JQuery
link node_modules/jquery/dist/jquery.min.js assets/node/jquery.min.js
# Popper.js
link node_modules/popper.js/dist/popper.min.js assets/node/popper.min.js
# Jquery.easing
link node_modules/jquery.easing/jquery.easing.min.js assets/node/jquery.easing.min.js
# Masonry-layout
link node_modules/masonry-layout/dist/masonry.pkgd.min.js assets/node/masonry.pkgd.min.js
