const btn = document.getElementById('Rasp-pi');

// list items //
const proj = document.getElementById('po-proj');

const hard = document.getElementById('hdwr');

const opSys = document.getElementById('op-sys');


// random #'s for bckground color
function random(number) {
  return Math.floor(Math.random() * (number+1));
}

// random color on mouse over
btn.onmouseover = function() {
  const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
  document.getElementById('lightningRight').style.opacity = 1;
  document.getElementById('lightningLeft').style.opacity = 1;
}

btn.onmouseleave = function() {
  document.getElementById('lightningRight').style.opacity = 0;
  document.getElementById('lightningLeft').style.opacity = 0;  
}
