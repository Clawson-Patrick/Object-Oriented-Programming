

<?php

//abstract classes basically set up a template for you
//think of this class as the umbrella class of which all other inherited or child classes will contain
//the code below is the bare min that ANY animal could possibly have
abstract class Animal{
	public $name;
	public $color;

	public function describe(){
		return $this->name. ' is ' .$this->color;
	}
//this is saying that all inherited class of animal must have this method, or it will not work... it is forcing you to add a //makeSound method to each and every subsequent inherited class
	abstract public function makeSound();
}

class Duck extends Animal{
	public function describe(){
		//the describe method is not marked as abstract, so you do not have to implement it in child classes
		//in this case they do for demonstration purposes
		//this is simply overiding the default parent method
		//this is calling the describe of the parent class
		//the return is simply from the function itself
		return parent::describe();
	}

	public function makeSound(){
		return 'Quack';
	}
}

class Dog extends Animal{
	public function describe(){
		return parent::describe();
	}

	public function makeSound(){
		return 'Bark';
	}
}

// class Fox extends Animal{
// 	public function describe(){
// 		return parent::describe();
// 	}
//
// 	public function makeSound(){
// 		return 'Ring ding din da ding da ding, pow pow pow pow pow pa pow pa pow';
// 	}
// }


//this is the implementation of the method and the attribute

//here they are assigning values to the attributes
$animal = new Dog();
$animal->name = 'Larry';
$animal->color = 'Brown';

//this spits the text out to the page...
//echo $animal->describe();
echo $animal->makeSound();
