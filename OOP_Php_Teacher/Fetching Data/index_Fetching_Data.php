<?php

//we have already instantiated the db object so lets make a query so we are good here
require 'classes/Database.php';

$database = new Database;

//here is where we make a db query
//if we wanted to add some conditions in here, we could enter them, like where by id, etc. and then that's where we would also call the bind method, which will be next step, but first let's see if the database query is working by doing a print_r($rows); below the db query

//this line of code will go first
$database->query('SELECT * FROM posts');
//this line will also go first
$rows = $database->resultset();
//comment this line out after you enter the html block at the bottom
//print_r($rows);

// this will come second - uncomment it and it will work, but make sure you comment out the first db query, //reuslts and print
// we add a where clause to specify where we grab our data from and also where we bind our data
// $database->query('SELECT * FROM posts WHERE id = :id');
// change the id from 1 to 2 or vice versa to show only one post on the browser
// $database->bind(':id', 2);

//the data is given to us in an associative array because we specified that in our DB.php docuement
//what could we do with this data? loop through it, and then output the content that we want... so let's do //that.
//end the php right here
?>

<!-- Start some html so that we can actually start seeing this -->
<h1>Posts</h1>
<div>
	<!-- this will be shorthand syntax php so that we can loop through the array-->
<?php foreach($rows as $row) : ?>
	<div>
		<h3><?php echo $row['title']; ?></h3>
		<p><?php echo $row['body']; ?></p>
	</div>
<?php endforeach; ?>
</div>
