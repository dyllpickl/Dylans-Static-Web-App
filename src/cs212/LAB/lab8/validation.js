// REQUIREMENTS
// No empty fields
// Valid email format
// Password and confirm password match

(function () {
  // If the value of element is empty, return true
  function isEmpty(el) {
    return !el.value.trim();
  }
  
  // Create error message
  function setErrorMessage(el, message) {
    $(el).data("errorMessage", message);
  }
  
  // Check if email input is valid format, return if valid or not
  function validEmail() {
    var email = document.getElementById("email");
    var valid = /[^@]+@[^@]+/.test(email.value);
    if (!valid) {
      setErrorMessage(email, "Please enter a valid email");
    }
    return valid;
  }

  // Show the error message 
  function showErrorMessage(el) {
    var $el = $(el);
    var $error = $el.siblings(".error");
    if (!$error.length) {
      $error = $('<span class="error"></span>').insertAfter($el);
    }
    $error.text($(el).data("errorMessage"));
  }

  // Remove the error message
  function removeErrorMessage(el) {
    var $el = $(el);
    var $error = $el.siblings(".error");
    if ($error.length) {
      $error.text("");
    }
  }

  // Check if passwords match, return true if match
  function passwordMatch() {
    var pwd = document.getElementById("pwd");
    var conf_pwd = document.getElementById("conf_pwd");
    if (pwd.value != conf_pwd.value) {
      setErrorMessage(conf_pwd, "Please check that your passwords match");
      return false;
    }
    return true;
  }

  // Return message if field is empty
  function validateRequiredEl(el) {
    var filled = !isEmpty(el);
    if (!filled) {
      setErrorMessage(el, "Field is required");
    }
    return filled;
  }

  // Runs through forms to check if requirements are met
  $("form").on("submit", function(e) {
    var elements = this.elements;
    var valid = {};
    var formValid;

    // Run through all form elements, and add them to valid object with a true or false value
    for (var i = 0; i < (elements.length-1); i++) {
      var nonEmptyEl = validateRequiredEl(elements[i]);
      if (!nonEmptyEl) {
        showErrorMessage(elements[i]);
      } else {
        removeErrorMessage(elements[i]);
      }
      valid[elements[i].id] = nonEmptyEl;
    }

    // Make email element false if type is incorrect
    if (!validEmail()) {
      showErrorMessage(document.getElementById("email"));
      valid.email = false;
    } else {
      removeErrorMessage(document.getElementById("email"));
    }

    // If passwords don't match, display error message
    if (!passwordMatch()) {
      showErrorMessage(document.getElementById("conf_pwd"));
      valid.conf_pwd = false;
    } else {
      removeErrorMessage(document.getElementById("conf_pwd"));
    }

    // Check if everything is valid
    for (var i in valid) {
      if (!valid[i]) {
        formValid = false;
        break;
      }
      formValid = true;
    }

    // If everything is not valid, prevent submit button
    if (!formValid) {
      e.preventDefault();
    }
  });
})();
      
