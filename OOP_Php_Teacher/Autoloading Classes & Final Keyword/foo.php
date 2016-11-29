<?php
//PHP 5 introduces the final keyword, which prevents child classes from overriding a method by prefixing the definition with //final. If the class itself is being defined final then it cannot be extended.
//Note: Properties cannot be declared final, only classes and methods may be declared as final.
final class Foo{

	//you cannot re-implement sayHello, you cannot overide this method
	public function sayHello(){
		echo 'Hello World';
	}
}
