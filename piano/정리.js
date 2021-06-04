window.addEventListener("keydown", ({ keyCode }) => {
  if (keyCode === 65) return looping1();
  }); 

  
C4.addEventListener("ended", function() {
  this.currentTime = 0;
  this.playbackRate= 10;
  this.play();
  setTimeout(() => (C4.volume = 1), 2000);
}, false);

var C4 = new Audio('sounds/C4.mp3'); 
C4.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);

$(".exImg").on("click",function(e) {
  opacityRemove(e.target);
});
function opacityRemove(body){
  $("body").css("opacity","0");
  delay(1000);
}
$("body").css("opacity","1");
