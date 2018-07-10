<?php

$servername = "localhost";
$username = "bonzo7aab";
$password = "Compotiocom1!";
$dbname = "bonzo7";

$conn = mysqli_connect("$servername", "$username", "$password", "$dbname");
if(mysqli_connect_errno()) {
    echo "Failed to connect to MySql: " + mysqli_connect_error();
} else //echo "Connected to Database <br>";

$postId = $_POST['postId'];

$sql_images = "SELECT img_url, alt_text FROM Gallery WHERE gallery_category = '$postId'";
$data = mysqli_query($conn, $sql_images);
$rows = array();
if (mysqli_num_rows($data) > 0) {
    while ($row = mysqli_fetch_assoc($data)) {
        //echo $row['img_url'] . "<br>";
        //echo $row['alt_text'] . "<br>";
        $rows[] = $row;
    }
}
echo json_encode($rows);

?>