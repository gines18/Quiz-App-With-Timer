const highscoresList = document.getElementById("highscores");


const data = JSON.parse(localStorage.getItem("highScores"));

for (let index = 0; index < data.length; index++) {

    const hsListItem = document.createElement("li");
    hsListItem.innerText = data[index].name +" - "+ data[index].score;

    highscoresList.append(hsListItem);
    
}