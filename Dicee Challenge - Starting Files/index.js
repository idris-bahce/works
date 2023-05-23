var random_number1 = Math.floor(Math.random() * 6) + 1;
var random_number2 = Math.floor(Math.random() * 6) + 1;

var path1 = "./images/dice" + random_number1 + ".png";
var path2 = "./images/dice" + random_number2 + ".png";

document.querySelector(".img1").setAttribute("src", path1);
document.querySelector(".img2").setAttribute("src", path2);

if (random_number1 > random_number2) {
    document.getElementsByTagName("h1")[0].innerHTML = "🎈Player1 Wins!";
} else if (random_number1 < random_number2) {
    document.getElementsByTagName("h1")[0].innerHTML = "Player2 Wins!🎈";
} else {
    document.getElementsByTagName("h1")[0].innerHTML = "Draw!";
}