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

  function changeSquares(el) {
    var rows = $(el).parent().index();
    var cols = $(el).index();
    var north = (rows - 1, cols);
    var east = (rows, col + 1);
    var south = (rows + 1, col);
    var west = (rows, col - 1);    
    changeClass(el);
    changeClass(north);
    changeClass(east);
    changeClass(south);
    changeClass(west);

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
    changeSquares(this);
    if (allGrey()) {
      window.alert('You win!');
    }
  });
})();
