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
    var rows = $(this).parent().index();
    var cols = $(this).index();
    var north = (rows - 1, cols);
    var east = (rows, cols + 1);
    var south = (rows + 1, cols);
    var west = (rows, cols - 1);    
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
