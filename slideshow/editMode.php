<!DOCTYPE html>

<meta charset="UTF-8">

<link rel="stylesheet" type="text/css" href="editMode.css">
<html>





<script>
    

var text = `<?php 

                $servername = "localhost";
                $username = "root";
                $password = "";
                $dbname = "slideshow";

                $video =$_GET['video'];

                // Create connection
                $conn = new mysqli($servername, $username, $password, $dbname);
                // Check connection
                if ($conn->connect_error) {
                    die("Connection failed: " . $conn->connect_error);
                }

                //$sql = "SELECT imageID,task FROM $dbname where video='$video' and task!='' ";
                // $sql = "SELECT imageID,task FROM $dbname where video REGEXP '$video'  ";
                $sql = "SELECT id,imageID,task FROM $dbname where video REGEXP '$video'  ";
                $result = $conn->query($sql);

                if ($result->num_rows > 0) {
                    // output data of each row
                    $count=0;
                    while($row = $result->fetch_assoc()) {
                        $count++;
                        $id=$row["id"];
                        $imageID=$row["imageID"];
                        $task=$row["task"];

                        $image="<img src='aws/{$imageID}' />";
                        echo "<tr> <th > <img id='{$id}'>{$id}</th><th> {$image}</th><th class='small'><textarea onchange='update(\"{$id}\",this)' onpaste='handlePaste(event,\"{$id}\")' > {$task}</textarea><br>{$count}</tr>";
                    }
                } else {
                    echo "0 results";
                }
                $conn->close();



 ?>`;

 
</script>


<script type="text/javascript">



    var folder_name='aws';


</script>
<script type="text/javascript" src="editMode.js"></script>
<body>



<table id='output' class="greenTable">
 

</table>

</body>
</html> 
