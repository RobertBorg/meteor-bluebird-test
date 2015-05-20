if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    p = function(){
      return new Promise(function(res,rej) {
        res("asd");
      });
    };
    p().then(function(asd){
      console.log("asd is " + asd);
      return "zxc"
    }).then(Meteor.bindEnvironment(function(zxc){
      console.log("zxc is " + zxc);
      return "qwe"
    })).then(function(qwe){
      console.log("qwe is " + qwe);
    });
  });
}
