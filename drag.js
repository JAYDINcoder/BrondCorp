var Window = document.querySelector(".toolbar")
var Butt = document.querySelector(".icon")
var End = document.querySelector(".winX-button")
var Window2 = document.querySelector(".toolbar2")
var End2 = document.querySelector(".winX-button2")
var Butt2 = document.querySelector(".icon2")
var cool = document.querySelector(".endthing")
var power = document.querySelector("#power")
var Butt3 = document.querySelector(".icon3")
var Butt4 = document.querySelector(".icon4")
var Vomit = document.querySelector(".containvomit")
var snd = new Audio("Yell.wav"); 
var dance = document.querySelector(".Garlic")
var strobe = document.querySelector(".Party")
var music = new Audio("Fart.mp3");

Window2.style.display = "none"
cool.style.display = "none"
strobe.style.display = "none"
Window.style.display = "none"
Window.style.opacity = 0;
var move = false;

power.addEventListener('click', function() {
    close()
    setTimeout(poop, 5000);
  });

Butt.addEventListener('click', function() {
    Window.style.zIndex = 99;
    Window2.style.zIndex = 98;
    unfade()
  });

Butt2.addEventListener('click', function() {
    Window2.style.zIndex = 99;
    Window.style.zIndex = 98;
    unfade2()
  });

  Butt3.addEventListener('click', function() {
    Vomit.style.animation="none"
    setTimeout(function(){
        const newAudio = snd.cloneNode()
        newAudio.play()
        Vomit.style.animation="drop 6s Linear"
    }, 100)
  });
  Butt4.addEventListener('click', function() {
    dance.style.animation="none"
    setTimeout(function(){
        strobe.style.opacity = "0.4"
        strobe.style.display = "block"
        dance.style.animation="grove 4s Linear"
        music.play();
    }, 100)
    setTimeout(function(){
        fade()
    }, 4000)
    setTimeout(function(){
        strobe.style.display = "none"
        music.stop();
    }, 5700)
  });

End.addEventListener('click', function() {
    Window.style.display = 'none';
  });
End2.addEventListener('click', function() {
    Window2.style.display = 'none';
  });
function unfade(element) {
    var op = 0.1;  // initial opacity
    Window.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        Window.style.opacity = op;
        Window.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);
}
function poop(element) {
    window.location.href = 'index.html';
}
function unfade2(element) {
    var op = 0.1;  // initial opacity
    Window2.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        Window2.style.opacity = op;
        Window2.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);
}
function close(element) {
    var op = 0.1;  // initial opacity
    cool.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        cool.style.opacity = op;
        cool.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);
}
function fade(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            strobe.style.display = 'none';
        }
        strobe.style.opacity = op;
        strobe.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
}
Audio.prototype.stop = function() {
    music.pause();
    music.currentTime = 0;
};