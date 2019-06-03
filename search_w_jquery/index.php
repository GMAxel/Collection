<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="main.js"></script>
    <title>Document</title>
</head>
<body>
    <form method="post" action="" autocomplete="off">
        <div class="autocomplete" style="width:300px;">
            <input type="text" name="country" id="country" placeholder="Country">
        </div>
        <div>
            <ul id="suggestions">
             </ul>
        </div>
        <input type="submit" value="Skicka">
        <?php 
        if (isset($_POST['country'])) {
            echo "You searched for: " . $_POST['country'];
        } 
        ?>
    </form>
</body>
</html>