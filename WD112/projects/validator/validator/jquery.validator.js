jQuery.fn.validator = function () {

  var $inputs = this;

  /**
   * Creates a message container and inserts provided text. Positions
   * The text against a provided $anchor element.
   *
   * @param jQuery $anchor
   *   The element to position the message against.
   * @param String message
   *   The message to display to the end user.
   */
  function setMessage ($anchor, message) {
    var $container = $('<div class="message error invisible"></div>');
    $container.text(message);
    // Check to see if a message exists before we
    // add another message.
    var $message = $anchor.next('.message');
    if ($message.length === 0) {
      // Insert the message into the DOM (on the screen).
      $anchor.after($container);
      positionMessage($anchor, $container);
      // Throw an alert.
      $container.on('transitionEnd webkitTransitionEnd', function (event) {
        $container.off('transitionEnd webkitTransitionEnd');
        alert('it\'s over');
      });

      // Transition the opacity.
      $container.removeClass('invisible');
    }
  }

  /**
   * Postions a message container against an anchor.
   *
   * @param jQuery $anchor
   *   An element to position a message container against.
   * @param jQuery $message
   *   The message container to be positioned.
   */
  function positionMessage ($anchor, $message) {
    // Position of the message.
    $message.position({
      'my': 'left center',
      'at': 'right center',
      'of': $anchor
    });
  }

  // Event handling

  $inputs.on('focus', function (event) {
    console.log(event.currentTarget);
  });

  $inputs.on('blur', function (event) {
    var $input = $(event.currentTarget);
    var value = $input.val();
    var length = value.length;
    var message, $message, $container;
    // Email validation
    if ($input.attr('type') === 'email') {
      var index = value.indexOf('@');
      if (index > -1 && value[index + 1]) {
        $input.removeClass('invalid');
        // Remove the error message.
        $input.next('.message').remove();
      }
      else {
        $input.addClass('invalid');
        // Add a message to the user to indicate why the field is invalid.
        message = "The value is not a valid email address."
        setMessage($input, message);
      }
    }
    // Validate that the field has at least 10 characters.
    else {
      if (length < 10) {
        $input.addClass('invalid');
        // Add a message to the user to indicate why the field is invalid.
        message = "The field must have more than 10 characters."
        setMessage($input, message);
      }
      else {
        $input.removeClass('invalid');
        // Remove the error message.
        $input.next('.message').remove();
      }
    }
  });

  return this;
};





