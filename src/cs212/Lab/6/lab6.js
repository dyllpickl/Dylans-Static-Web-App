var value1 = parseInt(document.getElementbyId('value1').value, 10);
var value2 = parseInt(document.getElementbyId('value2').value, 10);

function product() {
  var result = value1 * value2;
  document.getElementbyId('product_of_2').innerHTML = "The product is: " + result;}
