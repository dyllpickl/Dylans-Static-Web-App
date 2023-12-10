(function () {
  $('td').each(function() {
    var random = Math.floor(Math.random() * 2);
    if (random == 0) {
      $(this).addClass('white');
    } else {
      $(this).addClass('grey');
    }
  });
      
  function changeClass(el) {
    if ($(el).hasClass('white')) {
      $(el).removeClass('white');
      $(el).addClass('grey');
    } else {
      $(el).removeClass('grey');
      $(el).addClass('white');
    }
  }

  function changeSquare(table, r, c) {
    if (r >= 0 && r < 5 && c >= 0 && c < 5) {
      var box = table.rows[r].cells[c];
      changeClass(box);
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
    var table = document.querySelector('table');
    var row = $(this).parent().index();
    var col = $(this).index(); 
    changeSquare(table, row, col);  // Center
    changeSquare(table, row - 1, col);  // North
    changeSquare(table, row, col + 1);  // East
    changeSquare(table, row + 1, col);  // South
    changeSquare(table, row, col - 1);  // West
    if (allGrey()) {
      window.alert('You win!');
    }
  });
})();
