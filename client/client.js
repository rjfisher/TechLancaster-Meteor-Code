Template.messages.messages = function() {
  return Messages.find({}, { sort:  { time: -1 }});
}

Template.input.events = {
  'keydown input#message' : function (event) {
    if (event.which == 13) {
      if (Meteor.user())
        var name = Meteor.user().username;
      else
        var name = 'Anon';
      var message = document.getElementById('message');

      if (message.value != '') {
        Messages.insert({
          name: 'Anon', //name
          message: message.value,
          time: Date.now(),
        });

        document.getElementById('message').value = '';
        message.value = '';
      }
    }
  }
}
