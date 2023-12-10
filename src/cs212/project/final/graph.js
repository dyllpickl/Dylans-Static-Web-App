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

  function toggleSquareClass(row, col) {
    var rows = document.querySelectorAll('tr');
    var numRows = table.length;
    var numCols = table[0].children.length;

    if (row >= 0 && row < numRows && col >= 0 && col < numCols) {
      var currentSquare = table[row].children[col];
      changeClass(currentSquare);
    }
  }

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
    var rows = $(this).parent().index();
    var cols = $(this).index();
    var north = (rows - 1, cols);
    var east = (rows, col + 1);
    var south = (rows + 1, col);
    var west = (rows, col - 1);
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
