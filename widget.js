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
    widget = function(){
    };

    widget.foo = function(){
        console.log('widget compatible version foo', $.now());
    };

    widget.prototype = {
        bar: function(){
            console.log('widget compatible version bar', $.now());
        }
    };

    return widget;
}));
