<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta http-equiv="Content-Language" content="fr"/>
    <meta name="author" content="Marc Glisse"/>
    <script type="text/javascript" src="script/jquery.js"></script>
    <link rel="stylesheet" type="text/css" href="style.css"/>
    <title>
        Morbak online
    </title>
</head>
<body>
<div id="mainDiv">
    <div id="centeredDiv">
        <h1 id="title">
            L'invasion des morbaks
        </h1>
<!--
        <div id="connexion">
            <input id="pseudo" type="text" placeholder="Insert your name here"/>
            <div id="checkBox">
                <input type="radio"/>Se souvenir de moi
            </div>
            <input class="typicalButton" id="submit" type="submit" value="Jouer"/>
        </div>
-->
        <div id="game">
            <div id="tablePoint">
                <table id="morbak">
                    <tr>
                        <td id="11">?</td>
                        <td id="12">?</td>
                        <td id="13">?</td>
                    </tr>
                    <tr>
                        <td id="21">?</td>
                        <td id="22">?</td>
                        <td id="23">?</td>
                    </tr>
                    <tr>
                        <td id="31">?</td>
                        <td id="32">?</td>
                        <td id="33">?</td>
                    </tr>
                </table>
                <div id="result">
                </div>
            </div>
            <br/>
            <button class="typicalButton" id="jouer">Lancer les dés</button>
            <button class="typicalButton" id="saveIt" hidden="hidden">S'enregistrer</button>
        </div>
    </div>
</div>
<script type="text/javascript" src="script/script.js"></script>
</body>
</html>