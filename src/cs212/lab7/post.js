$("#form").on("submit", function(e) {
  e.preventDefault();
  var value1 = $("#value1").val();
  var value2 = $("#value2").val();
  var value3 = $("#value3").val();
  var value4 = $("#value4").val();
  var value5 = $("#value5").val();
  
  var mad_lib = "<p>" + "Your " + value1 + " friend is about to go to " + value2 + "," + "</p>";
  mad_lib += "<p>" + "On his way, he finds a " + value3 + " man on the side of the road," + "</p>";
  mad_lib += "<p>" + "He needs a ride, so you " + value4 + " ask if he wants a ride." + "</p>";
  mad_lib += "<p>" + value5 + " he says no, so you continue your journey to " + value2 + "</p>";

  $("#form").html(mad_lib);
})
