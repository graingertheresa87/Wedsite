<?php
// Initialize message variables
$msg = "";
$msgClass = "";

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['submit'])) {
    // Honeypot field check (anti-spam)
    if (!empty($_POST['website'])) {
        // Bot detected
        $msg = "Spam detected. Submission blocked.";
        $msgClass = "error";
    } else {
        // Recipient email
        $to = "graingertheresa87@gmail.com";

        // Sanitize inputs
        $name = htmlspecialchars(strip_tags(trim($_POST['name'])));
        $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
        $phone = htmlspecialchars(strip_tags(trim($_POST['phone'])));
        $service = htmlspecialchars(strip_tags(trim($_POST['service'])));
        $message = htmlspecialchars(strip_tags(trim($_POST['message'])));

        // Validate required fields
        if (empty($name) || empty($email) || empty($service) || empty($message)) {
            $msg = "Please fill in all required fields.";
            $msgClass = "error";
        } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $msg = "Please enter a valid email address.";
            $msgClass = "error";
        } else {
            // Email subject and headers
            $subject = "New Contact Form Submission from $name";
            $headers = "From: $email\r\n";
            $headers .= "Reply-To: $email\r\n";
            $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

            // Email body
            $body = "Name: $name\n";
            $body .= "Email: $email\n";
            $body .= "Phone: " . (!empty($phone) ? $phone : "N/A") . "\n";
            $body .= "Service: $service\n\n";
            $body .= "Message:\n$message\n";

            // Send email
            if (mail($to, $subject, $body, $headers)) {
                $msg = "Thank you! Your message has been sent successfully.";
                $msgClass = "success";
            } else {
                $msg = "Sorry, something went wrong. Please try again later.";
                $msgClass = "error";
            }
        }
    }
}
?>