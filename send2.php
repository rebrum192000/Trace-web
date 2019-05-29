<?php
$popName = $_POST['popup-name'];
$popTel = $_POST['popup-tel'];
$popTime = $_POST['popup-time'];

mail("trace@ugmk-telecom.ru", "maynitech@gmail.com", "Заявка с сайта", "Имя:".$name.". Телефон: ".$tel.".Удобное время для звонка:".$popTime,"From: trace@ugmk-telecom.ru \r\n")
?>

<script>
	window.close()
</script>
