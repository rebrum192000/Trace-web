<?php
$name = $_POST['name'];
$tel = $_POST['tel'];
$email = $_POST['email'];

mail("trace@ugmk-telecom.ru", "maynitech@gmail.com", "Заявка с сайта", "Имя:".$name.". Телефон: ".$tel.".Email:".$email,"From: trace@ugmk-telecom.ru \r\n")
?>

<script>
	window.close()
</script>
