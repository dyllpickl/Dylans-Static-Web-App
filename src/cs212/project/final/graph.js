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
    var table = document.querySelectorAll('table');
    var row = $(this).parent().index();
    var col = $(this).index();
    var north = [row - 1, col];
    var east = [row, col + 1];
    var south = [row + 1, col];
    var west = [row, col - 1];    
    changeClass(this);
    changeClass(table[north[0]].children[north[1]]);
    changeClass(table[east[0]].children[east[1]]);
    changeClass(table[south[0]].children[south[1]]);
    changeClass(table[west[0]].children[west[1]]);
    if (allGrey()) {
      window.alert('You win!');
    }
  });
})();
