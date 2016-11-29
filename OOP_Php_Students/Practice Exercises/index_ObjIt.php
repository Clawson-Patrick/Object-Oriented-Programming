<?php
class People{
  public $person1 = 'John';
  public $person2 = 'Scotland';
  public $person3 = 'Harambe';
  public $person4 = 'Ghengis';
  public $person5 = 'Sonic the Hedgehog';

  //function iterateObject(){
  //     foreach($this as $key => $value){
  //       print "$key => $value\n";
  //     }
  //
  //
  //
  // }
}
$people = new People;

foreach($people as $key => $value){
  print "$key => $value\n";

}

//$people->iterateObject();


 ?>
