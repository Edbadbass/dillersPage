<?
if(isset($_SERVER['HTTP_X_REQUESTED_WITH']) && !empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest' && !empty($_POST['name'])) {
    $message = 'Имя: ' . $_POST['name'] . '; ';
    $message .= 'Телефон: ' . $_POST['phoneNumber'] . '; ';
    if(!empty($_POST['message'])) {
        $message .= 'Модель техники, запчасть: ' . $_POST['message'] . '. ';
    }
    $mailTo = "Ejjik14@gmail.com";
    $subject = "Письмо с сайта DealersPage";
    $headers= "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=utf-8\r\n";
    $headers .= "From: info@site.ru <info@site.ru>\r\n";
    if(mail($mailTo, $subject, $message, $headers)) {
        echo "Спасибо, ".$_POST['name'].", мы свяжемся с вами в самое ближайшее время!"; 
    } else {
        echo "Сообщение не отправлено!"; 
    }
}
?>