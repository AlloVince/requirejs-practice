require.config({
  shim: {

  },
  paths: {
    backbone: "../vendor/backbone/backbone",
    jquery: ('querySelector' in document && 'localStorage' in window && 'addEventListener' in window) ? "../vendor/jquery/dist/jquery" : "../vendor/jquery-1.11.1/dist/jquery",
    css: "../vendor/require-css/css",
    "css-builder": "../vendor/require-css/css-builder",
    normalize: "../vendor/require-css/normalize",
    requirejs: "../vendor/requirejs/require",
    "requirejs-text": "../vendor/requirejs-text/text",
    underscore: "../vendor/underscore/underscore",
    "jquery-1.11.1": "../vendor/jquery-1.11.1/dist/jquery"
  },
  packages: [

  ]
});
