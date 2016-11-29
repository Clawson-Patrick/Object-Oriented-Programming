// var bicycle = {
//   brand: "Specialized",
//   topSpeed: 32,
//   gears: 18,
//   cost: 1800.00,
//   displayBike: function(){
//     document.write("My bike is a " + this.brand + "<br><br>");
//   }
// };
//
// function main () {
//   bicycle.displayBike();
// }

var Vehicle = function(brand, topSpeed, units, price) {
  this.brand = brand;
  this.topSpeed = topSpeed;
  this.units = units;
  this.price = price;
};

Vehicle.prototype.displayVehicle = function() {
  document.write("<input type='text' size='100' value=\'" + this.brand +
			": top speed = " + this.topSpeed + " " + this.units +
			", costs $" + this.price.toFixed(2)  + "\'><br><br>");
      this.launchVehicle();
};

Vehicle.prototype.launchVehicle = function () {
  document.write("<textarea rows = '6' cols='50' id=\'" + this.brand + "\'>" + "Text area" + "</textarea><br><br>");
  document.getElementById(this.brand).innerHTML = "Cannot launch a " + this.brand;
};

function main() {
var vehicle1 = new Vehicle("Generic Vehicle", 0, "kps", 0.00);
vehicle1.displayVehicle();
};
