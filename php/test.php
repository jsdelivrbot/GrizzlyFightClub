<?php

error_reporting(E_ALL); 
ini_set('display_errors','1');


$path_folder = '/other2017'; // "/gallery"
$path_name ='www.grizzlyfightclub.cba.pl/images/' . $path_folder ;
//$path_info = pathinfo('www.grizzlyfightclub.cba.pl/images/gallery/bear');

$directory = '/profiles/b/bo/bon/bonzo7/grizzlyfightclub.cba.pl/images' . $path_folder;


if ($handle = opendir($directory)) {
    $fileNames = array();
    while (false !== ($entry = readdir($handle))) {
        if ($entry != "." && $entry != "..") {
            
            echo "<br>$entry\n";
            array_push($fileNames, $entry);
        }
    }
    $fileNamesLength = count($fileNames);
    for ($i=0; $i < $fileNamesLength; $i++) { 
        echo "<br> File: " . $i . " is " . $fileNames[$i] . "\n";
    }

    closedir($handle);
}


// for($i = 1; $i < $fileNamesLength; $i++){
//     $path = $path_name . $i . ".jpg";
//     $alt = $path_info['filename'] . $i;

//     echo $path;
//     echo $alt;

//     $image_gallery = "INSERT INTO Gallery (img_url, alt_text) VALUES ('$path', '$alt')";
//     $retrval = mysqli_query($conn, $image_gallery);

//     if(!$retrval) {
//         die('Can not enter data' . mysqli_error());
//     } echo 'Sucess!';

// };

// if ($handle = opendir($directory)) {
//     $count = 0;
//     $fileNames = array();
//     while (false !== ($entry = readdir($handle))) {
//         if ($entry != "." && $entry != "..") {
            
//             echo "<br>$entry\n";
//             $count ++;
//             array_push($fileNames, $entry);
//         }
//     }
//     echo "<br>" . $count . "<br>";
//     echo "<br>" . $fileNames[1] . "<br>";
//     closedir($handle);
// }

?>