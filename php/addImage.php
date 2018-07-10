<?php
error_reporting(E_ALL); 
ini_set('display_errors','1');

$servername = "localhost";
$username = "bonzo7aab";
$password = "Compotiocom1!";
$dbname = "bonzo7";

$conn = mysqli_connect("$servername", "$username", "$password", "$dbname");
if(mysqli_connect_errno()) {
    echo "Failed to connect to MySql: " + mysqli_connect_error();
} else echo "Connected to Database <br>";

//Type folder name where are newly uploaded images --------- IMPORTANT -----------------
$path_folder = '/other2018'; // "/summer2018"
echo '<br>Added images to folder: ' . $path_folder . '<br>';
$path_name ='www.grizzlyfightclub.cba.pl/images' . $path_folder ;
$directory = '/profiles/b/bo/bon/bonzo7/grizzlyfightclub.cba.pl/images' . $path_folder;


if ($handle = opendir($directory)) {
    $fileNames = array();
    while (false !== ($entry = readdir($handle))) {
        if ($entry != "." && $entry != "..") {
            array_push($fileNames, $entry);
        }
    }
    $fileNamesLength = count($fileNames);
    closedir($handle);
}

for($i = 0; $i < $fileNamesLength; $i++){
    $path = $path_name . "/" . $fileNames[$i];
    $alt = $fileNames[$i];
    $categ = substr($path_folder, 1);

    echo $path . "<br>";
    echo $alt;

    $image_gallery = "INSERT INTO Gallery (gallery_category, img_url, alt_text) VALUES ('$categ', '$path', '$alt')";
    $retrval = mysqli_query($conn, $image_gallery);

    if(!$retrval) {
        die('Can not enter data' . mysqli_error());
    } echo '<br>Sucess!<br>';

};


?>