require.config({
  shim: {
  },
  paths: {
      sidebar : 'sidebar'
  },
  packages: [
  ]
});

define(['sidebar'], function(sidebar){
    sidebar.foo();
    var s = new sidebar();
    s.bar();
});
