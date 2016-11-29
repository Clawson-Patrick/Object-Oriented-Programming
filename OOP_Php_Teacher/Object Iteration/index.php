<?php
class People{
	public $person1 = 'Mike';
	public $person2 = 'Shelly';
	public $person3 = 'Jeff';

	public $person4 = 'john';
	private $person5 = 'Jen';
/*

	function iterateObject(){

	//this => is a key/value pair operator so it is separating the key from the value in php
		foreach($this as $key => $value){

		//on the screen it will just print all the attributes and method of this particular class
			print "$key => $value\n";
		}
	}
*/
}

//here we are instatiating the people class
//this is second
$people = new People;

foreach($people as $key => $value){
	print "$key => $value\n";
}

//this is calling the first method
//$people->iterateObject();
