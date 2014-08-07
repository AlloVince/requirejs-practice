define(['jquery'], function($){
    var widget = function(){
    }
    widget.foo = function(){
        console.log('widget requirejs version foo', $.now());
    };
    widget.prototype.bar = function(){
        console.log('widget requirejs version bar', $.now());
    }
    return widget;
});
