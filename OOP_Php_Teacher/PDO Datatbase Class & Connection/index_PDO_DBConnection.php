<?php


//require brings in code in another file
require 'classes/Database.php';

$database = new Database;

//when we run this, it won't show anything because it is not giving us any errors... no news is good news
//to test this, we go back over to our Database file and change the password... just add a character and try that out... you will get a fatal error
