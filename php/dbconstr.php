<?php

$servername = "localhost";
$username = "bonzo7aab";
$password = "Compotiocom1!";
$dbname = "bonzo7";

$conn = mysqli_connect("$servername", "$username", "$password", "$dbname");
if(mysqli_connect_errno()) {
    echo "Failed to connect to MySql: " + mysqli_connect_error();
} else echo "Connected to Database <br>";

?>