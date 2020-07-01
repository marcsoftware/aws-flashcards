<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "slideshow";

$video =$_GET['v'];
if( strcmp($video, "") ==0 ){
    exit("v is undefined");
}


echo $video;

////
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


//$sql = "update  $dbname set task='$task' where id='$id'  ";

//                                    id video task imageid
$sql = "INSERT INTO slideshow VALUES (null,'$video',' ','0',null) ";
echo $sql;
for ($x = 0; $x <= 10; $x++) {
  $result = $conn->query($sql);
} 




$conn->close();

