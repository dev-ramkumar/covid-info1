<?php


if(isset($_POST["email"])) {
    
$email =$_POST["email"];    
 if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      echo "Invalid email format";
      exit();
    }

include 'database.php';
try {
  $cmd = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
  // set the PDO error mode to exception
  $cmd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

  // prepare sql and bind parameters
  $stm = $cmd->prepare("CALL insert_subscribe_record(:email)");
  $stm->bindParam(':email', $email);
 
  
  if($stm->execute()) {
    echo "Subscribed successfully";
  } else {
  echo "Something went wrong";
  
  }
  
} catch(PDOException $e) {
  echo "Error: " . $e->getMessage();
}
$cmd = null;


} else {
    echo "email missing";
    
}

?>