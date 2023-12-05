(function () {
  // Check if passwords match, return true if match
  function passwordMatch() {
    var pwd = document.getElementById('pwd');
    var conf_pwd = document.getElementById('conf_pwd');
    if (pwd.value != conf_pwd.value) {
      return false;
    } else {
      return true;
    }
    console.log('pwd      = ' + pwd.value);
    console.log('conf_pwd = ' + conf_pwd.value);
    console.log(pwd.value == conf_pwd.value);
  }

  // On submit, check if passwords match, if not, prevent submit
  $('form').on('submit', function(e) {
    var $pwd_error = $(document.getElementById("#pwd_error"));
    if (!passwordMatch()) {
      $pwd_error.text('Passwords do not match, please try again');
      e.preventDefault();
    } else {
      $pwd_error.text('');
    }
  }
})();
