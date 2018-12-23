var myButton = document.querySelector('button');
function setRadius() {
  var radius = prompt('Please enter the radius of a sphere.');
  surfaceArea(radius);
  volume(radius);
  alert("Surface area of the sphere = " + result1);
  alert("Volume of the sphere = " + result2);
}

function surfaceArea(num) {
  result1 = 4 * Math.PI * num ** 2;
  return result1;
}

function volume(num) {
  result2 = 4 / 3 * Math.PI * num ** 3;
  return result2;
}

myButton.onclick = function() {
  setRadius();
}