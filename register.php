<?php
 
include 'db_connect.php';

$con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
 
$json = file_get_contents('php://input');
$obj = json_decode($json,true);

$username = $obj['username'];
$email = $obj['mail'];
$password = $obj['password'];
$cpassword = $obj['cpassword'];


$Sql_username = "SELECT * from Membre where username = '$username'";
$check_username = mysqli_fetch_array(mysqli_query($con,$Sql_username));
if(isset($check_username)){
	$Exist_username = 'Username already exist!';
	$Exist_usernameJson = json_encode($Exist_username);
	echo $Exist_usernameJson; 
}
else{
     $Sql_mail = "SELECT * from Membre where mail = '$email'";
     $check_mail = mysqli_fetch_array(mysqli_query($con,$Sql_mail));
     if(isset($check_mail)){
          $Exist_mail = 'Email already exist!';
          $Exist_mailJson = json_encode($Exist_mail);
          echo $Exist_mailJson; 
     }
     else{
          if ($password != $cpassword){
               $diff_pass = "Different password! ";
               $diff_passJson = json_encode($diff_pass);
               echo $diff_passJson; 
          }
          else{
               $Sql_insert = " INSERT INTO Membre(username, mail,`password`) values('$username', '$email', '$password') ";
               mysqli_query($con,$Sql_insert);
               $inserted_user = "User Registered";
               $inserted_userJson = json_encode($inserted_user);
               echo $inserted_userJson; 
          }
     }
}

mysqli_close($con);

?>