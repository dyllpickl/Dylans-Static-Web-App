$('#form').on('submit', function(e) {
  e.preventDefault();
  var value1 = document.getElementById("value1").value;
  var value2 = document.getElementById("value2").value;
  var value3 = document.getElementById("value3").value;
  var value4 = document.getElementById("value4").value;
  var value5 = document.getElementById("value5").value;
  
  var mad_lib = "<p>" + "Your " + value1 + " friend is about to go to " + value2 + "," + "</p>";
  mad_lib += "<p>" + "On his way, he finds a " + value3 + " man on the side of the road," + "</p>";
  mad_lib += "<p>" + "He needs a ride, so you " + value4 + " ask if he wants a ride." + "</p>";
  mad_lib += "<p>" + value5 + " he says no, so you continue your journey to " + value2 + "</p>";

  $('#form').html(mad_lib);
})
