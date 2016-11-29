<!-- The first thing we have to do is establish that our database connection still works
Open MySql Workbench and test your connection
Once you have determined that you are ready to make a new database, follow these steps:

1) Create a new db and name it myblog
2) Create a table for posts, 7 columns
3) Add all of the information for the columns -
		id, auto-increment, pk
		title, varchar255
		body, text
		create_date, datetime, current time stamp

Open your index_PDO_DBConnection, which should be completely empty at this point for the students
Create a folder called classes and inside of this folder you need to create a new file called Database.php
Begin doing the code below -->




<!-- This block of code is assigned to PDO Database Class & Connection. It is copied and pasted in the accompanying files for Fetching Data... but is renamed to reflect that lessons filename. -->
<?php
class Database{
	//the attributes below have to do with the connection
	private $host	= 'localhost';
	private $user	= 'root';
	private $pass	= 'root';
	private $dbname	= 'myBlog';

	//these attributes are used a db handler, an area to catch any errors, and one to execute prepared statements
	private $dbh;
	private $error;
	private $stmt;

	//a constructor is a fucntion that runs when an obeject is instantiated
	public function __construct(){
		// Set DSN - this is our connection string
		$dsn = 'mysql:host='. $this->host . ';dbname='. $this->dbname;
		// Set Options - these are PDO options
		$options = array(
			//this keeps the connection to the db open
			PDO::ATTR_PERSISTENT		=> true,
			//this sets the pdo error mode to be at the exception error level, which kicks back an error only at the exception level
			PDO::ATTR_ERRMODE		=> PDO::ERRMODE_EXCEPTION
		);
		// Create new PDO instance
		//try{}catch will try to execute anything in the try block, and then if something in that block throws an //excetpion, it is basically then caught in the catch block.
		//this handles the error gracefully instead of just spitting out a bunch of unreadable error messages
		try {
			$this->dbh = new PDO($dsn, $this->user, $this->pass, $options);
		} catch(PDOException $e){
			$this->error = $e->getMessage();
		}
	}
}

//save this, but nothing will happen until we include the database file in our index

//when we run this to test, it won't show anything because it is not giving us any errors... no news is good //news
//to test this, we go back over to our Database file and change the password... just add a character and try that out... you will get a fatal error "Access Denied for 'root'"
