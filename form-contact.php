<?php

if(isset($_POST['email'])) {



    // EDIT THE 2 LINES BELOW AS REQUIRED

    if($_POST['subject'] == "paneles"){
        $email_to = "podesta.noe@gmail.com";
    }else{
        $email_to = "jacobipedro@gmail.com";
    }



    function died($error) {

        // your error code can go here

        echo "We are very sorry, but there were error(s) found with the form you submitted. ";

        echo "These errors appear below.<br /><br />";

        echo $error."<br /><br />";

        echo "Please go back and fix these errors.<br /><br />";

        die();

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

    $email_message .= "Email: ".clean_string($email)."\n";

    $email_message .= "Teléfono: ".clean_string($telephone)."\n";

    $email_message .= "Mensaje: ".clean_string($message)."\n";





// create email headers

    $headers = 'From: '.$email_from."\r\n".

        'Reply-To: '.$email_from."\r\n" .

        'X-Mailer: PHP/' . phpversion();

    @mail($email_to, $subject, $email_message, $headers);

    ?>



    <!-- include your own success html here -->



    Thank you for contacting us. We will be in touch with you very soon.



<?php

}

?>