var Window = document.querySelector(".toolbar")
var Butt = document.querySelector(".icon")
var End = document.querySelector(".close")
var Window2 = document.querySelector(".toolbar2")
var End2 = document.querySelector(".close2")
var Butt2 = document.querySelector(".icon2")
var cool = document.querySelector(".endthing")
var power = document.querySelector("#power")
var Butt3 = document.querySelector(".icon3")
var Vomit = document.querySelector(".containvomit")
var snd = new Audio("Yell.wav"); 

Window2.style.display = "none"
cool.style.display = "none"
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
        snd.play();
        Vomit.style.animation="drop 6s Linear"
    }, 100)
  });

End.addEventListener('click', function() {
    Window.style.display = 'none';
  });
End2.addEventListener('click', function() {
    Window2.style.display = 'none';
  });
Window.addEventListener("mousemove",(e)=>{
    if (move){
        Window.style.zIndex = 99;
        Window2.style.zIndex = 98;
        if (e.clientY > Window.offsetHeight/2 && e.clientY < window.innerHeight - Window.offsetHeight/2){
            Window.style.top = e.clientY + "px";
        }
        if (e.clientX > Window.offsetWidth/2 && e.clientX < window.innerWidth - Window.offsetWidth/2){
            Window.style.left = e.clientX + "px";
        }
    }
})
Window2.addEventListener("mousemove",(e)=>{
    if (move){
        Window2.style.zIndex = 99;
        Window.style.zIndex = 98;
        if (e.clientY > Window2.offsetHeight/2 && e.clientY < window.innerHeight - Window2.offsetHeight/2){
            Window2.style.top = e.clientY + "px";
        }
        if (e.clientX > Window2.offsetWidth/2 && e.clientX < window.innerWidth - Window2.offsetWidth/2){
            Window2.style.left = e.clientX + "px";
        }
    }
})
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

Window.addEventListener("mousedown",()=>{
    move = true;
})
Window.addEventListener("mouseup",()=>{
    move = false;
})
Window2.addEventListener("mousedown",()=>{
    move = true;
})
Window2.addEventListener("mouseup",()=>{
    move = false;
})