<?php
$name = $_POST['name'];
$tel = $_POST['tel'];
$email = $_POST['email'];

mail("trace@ugmk-telecom.ru", "Application from site: order presentation", "Name:".$name."\r\nPhone: ".$tel."\r\nEmail:".$email,"From: mytrace@ugmk-telecom.ru \r\n")
?>

<script>
	window.close()
</script>
