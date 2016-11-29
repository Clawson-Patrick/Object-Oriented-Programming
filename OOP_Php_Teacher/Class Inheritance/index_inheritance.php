<?php


//we will declare a class and set some properties and set them to hard coded values
class First{
	public $id = 23;

	// #1 this needs to be set to public when you start
	protected $name = 'John Doe';

	//if we want to make so that these properties are not accessable outside of the class but are still able to be accessed in this class, then we change public to protected


//then we create a function/method and we will call is saySomething and have it echo out 'something'
//this public function is first, notice there are no params in the ()
// #1 public function saySomething(){

// #2 this public function will be next and final, all we did was add the $word param
	public function saySomething($word){

		// #1 echo 'Somthing...';

		// #2 this is the final echo, the echo "Somthing" above comes first
		echo $word;
	}
}

class Second extends First{

	// #3 this part comes last as well, there should be nothing inside of this method prior to this step 
	public function getName(){
		echo $this->name;
	}
}


// #1 here we instatiate the second
$second = new Second;

//this is the first echo
// #1 & #3 echo $second->name;

// #2 echo $second->saySomething();

//this is the final echo
echo $second->getName();

// #3 now we are going to pass 'Hello World' into the method saySomething
//echo $second->saySomething('Hello World');
