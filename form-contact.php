<?php

if(isset($_POST['email'])) {



    // EDIT THE 2 LINES BELOW AS REQUIRED

    if($_POST['subject'] == "paneles"){
        $email_to = "tecnica@termicasanluis.com.ar";
    }else{
        $email_to = "lana@termicasanluis.com.ar";
    }


    $subject = $_POST['subject']; // required

    $name = $_POST['name']; // required

    $email_from = $_POST['email']; // required

    $telephone = $_POST['telephone'];  //required

    $company = $_POST['company'];  //required

    $message = $_POST['message']; // required






    function clean_string($string) {

        $bad = array("content-type","bcc:","to:","cc:","href");

        return str_replace($bad,"",$string);

    }



    $email_message .= "Nombre: ".clean_string($name)."\n";

    $email_message .= "Empresa: ".clean_string($company)."\n";

    $email_message .= "Email: ".clean_string($email_from)."\n";

    $email_message .= "Teléfono: ".clean_string($telephone)."\n";

    $email_message .= "Mensaje: ".clean_string($message)."\n";





// create email headers

    $headers = 'From: '.$email_from."\r\n".

        'Reply-To: '.$email_from."\r\n" .

        'X-Mailer: PHP/' . phpversion();

    @mail($email_to, $subject, $email_message, $headers);

    ?>

<?php

}

?>