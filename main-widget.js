require.config({
  shim: {
  },
  paths: {
      widget : 'widget'
  },
  packages: [
  ]
});

define(['widget'], function(widget){
    widget.foo();
    var w = new widget();
    w.bar();
});
