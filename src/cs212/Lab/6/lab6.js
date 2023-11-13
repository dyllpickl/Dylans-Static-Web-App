function product() {
  var value1 = parseInt(document.getElementById('value1').value, 10);
  var value2 = parseInt(document.getElementById('value2').value, 10);
  var result = value1 * value2;
  document.getElementById('product_of_2').innerHTML = "The product is: " + result;}
