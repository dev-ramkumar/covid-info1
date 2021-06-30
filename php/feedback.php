<?php


if(isset($_POST["feedback"])) {
    
$feedbacks =$_POST["feedback"];    
 if (strlen($feedbacks)>1000 || strlen($feedbacks)<10 ) {
      echo "Length is too high or too low";
      exit();
    }

include 'database.php';
try {
  $cmd = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
  // set the PDO error mode to exception
  $cmd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

  // prepare sql and bind parameters
  $stm = $cmd->prepare("CALL insert_feedback_record(:feedback)");
  $stm->bindParam(':feedback', $feedbacks);
 
  
  if($stm->execute()) {
    echo "Submitted successfully";
  } else {
  echo "Something went wrong";
  
  }
  
} catch(PDOException $e) {
  echo "Error: " . $e->getMessage();
}
$cmd = null;


} else {
    echo "Feedbacks Missing";
    
}

?>