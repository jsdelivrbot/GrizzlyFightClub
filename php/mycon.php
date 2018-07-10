<?php
$servername = "localhost";
$username = "bonzo7aab";
$password = "Compotiocom1!";
$dbname = "bonzo7";

$conn = mysqli_connect("$servername", "$username", "$password", "$dbname");
if(mysqli_connect_errno()) {
    echo "Failed to connect to MySql: " + mysqli_connect_error();
} else echo "Connected to Database <br>";

// Posts tabela, czytanie
/*
$sql = "SELECT id, title, postBody, dat FROM Posts";
$result = $conn->query($sql);

// wypluwa rowsy z tabeli Posts
if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "id: " . $row["id"]. " - Title: " . $row["title"]. " - Message: " . $row["postBody"]. " - Data: " . $row["dat"]. "<br>";
    }
} else {
    echo "0 results";
}
*/

// Adding rows to Messages table in database and sending email ---------------------------------
$email =  $_POST["email"];
$title =  $_POST["title"];
$messageBody =  'Wiadomość od: ' + $email + '<br>' + 'Treść wiadomości: <br>' + $_POST["message"];

$to = "grizzlyfightclubwarsaw@gmail.com";
$subject = $title;
$txt = $messageBody;
$headers = "From: markac@grizzlyfightclub.cba.pl";

//$sql_insert = "INSERT INTO Posts (title, postBody, dat) VALUES ('$title', '$postBody', '2013 ')";
$sql_insert = "INSERT INTO Messages (email, title, messageBody) VALUES ('$email', '$title', '$messageBody')";
$retval = mysqli_query($conn, $sql_insert);

//  Checking if rows were added succesfully and sending email
if(! $retval ) {
   die('Could not enter data: ' . mysqli_error());
} else {
    echo "Entered data successfully\n <br>";
    if(mail($to, $subject, $txt, $headers))
        echo "Email has been sent";
    else
        echo "Error sending email";
}

// Getting images path from database -----------------------------------------------------------



$conn->close();
?>