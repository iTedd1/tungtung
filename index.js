var randomNumber1 = Math.floor(Math.random() * 6 + 1);

var randomIMG = "images/dice" + randomNumber1 + ".png"; 

document.querySelectorAll("img")[0].setAttribute("src", randomIMG);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImage2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImage2);

var title = document.querySelector("h1");

if (randomNumber1 < randomImage2) {
    title.innerHTML = "Player 2 win! 🚩";
}
else if (randomNumber1 > randomNumber2) {
    title.innerHTML = "🚩 Player 1 win!";
}
else {
    title.innerHTML = "Draw!";
}