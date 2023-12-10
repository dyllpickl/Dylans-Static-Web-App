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
    var row = $(this).parent().index();
    var col = $(this).index();
    var north = (row - 1, col);
    var east = (row, col + 1);
    var south = (row + 1, col);
    var west = (row, col - 1);    
    changeClass(this);
    changeClass(north);
    changeClass(east);
    changeClass(south);
    changeClass(west);
    if (allGrey()) {
      window.alert('You win!');
    }
  });
})();
