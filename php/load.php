<?php

include 'database.php';


try {
  $cmd = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
  // set the PDO error mode to exception
  $cmd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

  // prepare sql and bind parameters
  $stm = $cmd->prepare("SELECT * from subscribe");
  
  $stm->execute();
  $result = $stm -> fetchAll();
  
  
  if($result)
  echo '<table><tr><th>Email</th><th>Date</th><th>Location</th></tr>';
  
  foreach( $result as $row ) {
  echo '<tr>';
  
  echo '<td>'.htmlspecialchars($row['email']).'</td>';
  echo '<td>'.htmlspecialchars($row['date']).'</td>';
  echo '<td>'.htmlspecialchars($row['location']).'</td>';
 ;
  echo '</tr>';
  }
  if($result)
  echo '</table>';
  
  
  $stm = $cmd->prepare("SELECT * from feedback");
  
  $stm->execute();
  $result = $stm -> fetchAll();
  
  
  if($result)
  echo '<table><tr><th>Feedback</th><th>Date</th><th>Location</th></tr>';
  
  foreach( $result as $row ) {
  echo '<tr>';
  
  echo '<td>'.htmlspecialchars($row['feedback']).'</td>';
  echo '<td>'.htmlspecialchars($row['date']).'</td>';
  echo '<td>'.htmlspecialchars($row['location']).'</td>';
 ;
  echo '</tr>';
  }
  if($result)
  echo '</table>';
  
} catch(PDOException $e) {
  echo "Error: " . $e->getMessage();
}
$cmd = null;

?>


<style>
    table, th, td {
  border: 1px solid black;
}
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 100px;
}
</style>
