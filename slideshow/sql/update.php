<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "slideshow";

$id =$_GET['id'];
$task =$_GET['task'];
echo "from server php${id};;;;${task}";


////
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

//$sql = "SELECT imageID,task FROM $dbname where video='$video' and task!='' ";
$sql = "update  $dbname set task='$task' where id='$id'  ";
//UPDATE table_name SET column1 = value1, column2 = value2, ...WHERE condition; 
$result = $conn->query($sql);


$conn->close();

