<?php

spl_autoload_register(function($class_name){
	include $class_name . '.php';
});

//the names of the classes have to match the name on the file
$foo = new Foo;
$bar = new Bar;

$bar->sayHello();

?> 
