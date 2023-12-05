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
    var email = $("#email")[0];
    var valid = /[^@]+@[^@]+/.test(email.value);
    if (!valid) {
      setErrorMessage(el, "Please enter a valid email");
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
    var pwd = $("#pwd")[0];
    var conf_pwd = $("#conf_pwd")[0];
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
  $("forms").on("submit", function(e) {
    var elements = this.elements;
    var valid = {};

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
    
    if (
