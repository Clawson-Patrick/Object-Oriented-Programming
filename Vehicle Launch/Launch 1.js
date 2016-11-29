/**
 * Launch 1.js
 *
 * Author: 	Mark J. Buckler
 * Date:	October, 2016
 *
 * This project demonstrates object-oriented programming
 * in JavaScript
 *
 * This script demonstrates encapsulation of a parent class (prototype)
 *
 */

 // start off by demonstrating how to write a parent class without prototype
 // directly instantiating an object in JS
 // use this code
var bicycle = {
 brand: "specialized",
 topSpeed: 32,
 gears: 18,
 cost: 200.00,
 displayBike: function() {
	 document.write ("My bike is a " + this.brand + "<br><br>");
 }
}

//when this code first executes in the script, you have a variable called bicycle which is an object
//we could do a document.write to show all these values concatenated with a set of strings
//we could encapsulate a method into it by building a property called displayBike = function()


// define a Vehicle constructor
// this will become the prototype for the
// parent class of all vehicles
var Vehicle = function(brand, topSpeed, units, price) {
	this.brand = brand;
	this.topSpeed = topSpeed;
	this.units = units;
	this.price = price;
};



// encapsulate into the Vehicle prototype a method to display any Vehicle
Vehicle.prototype.displayVehicle = function() {
	document.write("<input type='text' size='100' value=\'" + this.brand +
			": top speed = " + this.topSpeed + " " + this.units +
			", costs $" + this.price.toFixed(2)  + "\'><br><br>");
	this.launchVehicle();
};

// encapsulate a method to launch a vehicle
Vehicle.prototype.launchVehicle = function() {
	document.write("<textarea rows = '6' cols='50' id=\'" + this.brand + "\'>" +
			"Text area" + "</textarea><br><br>");
	document.getElementById(this.brand).innerHTML = "Cannot launch a " + this.brand;
};

function main() {
	// this code will be associated with the first demontration of a class without prototyping
	bicycle.displayBike();
	// instantiate a generic Vehicle
	// by calling a Vehicle constructor
	// passing arguments that will become
	// the values of the vehicle object
	var vehicle1 = new Vehicle("Generic Vehicle", 0, "kps", 0.00);
	vehicle1.displayVehicle();
};
