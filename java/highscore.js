//this needs to display the highscore from the database

//this is the function that will display the highscore

var highScores = localStorage.getItem("initialsAndScores");

function displayHighscore() {
    // Parse the highScores variable from a string to an array of objects
    var scoresArray = JSON.parse(highScores);
    console.log(scoresArray);
    // Sort the array of objects in descending order based on the score property
    scoresArray.sort(function(a, b) {
        return b.score - a.score;
    });

    // Loop through the sorted array of objects and create a list item for each object
    var listItems = "";
    for (var i = 0; i < scoresArray.length; i++) {
        listItems += "<li>" + scoresArray[i].initials + " - " + scoresArray[i].score + "</li>";
    }

    // Append each list item to an unordered list element
    var ul = document.createElement("ul");
    ul.innerHTML = listItems;

    // Append the unordered list to a container element in the HTML
    var container = document.getElementById("highscore-container");
    container.appendChild(ul);

    displayHighscore();
    console.log("displayHighscore() ran");
}


//TODO: highscore still not being displayed. Fix later.


// link main.js to highscore.js