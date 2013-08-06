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

  function determineFieldType ($input) {
    var value = $input.val();
    var length = value.length;
    var message, $message, $container;
    // Email validation
    if ($input.attr('type') === 'email') {
      // Check to see if the email field is valid.
      debugger;
      var isValid = validateEmail($input);
      if (isValid) {
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
    // URL validation
    if ($input.attr('type') == 'url') {

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
  }

  function validateEmail ($input) {
    var isValid = true;
    var value = $input.val();
    var index = value.indexOf('@');

    // Check to see if the field value contains
    // and @ symbol and has at least one character
    // after the @ symbol.
    if (!(index > -1 && value[index + 1])) {
      isValid = false;
    }

    return isValid;
  }

  /**
   *
   */
  function validateURL () {

  }

  /**
   *
   */
  function validatePassword () {

  }

  // Event handling

  $inputs.on('focus', function (event) {
    console.log(event.currentTarget);
  });

  $inputs.on('blur', function (event) {
    var $input = $(event.currentTarget);
    determineFieldType($input);
  });

  return this;
};





