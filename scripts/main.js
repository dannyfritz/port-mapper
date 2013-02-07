require.config({
  paths: {
    'Port': 'scripts/port',
    'Viewmodel': 'scripts/viewmodel',
    'jsface': 'scripts/jsface'
  }
});

require(['jquery', 'lodash', 'knockout', 'Port', 'Viewmodel'],
  function ($, _, ko, Port, Viewmodel) {
    var ports = Port.load();
    var viewmodel = new Viewmodel();
    viewmodel.loadPort(ports);
    $(function() {
      ko.applyBindings(viewmodel);
    });
});