<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['user__name'];
$phone = $_POST['user__phone'];
$price = $_POST['user__price'];
$price2 = $_POST['user__price-mob'];
$info = $_POST['user__info'];
$warnings = $_POST['user__warnings'];

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'rklikh@mail.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'Rudik147'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('rklikh@mail.ru'); // от кого будет уходить письмо?
$mail->addAddress('rklikh@mail.ru');     // Кому будет уходить письмо 
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'STEFAN JEBAT ZAKAZALY BIGOOOOM';
$newPrice = $price2;
if ($price != "") {
    $newPrice = $price;
}

$mail->Body    = '' .$name . ' оставил заявку, его телефон ' .$phone. '<br>Цена: ' .$newPrice .'INFA: ' .$info .'WARNINGS :' .$warnings;
$mail->AltBody = '';

$message = "";


if(!$mail->send()) {
    $message = "error";
} else {
    $message = "ok";
}
echo json_encode($message);
?>