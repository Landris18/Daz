<?php
 
include 'db_connect.php';

$con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
 
$json = file_get_contents('php://input');
$obj = json_decode($json,true);

$username = $obj['username'];
$password = $obj['password'];

$Sql_Query = "select * from Membre where username = '$username' and password = '$password' ";
$check = mysqli_fetch_array(mysqli_query($con,$Sql_Query));

if(isset($check)){
	$SuccessLoginMsg = 'Login_Success';
	$SuccessLoginJson = json_encode($SuccessLoginMsg);
	echo $SuccessLoginJson ; 
}
else{
	$InvalidMSG = 'Invalid username or password !' ;
	$InvalidMSGJSon = json_encode($InvalidMSG);
	echo $InvalidMSGJSon ;
}
 
mysqli_close($con);

?>