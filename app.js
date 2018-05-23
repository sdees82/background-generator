
var firstColor = document.querySelector("#firstColor");
var secondColor = document.querySelector("#secondColor");
var randomColorsButton = document.querySelector(".randomColorButton");
var body = document.getElementById("gradient");
var css = document.querySelector("h3");


function showInitialGradient(){
    body.style.backgroundImage = "linear-gradient("+ firstColor.value + " , " + secondColor.value +")";
    css.textContent = "linear-gradient(" + firstColor.value + ", " + secondColor.value + ");";
}
function setGradient(){
    body.style.backgroundImage = "linear-gradient("+ firstColor.value + " , " + secondColor.value +")";
    css.textContent = body.style.backgroundImage;
}

function randomColors(){
    var randomColor1 = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
    var randomColor2 = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
    body.style.backgroundImage = "linear-gradient("+ randomColor1 + " , " + randomColor2 +")";
    css.textContent = body.style.backgroundImage;
}
showInitialGradient();

firstColor.addEventListener("input", setGradient);
secondColor.addEventListener("input", setGradient);
randomColorsButton.addEventListener("click",  randomColors);

