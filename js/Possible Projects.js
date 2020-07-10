

function autoPlaySound() {
    var PacSound = document.getElementById("pacSound");
    PacSound.play();
 }

// plays Game Over Sound on Home Page Link
function PlayGameOverSound(gameOver) {
    var thissound=document.getElementById('gameOver');
    thissound.volume = 0.1;
    thissound.play();
}

// plays Fruit Sound on Home Page Link
function PlayFruitSound(fruit) {
    var thissound=document.getElementById('fruit');
    thissound.volume = 0.1;
    thissound.play();
}

// plays intro pacman sound on hover of pacman
function PlayPacSound(pacSound) {
    var thissound=document.getElementById('pacSound');
    thissound.volume = 0.5;
    thissound.play();
}