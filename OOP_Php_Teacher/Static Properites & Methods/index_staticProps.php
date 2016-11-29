<?php
class User{
	public $username;
	public static $minPassLength = 5;

	public static function validatePassword($password){

		//instead of using ->$this we are using self, and instead of using -> we are using :: 
		if(strlen($password) >= self::$minPassLength){
			return true;
		} else {
			return false;
		}
	}
}

/*
$password = 'password';

//all this is doing is showing how to access the static method without instantiating the class
if(User::validatePassword($password)){
	echo 'Password is valid';
} else {
	echo 'Password is NOT valid';
}
*/

//all this is doing is showing how to access the static attribute without instantiating the class
echo User::$minPassLength;
