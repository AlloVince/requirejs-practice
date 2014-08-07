(function(global){
    var sidebar = function(){
    }
    sidebar.foo = function(){
        console.log('sidebar compatible version foo');
    };
    sidebar.prototype.bar = function(){
        console.log('sidebar compatible version bar');
    }

    var hasModule = (typeof module !== 'undefined' && module.exports);
    // CommonJS module is defined
    if (hasModule) {
        module.exports = sidebar;
    } else if (typeof define === 'function' && define.amd) {
        define('sidebar', function (require, exports, module) {
            return sidebar;
        });
    } else {
        global.sidebar = sidebar;
    }
})(this);
