define(['lodash', 'store', 'jsface'],
  function (_, store, jsface) {
    var Port = jsface.Class({
      constructor: function(number, name, date) {
        this.number  = number;
        this.name = name;
        this.date = date || new Date();
      },
      save: function() {
        store.set(this.number, {name: this.name, date: this.date});
      },
      remove: function() {
        store.remove(this.number);
      }
    });
    Port.reset = function() {
      store.clear();
    };
    Port.load = function() {
      var ports = store.getAll();
      return _.map(_.pairs(ports), function(port) {
          return new Port(port[0], port[1].name, port[1].date);
        });
    };
    return Port;
});