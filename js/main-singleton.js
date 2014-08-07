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
        backbone: "../vendor/backbone/backbone",
        jquery: "../vendor/jquery/dist/jquery",
        underscore: "../vendor/underscore/underscore",
        UserManager : 'manager'
    },
    packages: [
    ]
});

define(function (require) {
    var um = require('UserManager');
    var usrManager = UserManager.getInstance({
        username : 'AlloVince'
    });
    console.log(usrManager.getOptions());

    var usrManager2 = UserManager.getInstance({
        username : 'overwriter'
    });
    console.log(usrManager2.getOptions());

    //requirejs obj could be instantiated
    var obj = new um();
    console.log(obj);

    //But for only once
    var um2 = require('UserManager');
    var obj2 = new um2();
    console.log(obj2);


    //Exception throw
    var objnew = new UserManager();

}); 
