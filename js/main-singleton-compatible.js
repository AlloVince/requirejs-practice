(function(root, factory) {
    if (typeof define === "function" && define.amd) {
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
                jquery: ('querySelector' in document && 'localStorage' in window && 'addEventListener' in window) ? "../vendor/jquery/dist/jquery" : "../vendor/jquery-1.11.1/dist/jquery",
                underscore: "../vendor/underscore/underscore",
                UserManager : 'manager'
            },
            packages: [
            ]
        });
        require(['UserManager'], function(UserManager){
            factory(root, UserManager);
        });
    } else {
        factory(root, root.UserManager);
    }

}(this, function(root, UserManager) {
    var usrManager = UserManager.getInstance({
        username : 'AlloVince'
    });
    console.log(usrManager.getOptions());
}));
