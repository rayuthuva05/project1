<?php
require 'vendor/autoload.php'; // Composer autoload file for MongoDB PHP library

$client = new MongoDB\Client("mongodb://localhost:27017");
$collection = $client->e_teacher->users;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $user = $_POST['user'];
    $email = $_POST['email'];
    $password = password_hash($_POST['password'], PASSWORD_BCRYPT);
    $role = $_POST['role'];

    // Create the document with user data
    $userDocument = [
        'username' => $user,
        'email' => $email,
        'password' => $password,
        'role' => $role,
        'created_at' => new MongoDB\BSON\UTCDateTime()
    ];

    // Insert the document into MongoDB
    $insertResult = $collection->insertOne($userDocument);

    // Check if the insertion was successful
    if ($insertResult->getInsertedCount() === 1) {
        // Redirect to register.html if data is successfully inserted
        header("Location: register.html");
        exit(); // Ensure script stops here after redirect
    } else {
        echo "Error: Unable to register user. Please try again.";
    }
}
?>
