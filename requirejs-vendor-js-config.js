require.config({
  shim: {
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: [
				'underscore',
				'jquery'
			],
			exports: 'Backbone'
		}
  },
  paths: {
    "art-template": "vendor/art-template/node/template",
    backbone: "vendor/backbone/backbone",
    blockui: "vendor/blockui/jquery.blockUI",
    bootstrap: "vendor/bootstrap/dist/js/bootstrap",
    "bootstrap-datepicker": "vendor/bootstrap-datepicker/js/bootstrap-datepicker",
    "bootstrap-timepicker": "vendor/bootstrap-timepicker/js/bootstrap-timepicker.min",
    ckeditor: "vendor/ckeditor/ckeditor",
    dropzone: "vendor/dropzone/downloads/dropzone.min",
    epiceditor: "vendor/epiceditor/Jakefile",
    fontawesome: "vendor/fontawesome/fonts/*",
    garlicjs: "vendor/garlicjs/dist/garlic.min",
    highcharts: "vendor/highcharts/highcharts",
    "highcharts-more": "vendor/highcharts/highcharts-more",
    exporting: "vendor/highcharts/modules/exporting",
    html5shiv: "vendor/html5shiv/dist/html5shiv",
    iCheck: "vendor/iCheck/icheck.min",
    jquery: "vendor/jquery/dist/jquery",
    "jquery-1.11.1": "vendor/jquery-1.11.1/dist/jquery",
    "jquery.postmessage-transport": "vendor/jquery-file-upload/js/cors/jquery.postmessage-transport",
    "jquery.xdr-transport": "vendor/jquery-file-upload/js/cors/jquery.xdr-transport",
    "jquery.ui.widget": "vendor/jquery-file-upload/js/vendor/jquery.ui.widget",
    "jquery.fileupload": "vendor/jquery-file-upload/js/jquery.fileupload",
    "jquery.fileupload-process": "vendor/jquery-file-upload/js/jquery.fileupload-process",
    "jquery.fileupload-validate": "vendor/jquery-file-upload/js/jquery.fileupload-validate",
    "jquery.fileupload-image": "vendor/jquery-file-upload/js/jquery.fileupload-image",
    "jquery.fileupload-audio": "vendor/jquery-file-upload/js/jquery.fileupload-audio",
    "jquery.fileupload-video": "vendor/jquery-file-upload/js/jquery.fileupload-video",
    "jquery.fileupload-ui": "vendor/jquery-file-upload/js/jquery.fileupload-ui",
    "jquery.fileupload-jquery-ui": "vendor/jquery-file-upload/js/jquery.fileupload-jquery-ui",
    "jquery.fileupload-angular": "vendor/jquery-file-upload/js/jquery.fileupload-angular",
    "jquery.iframe-transport": "vendor/jquery-file-upload/js/jquery.iframe-transport",
    "jquery-pjax": "vendor/jquery-pjax/jquery.pjax",
    "jquery-ui": "vendor/jquery-ui/jquery-ui",
    "jquery.lazyload": "vendor/jquery.lazyload/jquery.lazyload",
    "jquery.scrollstop": "vendor/jquery.lazyload/jquery.scrollstop",
    moment: "vendor/moment/moment",
    nanoscroller: "vendor/nanoscroller/bin/javascripts/jquery.nanoscroller",
    numeral: "vendor/numeral/numeral",
    parsleyjs: "vendor/parsleyjs/dist/parsley",
    css: "vendor/require-css/css",
    "css-builder": "vendor/require-css/css-builder",
    normalize: "vendor/require-css/normalize",
    requirejs: "vendor/requirejs/require",
    "requirejs-text": "vendor/requirejs-text/text",
    respond: "vendor/respond/dest/respond.src",
    select2: "vendor/select2/select2",
    "socket.io": "vendor/socket.io/index",
    store: "vendor/store.js/store",
    typeahead: "vendor/typeahead.js/dist/typeahead.bundle",
    underscore: "vendor/underscore/underscore",
    URI: "vendor/uri.js/src/URI.min",
    IPv6: "vendor/uri.js/src/IPv6",
    SecondLevelDomains: "vendor/uri.js/src/SecondLevelDomains",
    punycode: "vendor/uri.js/src/punycode",
    URITemplate: "vendor/uri.js/src/URITemplate",
    "jquery.URI": "vendor/uri.js/src/jquery.URI.min",
    "URI.fragmentQuery": "vendor/uri.js/src/URI.fragmentQuery",
    "URI.fragmentURI": "vendor/uri.js/src/URI.fragmentURI"
  },
  packages: [

  ]
});
