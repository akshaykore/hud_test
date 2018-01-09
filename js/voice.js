if (annyang) {
  // Let's define a command.

  var commands = {
    'hey yo': say_greeting,//function() { alert('hey sexy!'); },

    'wiki *tag': getwiki,

    'dodo *tag': getwolfram,

    'reload': reloadfunction,

    'clear': clearall,
    //'show me weather': getweather,
    'take me home': navigate,
  };

  // Add our commands to annyang
  annyang.addCommands(commands);

  // Start listening.
  annyang.start();
}
