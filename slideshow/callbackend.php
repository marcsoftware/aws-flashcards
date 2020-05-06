<script>
    

var text = `<?php 

                $servername = "localhost";
                $username = "root";
                $password = "";
                $dbname = "slideshow";

                //$video =$_GET['video'];

                // Create connection
                $conn = new mysqli($servername, $username, $password, $dbname);
                // Check connection
                if ($conn->connect_error) {
                    die("Connection failed: " . $conn->connect_error);
                }

                $sql = "SELECT imageID,task FROM $dbname where video='04-05' ";
                $result = $conn->query($sql);

                if ($result->num_rows > 0) {
                    // output data of each row
                    while($row = $result->fetch_assoc()) {
                        echo "" . $row["imageID"]. " " . $row["task"].  "<br>";
                    }
                } else {
                    echo "0 results";
                }
                $conn->close();



 ?>`;

 
</script>