define(['jquery'], function($){
    var widget = function(){
    }
    widget.foo = function(){
        console.log('foo', $.now());
    };
    widget.prototype.bar = function(){
        console.log('bar', $.now());
    }
    return widget;
});
