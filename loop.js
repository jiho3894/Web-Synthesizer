var C4 = new Audio('sounds/C4.mp3'); 
C4.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);


