<?php

$recepient = "streeks4352@gmail.com";
$sitename = "Название сайта";

$name = trim($_GET["name"]);
$tel = trim($_GET["tel"]);



$pagetitle = "Новая заявка с сайта \"$sitename\"";
$message = "Имя: $name \nТел: $tel ";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

?>