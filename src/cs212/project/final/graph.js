(function () {
  function changeClass(el) {
    if ($(el).hasClass('white')) {
      $(el).removeClass('white');
      $(el).addClass('black');
    } else {
      $(el).removeClass('black');
      $(el).addClass('white');
    }
  };
  
  $('td').on('click', function() {
    changeClass(this);
  });
})();
