<?php
header('Content-Type: application/json');
$jasonEnCode = file_get_contents('../data/dischi.json');
echo $jasonEnCode;
?>

