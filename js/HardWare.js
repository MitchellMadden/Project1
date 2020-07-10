const btn = document.getElementById('Rasp-pi');

// list items //
const proj = document.getElementById('po-proj');

const hmpg = document.getElementById('hm-pg');

const opSys = document.getElementById('op-sys');


// start page at bottom on load
window.scrollTo(0,document.body.scrollHeight);

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

// mouseover for list item 'Home Page' 
proj.onmouseover = function() {
  document.getElementById("hmPg").style.fontSize = '200%';
  document.getElementById("hmPg").style.fontWeight = 780;
}

proj.onmouseleave = function() {
  document.getElementById("hmPg").style.fontSize = '150%';
  document.getElementById("hmPg").style.fontWeight = 780;
}

// mouseover for list item 'Projects' 
proj.onmouseover = function() {
  document.getElementById("po-proj").style.fontSize = '200%';
  document.getElementById("po-proj").style.fontWeight = 780;
}

proj.onmouseleave = function() {
  document.getElementById("po-proj").style.fontSize = '150%';
  document.getElementById("po-proj").style.fontWeight = 780;
}

// mouseover for list item 'Hardware'
hmpg.onmouseover = function() {
  document.getElementById("hm-pg").style.fontSize = '200%';
  document.getElementById("hm-pg").style.fontWeight = 780;
}

hmpg.onmouseleave = function() {
  document.getElementById("hm-pg").style.fontSize = '150%';
}

// mouseover for list item 'Operating System'
opSys.onmouseover = function() {
  document.getElementById("op-sys").style.fontSize = '200%';
}

opSys.onmouseleave = function() {
  document.getElementById("op-sys").style.fontSize = '150%';
}

// plays electricity sound on MotherBoard
function PlayStaticSound(shortCircuit) {
  var thissound=document.getElementById('shortCircuit');
  thissound.play();
}

function StopSound(shortCircuit) {
  var thissound=document.getElementById('shortCircuit');
  thissound.pause();
  thissound.currentTime = 0;
}

// plays transforming Sound on video
function PlayTransformSound(transformSound) {
  var thissound=document.getElementById('transformSound');
  thissound.volume = 0.1;
  thissound.play();
}

function StopSound(transformSound) {
  var thissound=document.getElementById('transformSound');
  thissound.pause();
  thissound.currentTime = 0;
}

// plays Boing Sound on ul
function PlayBoingSound(boing) {
  var thissound=document.getElementById('boing');
  thissound.volume = 0.1;
  thissound.play();
}

  function StopSound(boing) {
  var thissound=document.getElementById('boing');
  thissound.pause();
  thissound.currentTime = 0;
}

// plays Electric Board Sound On Pi MotherBoard
function PlayElectricSound(electricBoard) {
var thissound=document.getElementById('electricBoard');
thissound.volume = 0.1;
thissound.play();
}

function StopSound(electricBoard) {
var thissound=document.getElementById('electricBoard');
thissound.pause();
thissound.currentTime = 0;
}

$(function() {

    //settings for slider
    var width = 320;
    var animationSpeed = 1500;
    var pause = 5000;
    var currentSlide = 1;

    //cache DOM elements
    var $slider = $('#slider');
    var $slideContainer = $('.slides', $slider);
    var $slides = $('.slide', $slider);

    var interval;

    function startSlider() {
        interval = setInterval(function() {
            $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function() {
                if (++currentSlide === $slides.length) {
                    currentSlide = 1;
                    $slideContainer.css('margin-left', 0);
                }
            });
        }, pause);
    }
    function pauseSlider() {
        clearInterval(interval);
    }

    $slideContainer
        .on('mouseenter', pauseSlider)
        .on('mouseleave', startSlider);

    startSlider();


});