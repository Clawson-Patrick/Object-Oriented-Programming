<!-- In the previous lesson we made it so that we could fetch our post from our database using our db classes
Now we are going to create a form using title and body and fill it out

We are going to start by putting the form above the post -->

<?php
require 'classes/Database.php';

$database = new Database;

//we want to sanitze the block below this line of code, so we will enter the following:
$post = filter_input_array(INPUT_POST, FILTER_SANITIZE_STRING);

//at first, you can do the $post attribute as a $_POST superglobal... like this just to check... you wouldn't //want to include the sanitization method above this comment though

//if($_POST['submit']){
//$title = $_POST['title'];
//}

if($post['submit']){
	$title = $post['title'];
	$body = $post['body'];

	$database->query('INSERT INTO posts (title, body) VALUES(:title, :body)');
	$database->bind(':title', $title);
	$database->bind(':body', $body);
	$database->execute();
	if($database->lastInsertId()){
		echo '<p>Post Added!</p>';
	}
}

$database->query('SELECT * FROM posts');
$rows = $database->resultset();
?>
<!--this is where this lesson will begin
We will first add the h1 and then the form  -->
<h1>Add Post</h1>
<!--we want to catch our submission, or whatever the user inputs in the proper fields, so were going to have to tell the form that the method that we want is post and that the action is the page that we are on, we can use the server super global and use php_serf which will make it so that it will submit to this page, then we need to catch it... so go to the if statement above  -->

<!-- Just give them the form in a slack post... it will save time and they have done this a couple dozen times already.. but be sure to diagram and explain it to the students for review -->
<form method="post" action="<?php $_SERVER['PHP_SELF']; ?>">
	<label>Post Title</label><br />
	<input type="text" name="title" placeholder="Add a Title..." /><br /><br />
	<label>Post Body</label><br />
	<textarea name="body"></textarea><br /><br />
	<input type="submit" name="submit" value="Submit" />
</form>

<h1>Posts</h1>
<div>
<?php foreach($rows as $row) : ?>
	<div>
		<h3><?php echo $row['title']; ?></h3>
		<p><?php echo $row['body']; ?></p>
	</div>
<?php endforeach; ?>
</div>
