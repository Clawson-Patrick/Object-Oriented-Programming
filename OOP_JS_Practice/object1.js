var chevy = {
  make: "Chevy",
  model: "Camaro",
  year: 2017,
  color: "Black",
  passengers: 2,
  convertible: false,
  mileage: 102
};


var cat = {
name: "fluffy"
};
// Separate the property name and property value with a colon:
var planet = {
diameter: 49528
};
// A property name can be any string, but we usually stick with valid variable names:
var widget = {
cost$: 3.14,
"on sale": true
};
// No two properties in an object can have the same name:
var forecast = {
highTemp: 82,
highTemp: 56
};
// Separate each property name and value pair with a comma:
var gadget = {
name: "anvil",
isHeavy: true
};
// Don’t use a comma after the last property value:
var superhero = {
name: "Batman",
alias: "Caped Crusader"
};


var fiat = {
  make: "Fiat",
  model: "500",
  year: 1957,
  color: "Medium Blue",
  passengers: 2,
  convertible: false,
  mileage: 89000
};
var miles = fiat.mileage ;
if (miles < 2000) {
  buyIt();
}

// fiat.mileage = 12000;
//
// fiat.needsWashing = true;

// if (fiat.year < 1965){
//   fiat.classic = true;
// }
// for (var i = 0; i < fiat.passengers; i++){
//   addPersonToCar();
// }
//
// dog.weight
// dog.bark
// bark
// dog.name
// dog.activity
// "Fido"
// Fido
// age
// breed
// "fetch balls"
// ,
// ,
// ,
// ,
// 4
// 20.2
// weight
//
// var dog = {
// name: "Fido",
// weight: 20.2,
// age: 4,
// breed: "mixed",
// activity: "Fetch Balls"
// }
// var bark;
// if (dog.weight > 20) {
// bark = "WOOF WOOF";
// } else {
// bark = "woof woof";
// }
// var speak = dog.name + " says " + dog.bark + " when he wants to " + dog.activity;
// console.log(speak);
//
// fido.dogYears = 35;
//
// delete fido.dogYears;
//
//
// // Variables don’t actually hold objects.
// //
// // Instead they hold a reference to an object.
// //
// // The reference is like a pointer or an address to the
// // actual object.
// //
// // In other words, a variable doesn’t hold the object
// // itself, but it holds something like a pointer. And, in
// // JavaScript we don’t really know what is inside a
// // reference variable. We do know that whatever it is, it
// // points to our object.
// //
// // When we use dot notation, the JavaScript
// // interpreter takes care of using the reference to get
// // the object and then accesses its properties for us.
//
//
// var taxi = {
// make: "Webville Motors",
// model: "Taxi",
// year: 1955,
// color: "yellow",
// passengers: 4,
// convertible: false,
// mileage: 281341
// };
//
//
// function prequal(car) {
// if (car.mileage > 10000) {
// alert ("false");
// } else if (car.year > 1960) {
// alert ("false");
// }
// alert ("true");
// }
//
// prequal(taxi);
//
// var worthALook = prequal (taxi);
//
// if (worthALook) {
//   console.log ("You gotta check this " + taxi.make + " " + taxi.model);
// } else {
//   console.log("You should really pass on the " + taxi.make + " " + taxi.model);
// }
//
var dog = {
name: "Lucas",
weight: 42,
breed: "Mixed",
loves: "Walks"
}


loseWeight(dog, 10);

function loseWeight(dog, amount) {
dog.weight = dog.weight - amount;
alert(dog.name + " now weighs " + dog.weight);
}


// var dog = {
// name: "Annabella",
// weight: 30.2,
// age: 12,
// bread: "cocker",
// activity: "eating a gardener",
// };
// loseWeight(dog, 10);
// function loseWeight(dog, amount){
//   dog.weight = dog.weight - amount;
//   alert(dog.name + " now weights " + dog.weight)
// }
