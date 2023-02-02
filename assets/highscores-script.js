let highscoresList = document.getElementById("highscores");
let data = JSON.parse(localStorage.getItem("highScores"));
for (let index = 0; index < data.length; index++) {
    let hsListItem = document.createElement("li");
    hsListItem.innerText = data[index].name +" - "+ data[index].score;
    
    highscoresList.append(hsListItem);

    let clearBtn = document.getElementById("clear");
    clearBtn.addEventListener("click", function(){
    hsListItem.style.display = "none";
});
    
}