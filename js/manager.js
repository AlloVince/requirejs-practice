(function(root, factory) {
    if (typeof define === "function" && define.amd) {
        define("UserManager", function (require, exports, module) {
            var $ = require("jquery"),
            Backbone = require("Backbone"),
            _ = require("underscore");
            //Export to global anyway
            root.UserManager = factory(root, exports, $);
            return factory(root, exports, Backbone, $, _);
        });
    } else if (typeof exports !== "undefined") {
        var $ = require("jquery"),
        Backbone = require("Backbone"),
        _ = require("underscore");
        factory(root, exports, Backbone, $, _);
    } else {
        root.UserManager = factory(root, {}, root.jQuery, root.Backbone, root._);
    }

}(this, function(root, UserManager, Backbone, $, _) {
    var instance = null,
    defaultOptions = {
        url : ""
    }

    UserManager = function(options){
        if(instance !== null){
            throw new Error("Cannot instantiate more than one Singleton, use Singleton.getInstance()");
        }
        this.options = {};
        this.initialize(options);
    };

    UserManager.prototype = {
        getOptions : function(){
            return this.options;
        },
        initialize: function(options){
            this.options = $.extend({}, defaultOptions, options);
        }
    };

    UserManager.getInstance  = function(options){
        if(instance === null){
            instance = new UserManager(options);
        }
        return instance;
    }
    return UserManager;
}));

