<?php
$name = $_POST['name'];
$tel = $_POST['tel'];
$email = $_POST['email'];

mail("trace@ugmk-telecom.ru", "Заявка с сайта", "Имя:".$name.". Телефон: ".$tel.".Email:".$email,"From: mytrace@ugmk-telecom.ru \r\n")
?>

<script>
	window.close()
</script>
