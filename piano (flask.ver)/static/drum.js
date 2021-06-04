const A1 = new Audio("static/drums/A1.mp3");
const W2 = new Audio("static/drums/W2.mp3");
const S3 = new Audio("static/drums/S3.mp3");
const E4 = new Audio("static/drums/E4.mp3");
const U5 = new Audio("static/drums/U5.mp3");
const K6 = new Audio("static/drums/K6.mp3");
const F7 = new Audio("static/drums/F7.mp3");
const O8 = new Audio("static/drums/O8.mp3");

const playSound = audio => {
  const clone = audio.cloneNode();
  clone.play();
};

// A1
const A1Key = document.querySelector(".drumA");
const playA1 = () => {
  playSound(A1);
  A1Key.classList.add("active");
  setTimeout(() => A1Key.classList.remove("active"), 200);
};
A1Key.addEventListener("click", playA1);

// W2
const W2Key = document.querySelector(".drumW");
const playW2 = () => {
  playSound(W2);
  W2Key.classList.add("active");
  setTimeout(() => W2Key.classList.remove("active"), 200);
};
W2Key.addEventListener("click", playW2);

// S3
const S3Key = document.querySelector(".drumS");
const playS3 = () => {
  playSound(S3);
  S3Key.classList.add("active");
  setTimeout(() => S3Key.classList.remove("active"), 200);
};
S3Key.addEventListener("click", playS3);

// E4
const E4Key = document.querySelector(".drumE");
const playE4 = () => {
  playSound(E4);
  E4Key.classList.add("active");
  setTimeout(() => E4Key.classList.remove("active"), 200);
};
E4Key.addEventListener("click", playE4);

// U5
const U5Key = document.querySelector(".drumU");
const playU5 = () => {
  playSound(U5);
  U5Key.classList.add("active");
  setTimeout(() => U5Key.classList.remove("active"), 200);
};
U5Key.addEventListener("click", playU5);

// K6
const K6Key = document.querySelector(".drumK");
const playK6 = () => {
  playSound(K6);
  K6Key.classList.add("active");
  setTimeout(() => K6Key.classList.remove("active"), 200);
};
K6Key.addEventListener("click", playK6);

// F7
const F7Key = document.querySelector(".drumF");
const playF7 = () => {
  playSound(F7);
  F7Key.classList.add("active");
  setTimeout(() => F7Key.classList.remove("active"), 200);
};
F7Key.addEventListener("click", playF7);

// O8
const O8Key = document.querySelector(".drumO");
const playO8 = () => {
  playSound(O8);
  O8Key.classList.add("active");
  setTimeout(() => O8Key.classList.remove("active"), 200);
};
O8Key.addEventListener("click", playO8);


window.addEventListener("keydown", ({ keyCode }) => {
  // Press A
  if (keyCode === 65) return playA1();

  // Press W  
  if (keyCode === 87) return playW2();

  // Press S
  if (keyCode === 83) return playS3();

  // Press E
  if (keyCode === 69) return playE4();

  // Press U
  if (keyCode === 85) return playU5();

  // Press K
  if (keyCode === 75) return playK6();

  // Press F
  if (keyCode === 70) return playF7();

  // Press O
  if (keyCode === 79) return playO8();
}); 