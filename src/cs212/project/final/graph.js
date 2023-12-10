(function () {
  function changeClass(el) {
    if ($(el).hasClass('white')) {
      $(el).removeClass('white');
      $(el).addClass('grey');
    } else {
      $(el).removeClass('grey');
      $(el).addClass('white');
    }
  };

  function allGrey() {
    var elements = document.querySelectorAll('td');
    var allGrey = true;
    for (var i = 0; i < elements.length; i++) {
      if ($(elements[i]).hasClass('white')) {
        allGrey = false;
        break;
      }
    }
    return allGrey;
  }
      
                                 
  $('td').on('click', function() {
    changeClass(this);
    if (allGrey()) {
      window.alert('You win!');
    }
  });
})();
