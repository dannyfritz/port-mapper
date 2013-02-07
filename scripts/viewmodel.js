define(['knockout', 'jquery', 'moment', 'Port'],
  function (ko, $, Moment, Port) {
    ko.bindingHandlers.isNumber = {
      update: function(element, valueAccessor) {
        var value = valueAccessor()();
        if ((/^\d+$/).test(value)) {
          $(element).removeClass("error");
        } else {
          $(element).addClass("error");
        }
      }
    };
    var Viewmodel = function() {
      var self = this;
      self.ports = new ko.observableArray();
      self.addPort = function(port) {
        self.ports.push(port);
      };
      self.inputNumber = new ko.observable();
      self.inputName = new ko.observable();
      self.newPort = function() {
        var newPort = new Port(self.inputNumber(), self.inputName());
        newPort.save();
        self.loadPort(newPort);
      };
      self.loadPort = function(newPort) {
        if (newPort instanceof Array) {
          _.each(newPort, function(port) {
            self.loadPort(port);
          });
          return;
        }
        self.ports.push(newPort);
        self.ports.sort(function(left, right) {
          return left.number > right.number;
        });
      };
      self.removePort = function(port) {
        port.remove();
        self.ports.remove(port);
      };
      self.parseDate = function(date) {
        return Moment(date).fromNow();
      };
    };
    return Viewmodel;
});