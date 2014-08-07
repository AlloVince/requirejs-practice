(function(root, factory) {
    if (typeof define === "function" && define.amd) {
        //For requirejs
        define('widget', function (require, exports, module) {
            var $ = require('jquery');
            return factory(root, exports, $);
        });
    } else if (typeof exports !== "undefined") {
        //For nodejs
        var $ = require("jquery");
        factory(root, exports, $);
    } else {
        //exports as global
        root.widget = factory(root, {}, root.jQuery);
    }
}(this, function(root, widget, $) {
    "use strict";
    var defaultOptions = {
        url : "" 
    };

    widget = function(options){
    };

    widget.foo = function(){
        console.log('foo', $.now());
    }

    widget.prototype = {
        bar: function(){
            console.log('bar', $.now());
        }
    };

    return widget;
}));
