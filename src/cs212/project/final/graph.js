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
    var table = document.querySelector('table');
    var row = $(this).parent().index();
    var col = $(this).index(); 
    changeClass(this);
    changeClass(table[row - 1].children[col]);  // North
    changeClass(table[row].children[col + 1]);  // East
    changeClass(table[row + 1].children[col]);  // South
    changeClass(table[row].children[col - 1]);  // West
    if (allGrey()) {
      window.alert('You win!');
    }
  });
})();
