<?php

$recepient = "abramova_assia@mail.ru";
$sitename = "Grande Orchidée Brande Outlet Centre";

$name = trim($_GET["name"]);
$tel = trim($_GET["tel"]);
$mail = trim($_GET["mail"]);



$pagetitle = "Новая заявка с сайта \"$sitename\"";
$message = "Имя: $name \nТел: $tel \nE-mail: $mail";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

?>