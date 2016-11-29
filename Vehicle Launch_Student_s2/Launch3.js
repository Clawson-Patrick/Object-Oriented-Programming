
//this script demonstrates inheritance from a parent class (prototype)

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

// define a constructor for a subclass of Vehicle
function Car(brand, topSpeed, units, price, nbrWheels) {
	// call the parent constructor
	// this will set the inherited properties for the subclass
	Vehicle.call(this, brand, topSpeed, units, price);
	// set the subclass specific properties
	this.nbrWheels = nbrWheels;
}

// create the subclass prototype that inherits from
// the parent prototype by cloning it
Car.prototype = Object.create(Vehicle.prototype);

// set the constructor property of the new prototype to point to
// the subclass constructor
Car.prototype.constructor = Car;

// override the parent displayVehicle method for a Car
Car.prototype.displayVehicle = function() {
	document.write("<input type='text' size='100' value=\'" + this.brand +
			": top speed = " + this.topSpeed + " " + this.units +
			", costs $" + this.price.toFixed(2)  + " and has " +
			this.nbrWheels + " wheels"  + "\'><br><br>");
	this.launchVehicle();
};

// override the parent launchVehicle method for a Car
Car.prototype.launchVehicle = function() {
	document.write("<textarea rows = '6' cols='50' id=\'" + this.brand + "\'>" +
			"Text area" + "</textarea><br><br>");
	var output = "";
	for (var gear = 1; gear <= 5; gear++) {
		output += "Gear " + gear + " engaged\n";
	}
	output += "Engage cruise control";
	document.getElementById(this.brand).innerHTML = output;
};

//define a constructor for a subclass of Vehicle
function Sailboat(brand, topSpeed, units, price, nbrMasts) {
	// call the parent constructor
	// this will set the inherited properties for the subclass
	Vehicle.call(this, brand, topSpeed, units, price);
	// set the subclass specific properties
	this.nbrMasts = nbrMasts;
}

// create the subclass prototype that inherits from
// the parent prototype by cloning it
Sailboat.prototype = Object.create(Vehicle.prototype);

// set the constructor property of the new prototype to point to
// the subclass constructor
Sailboat.prototype.constructor = Sailboat;

// override the parent displayVehicle method for a Car
Sailboat.prototype.displayVehicle = function() {
	document.write("<input type='text' size='100' value=\'" + this.brand +
			": top speed = " + this.topSpeed + " " + this.units +
			", costs $" + this.price.toFixed(2)  + " and has " +
			this.nbrMasts + " mast(s)"  + "\'><br><br>");
	this.launchVehicle();
};

// override the parent launchVehicle method for a Car
Sailboat.prototype.launchVehicle = function() {
	document.write("<textarea rows = '6' cols='50' id=\'" + this.brand + "\'>" +
			"Text area" + "</textarea><br><br>");
	var output = "";
	output += "Raising mainsail\n";
	output += "Raising headsail\n";
	output += "Anchors aweigh!";
	document.getElementById(this.brand).innerHTML = output;
};

//define a constructor for a subclass of Vehicle
function Rocket(brand, topSpeed, units, price, nbrStages) {
	// call the parent constructor
	// this will set the inherited properties for the subclass
	Vehicle.call(this, brand, topSpeed, units, price);
	// set the subclass specific properties
	this.nbrStages = nbrStages;
}

// create the subclass prototype that inherits from
// the parent prototype by cloning it
Rocket.prototype = Object.create(Vehicle.prototype);

// set the constructor property of the new prototype to point to
// the subclass constructor
Rocket.prototype.constructor = Rocket;

// override the parent displayVehicle method for a Rocket
Rocket.prototype.displayVehicle = function() {
	document.write("<input type='text' size='100' value=\'" + this.brand +
			": top speed = " + this.topSpeed + " " + this.units +
			", costs $" + this.price.toFixed(2)  + " and has " +
			this.nbrStages + " stage(s)"  + "\'><br><br>");
	this.launchVehicle();
};

// override the parent launchVehicle method for a Rocket
Rocket.prototype.launchVehicle = function() {
	document.write("<textarea rows = '6' cols='50' id=\'" + this.brand + "\'>" +
			"Text area" + "</textarea><br><br>");
	var output = "";
	for (var stage = 1; stage <= this.nbrStages; stage++) {
		output += "Stage " + stage + " burn\n";
	}
	output += "Escape velocity reached!";
	document.getElementById(this.brand).innerHTML = output;
};

function main() {

  // instantiate an array to hold vehicles
	var vehicleArray = [];


// populate the vehile array with objects and subclass objects
  vehicleArray[0]= new Vehicle("Generic", 0, "kps", 0.00);
  vehicleArray[1]= new Car("Porchse Carerra", 195, "mph", 84000.00, 4);
  vehicleArray[2]= new Sailboat("Hinckley SW52", 35, "knots", 498000.00, 1);
  vehicleArray[3]= new Rocket("Saturn V", 25053, "mph", 185000000.00, 3);

// polymorphically exercise the methods of the objects
for (var i = 0; i < vehicleArray.length; i++) {
  vehicleArray[i].displayVehicle();
}

};



// // instantiate a generic Vehicle
// var vehicle1 = new Vehicle("Generic Vehicle", 0, "kps", 0.00);
// vehicle1.displayVehicle();
//
// // instantiate a Car
// var car1 = new Car("Porsche Carrera", 195, "mph", 84000.00, 4);
// car1.displayVehicle();
//
// // instantiate a Sailboat
// var sailboat1 = new Sailboat("Hinckley SW52", 35, "knots", 498000.00, 1);
// sailboat1.displayVehicle();
//
// // instantiate a Rocket
// var rocket1 = new Rocket("Saturn V", 25053, "mph", 185000000.00, 3);
// rocket1.displayVehicle();
