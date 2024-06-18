var Window = document.querySelector(".toolbar")
var Butt = document.querySelector(".icon")
var End = document.querySelector(".close")

Window.style.display = "none"
Window.style.opacity = 0;
var move = false;

Butt.addEventListener('click', function() {
    console.log("Im clicked");
    unfade()
  });

End.addEventListener('click', function() {
    Window.style.display = 'none';
  });

Window.addEventListener("mousemove",(e)=>{
    if (move){
        if (e.clientY > Window.offsetHeight/2 && e.clientY < window.innerHeight - Window.offsetHeight/2){
            Window.style.top = e.clientY + "px";
        }
        if (e.clientX > Window.offsetWidth/2 && e.clientX < window.innerWidth - Window.offsetWidth/2){
            Window.style.left = e.clientX + "px";
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


Window.addEventListener("mousedown",()=>{
    move = true;
})
Window.addEventListener("mouseup",()=>{
    move = false;
})