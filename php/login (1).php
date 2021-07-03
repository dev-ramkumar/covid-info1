<?php

if(isset($_POST["username"]) && isset($_POST["password"])) {
require_once 'database.php';

	try {
	  $login = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
	  // set the PDO error mode to exception
	  $login->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

	  // prepare sql and bind parameters
	  $stm = $login->prepare("SELECT password  FROM covidapi WHERE username = :username");
	  $stm->bindParam(':username', $_POST["username"]);
	  $stm->execute();
	  $result = $stm -> fetchAll();
	  
	  
		  if($result) {
			  foreach( $result as $row ) {
				  if ($row['password']==md5($_POST["password"])) {
                        
                        $data->status="1";
                          // prepare sql and bind parameters
                          $stm = $login->prepare("SELECT * from subscribe");
                          
                          $stm->execute();
                          $result = $stm -> fetchAll();
                          
                          
                          if($result)
                          $data->subscribe = array_reverse($result);
                          
                          
                          $stm = $login->prepare("SELECT * from feedback");
                          
                          $stm->execute();
                          $result = $stm -> fetchAll();
                          
                          
                          if($result)
                          $data->feedback=array_reverse($result);
                          
                          echo json_encode($data);
  

				  } else {
				      $data->status="Incorrect Password";
					  echo json_encode($data);
					  exit();
				  }
				}
		  } else {
		      $data->status="Account is not registered";
		       echo json_encode($data);	  
		  }
	  
	} catch(PDOException $e) {
	  $data->status="Error: " . $e->getMessage();
	  echo json_encode($data);
	}
$login = null;


} else {
    $data->status="Input Details missing";
    echo json_encode($data);
    
}

?>