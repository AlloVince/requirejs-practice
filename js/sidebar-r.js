define('sidebar', function(){
    var sidebar = function(){
    }
    sidebar.foo = function(){
        console.log('sidebar requirejs version foo');
    };
    sidebar.prototype.bar = function(){
        console.log('sidebar requirejs version bar');
    }
    return sidebar;
});
