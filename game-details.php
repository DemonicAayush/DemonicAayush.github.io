<?php
// Sample array of game details (you should replace this with your actual data source)
$gameDetailsData = array(
    "Confined" => array(
        "status" => "Killed",
        "description" => "Confined was a horror game being developed by DemonKingSwarn but eventually he stopped working on it because he started getting weary of it."
    ),
    "ManagerCEO" => array(
        "status" => "Killed",
        "description" => "Nikhil Malankar gave the ownership of this game to DemonKingSwarn who then gave it to Aayush who then killed the game out of his lack of interest."
    ),
    "URI" => array(
        "status" => "Killed",
        "description" => "One of the first group projects of Aayush(cloudy) at GameOH. Later got killed due to skill issue. I really liked its aesthetics, 2D lights - good old days of working in 2D."
    ),
    "Avoid - Reborn" => array(
        "status" => "Killed",
        "description" => "Full version of Aayush's popular game - <a href='https://cloudyin.itch.io/avoid' target='_blank'>Avoid</a>. Avoid also happens to be his first published game in Brackeys game jam."
    ),

    "TEST" => array(
        "status" => "Killed",
        "description" => "This is a test, lorem ipsum"
    )
);

function getGameDetails($title) {
    global $gameDetailsData;

    // Check if the game title exists in the data
    if (array_key_exists($title, $gameDetailsData)) {
        $details = "<p>Status: " . $gameDetailsData[$title]["status"] . "</p>";
        $details .= "<p>" . $gameDetailsData[$title]["description"] . "</p>";
        return $details;
    } else {
        return "Game details not found.";
    }
}
?>

