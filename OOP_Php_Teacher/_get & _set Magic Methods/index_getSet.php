

<?php
class Post{
	private $name;

//all the magic methods start with a double under-score
//first one is the __set magic method
	public function __set($name, $value){
		echo 'Setting '.$name.' to <strong>'.$value.'</strong><br />';
		$this->name = $value;
	}
//second magic method is the __get magic method... it is roughly the same code as above, but you have to change 'Setting' to 'Getting'
	public function __get($name){
		echo 'Getting '.$name.' <strong>'.$this->name.'</strong><br />';
	}


//isset came in with V.5.1
//
	public function __isset($name){
		echo 'Is '.$name.' set?<br />';
		//we are passing in $this->name
		return isset($this->name);
	}
}

//here is where we are instantiating

$post = new Post;
//in step one, since we are setting name to 'Testing' it's going to call the __set magic method
//then it's going to output it for us and it's going to assign this name to whatever we pass in which is Testing
$post->name = 'Testing';

//if we want to run __get then we have to write echo $post->name;
echo $post->name;
//so this is how we can access a private property through the __get and __set function

//this will be the instantiation for issest
//do a var_dump and pass in (issest($post->name));
//what will return in the browser is "Is name set?" bool(ture)
//if we change name to names in both the var_dump and the return issest, it will ask "Is names set?" and it should read false
var_dump(isset($post->name));
