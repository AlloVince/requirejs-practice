require.config({
  shim: {
  },
  paths: {
      sidebar : 'sidebar-r'
  },
  packages: [
  ]
});

define(['sidebar'], function(sidebar){
    sidebar.foo();
    var s = new sidebar();
    s.bar();
});
