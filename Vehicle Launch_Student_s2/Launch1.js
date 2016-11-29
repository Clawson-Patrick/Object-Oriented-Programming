// var bicycle = {
//   brand: "Specialized",
//   topSpeed: 32,
//   gears: 18,
//   cost: 1800.00,
//   displayBike: function() {
//     document.write ("My bike is a " + this.brand + "<br><br>");
//   }
// }


//define a Vehicle contstructor
//this will become the prototype for the parent class of ALL vehicles
var Vehicle = function(brand, topSpeed, units, price) {
  this.brand = brand;
  this.topSpeed = topSpeed;
  this.units = units;
  this.price = price;
};

// encapsulate into Vehicle prototype a method to display any vehicle
Vehicle.prototype.displayVehicle = function() {
  document.write("<input type='text' size='100' value=\'" + this.brand + ": top speed = " + this.topSpeed + " " + this.units + ", costs $" + this.price.toFixed(2) + "\'><br><br>");
  this.launchVehicle();
};

// encapsulate a method to launch vehicle
Vehicle.prototype.launchVehicle = function() {
  document.write("<textarea rows= '6' cols= '50' id=\'" + this.brand + "\'>" + "Text area" + "</textarea><br><br>");
  document.getElementById(this.brand).innerHTML = "Cannot launch a " + this.brand;
};


function main (){
  //bicycle.displayBike();

  //instatinate a Generic Vehicle by calling a Vehicle constructor, passing //arguements taht will become the values of the vehicle object
  var vehicle1 = new Vehicle("Generic Vehicle", 0, "kps", 0.00);
  vehicle1.displayVehicle();
};
