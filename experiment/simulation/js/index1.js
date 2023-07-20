// ---------------------------board setup javascript--------------------------

document.getElementById("transbox").addEventListener("click", () => {
  document.getElementById("gif-1").style.visibility = "visible";
  myTimeout = setTimeout(myGreeting, 1600);
});

function myGreeting() {
  document.getElementById("sheet").style.visibility = "hidden";
  document.getElementById("transbox1").style.visibility = "hidden";
  document.getElementById("transbox").style.visibility = "hidden";
  document.getElementById("clip1").style.visibility = "visible";
  document.getElementById("clip2").style.visibility = "visible";
  document.getElementById("clip3").style.visibility = "visible";
  document.getElementById("clip4").style.visibility = "visible";
  myStopFunction();
}

function clipmove1() {
  document.getElementById("boardclip1").style.visibility = "visible";
  document.getElementById("clip1").style.visibility = "hidden";
  document.getElementById("boardclip1").style.animationPlayState = "running";
  document.getElementById("boardclip1").style.animationIterationCount = "1";
}
function clipmove2() {
  document.getElementById("boardclip2").style.visibility = "visible";
  document.getElementById("clip2").style.visibility = "hidden";
  document.getElementById("boardclip2").style.animationPlayState = "running";
  document.getElementById("boardclip2").style.animationIterationCount = "1";
}
function clipmove3() {
  document.getElementById("boardclip3").style.visibility = "visible";
  document.getElementById("clip3").style.visibility = "hidden";
  document.getElementById("boardclip3").style.animationPlayState = "running";
  document.getElementById("boardclip3").style.animationIterationCount = "1";
}
function clipmove4() {
  document.getElementById("boardclip4").style.visibility = "visible";
  document.getElementById("clip4").style.visibility = "hidden";
  document.getElementById("boardclip4").style.animationPlayState = "running";
  document.getElementById("boardclip4").style.animationIterationCount = "1";
}

function myStopFunction() {
  clearTimeout(myTimeout);
}
