<!DOCTYPE html>

<meta charset="UTF-8">

<link rel="stylesheet" type="text/css" href="card.css">
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
                $sql = "SELECT imageID,task FROM $dbname where video='$video'  ";
                $result = $conn->query($sql);

                if ($result->num_rows > 0) {
                    // output data of each row
                    while($row = $result->fetch_assoc()) {
                        echo "" . $row["imageID"]. " |" . $row["task"].  "<br>";
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
<script type="text/javascript" src="card.js"></script>
<body>


<table>
  <tr>
    <th id='output'></th>
  
  </tr>
   <tr>
    <th id='words'>Company</th>
  
  </tr>

</table>

<input type='button' onclick='prevSlide()' value='<<<<<<<<<<<<<<<<<<'/>
<input type='button' onclick='nextSlide()' value='>'/>
</body>
</html> 
