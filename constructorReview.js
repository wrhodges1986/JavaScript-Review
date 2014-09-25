//Create a Animal Constructor that has the following parameters. species, name, legs, color, food (which is an array of foods they can eat).

  //code here
var Animal = function(species, name, legs, color, food) {
	this.species = species;
	this.name = name;
	this.legs = legs;
	this.color = color;
	this.food = food;
};

//Now create a person function that creates an object and returns it (not in constructor form) that has the following parameters. name, age, height, gender

  //code here
var person = function(name, age, height, gender) {
	var person = {};
	person.name = name;
	person.age = age;
	person.height = height;
	person.gender = gender;
	return person;
};

//Create a animal array and a person array.

  //code here
var animals = [];
var people = [];

//Create two instances of Animal and push those into your animal array

  //code here
var giraffe = new Animal("mammal", "giraffe", 4, "yellow, black", ["leaves", "fruit", "grass"]);
var lion = new Animal("mammal", "lion", 4, "golden", ["animals", "fruit"]);
animals.push(giraffe, lion);

//Create two instances of person and push those into your person array.

  //code here
var Wesley = new person("Wesley", 28, "6-0", "male");
var Derek = new person("Derek", 25, "6-0", "male");

//Now we want every instance of Animal to have a eat method. This method will choose a random item in that instances food array, then alert "(name) ' ate ' (whichever food was chosen)".

  //code here
Animal.prototype.eat = function() {
	//Math.floor((Math.random() * 10) + 1);
	var randomIndex = Math.floor(Math.random() * this.food.length);
	alert(this.name + " ate " + this.food[randomIndex]);
};

//At this point, if we wanted to add something to every istance of person could we? 

  //Yes or no? and why or why not?
/*No. There is, sort of, but it is not simple. There is no prototype access without the constructor function, so if we went back and added anything to the person object, it would only apply to future instances of person that are created, but if we also wanted it to apply to those previously created, we would have to manually add it to every instance.*/


/*
  1) What happens when you use the 'new' keyword to call a Constructor function?
  - It creates a new instance of that function, and receives all the properties and methods that pertain to it.
  2) What's a good way to describe the keyword 'this'
  - "this" refers to the object being acted upon in the current context. For example, in the above "eat" method, "this" refers to whatever instance of Animal has called the "eat" method.
  3) Can a normal function which creates an object and then returns that object use the prototype?
  - No, it can't.
  4) What happens if you forget to use 'new' when calling a constructor?
  - It will give an error, saying that the name of the object of which you are trying to create an instance is not defined.
*/