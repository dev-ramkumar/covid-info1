<?php


if(isset($_POST["admin-password"])) {
require_once 'database.php';

	try {
	  $login = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
	  // set the PDO error mode to exception
	  $login->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

	  // prepare sql and bind parameters
	  $stm = $login->prepare("SELECT username  FROM covidapi WHERE password = :password");
	  $stm->bindParam(':password', md5($_POST["admin-password"]));
	  $stm->execute();
	  $result = $stm -> fetchAll();
	  
	  
		  if($result) {
		      
		      $stm = $login->prepare("SELECT *  FROM covidapi WHERE username = :username");
	            $stm->bindParam(':username', $_POST["username"]);
	            $stm->execute();
        	  $result = $stm -> fetchAll();
        	  
        	  if($result){
        	      echo "Username already exits";
        	      exit();
        	  }
			  
			  $stm = $login->prepare("Insert into covidapi(username,password) values (:un, :pass)");
	          $stm->bindParam(':un', $_POST["username"]);
	          $stm->bindParam(':pass', md5($_POST["password"]));
	          $stm->execute();
	          echo "User Added";
			  
		  } else {
			echo "account is not registered";		  
		  }
	  
	} catch(PDOException $e) {
	  echo "Error: " . $e->getMessage();
	}
$login = null;


} else {
    echo "Admin password missing";
    
}

?>