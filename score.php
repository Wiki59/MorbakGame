<?php
/*if ($_SERVER['REQUEST_METHOD'] === "POST") {
    $pseudo = $_POST["pseudo"];
    $score = $_POST["score"];

    $actual = json_decode(file_get_contents("score.json"), true);
    $new = array(
        $pseudo => [
            "score" => $score,
            "date" => time(),
        ],
    );
    file_put_contents(json_encode(array_merge($actual, $new)));
} else {
    $actual = json_decode(file_get_contents("score.json"), true);
    foreach ($actual as $a) {
        var_dump($a);
    }
}*/

$actual = json_decode(file_get_contents("score.json"), true);
$new = array(
    "Ok" => [
        "score" => 50,
        "date" => time(),
    ],
);
file_put_contents("score.json", json_encode(array_merge($actual, $new)));

var_dump(error_get_last());