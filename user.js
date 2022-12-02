const textarea = document.querySelector('textarea');
textarea.addEventListener('keydown', function(event) {
  // Check if the user pressed Meta+ENTER.
  if (event.metaKey && event.keyCode === 13) {
    // Read the text from the textarea and perform the command.
    const text = textarea.value;
    const command = parseCommand(text);
    if (command.type === 'fetch') {
      fetch(command.url).then(function(response) {
        response.text().then(function(body) {
          // Replace the textarea text with the body of the fetched webpage.
          textarea.value = body;
        });
      });
    }
  }
});

function parseCommand(text) {
    // Parse the command from the text.
    if (text.startsWith('/fetch')) {
      var parts = text.split(' ');
      if (parts.length < 2) {
        return null;
      }
      return {
        type: 'fetch',
        url: parts[1]
      };
    } else {
      // Handle other commands here.
    }
  }
