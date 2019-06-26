<?php
$popName = $_POST['popup-name'];
$popTel = $_POST['popup-tel'];
$popTime = $_POST['popup-time'];

mail("trace@ugmk-telecom.ru", "Application from site: order a call", "Name:".$popName."\r\nPhone: ".$popTel."\r\nConvenient call time:".$popTime,"From: mytrace@ugmk-telecom.ru \r\n")
?>

<script>
	window.close()
</script>
