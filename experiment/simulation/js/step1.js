function gif1() {
  document.getElementById("one").style.visibility = "hidden";
  document.getElementById("whitebox").style.visibility = "hidden";
  document.getElementById("arrow1").style.visibility = "hidden";
  document.getElementById("gif1").style.visibility = "visible";
  myTimeout = setTimeout(() => {
    document.getElementById("transbox2").style.visibility = "hidden";
    document.getElementById("transbox3").style.visibility = "visible";
    document.getElementById("gif1").style.visibility = "hidden";
    document.getElementById("one").style.visibility = "visible";
    document.getElementById("arrow1").style.visibility = "visible";
  }, 7000);
}

function gif2() {
  document.getElementById("one").style.visibility = "hidden";
  document.getElementById("arrow1").style.visibility = "hidden";
  document.getElementById("gif2").style.visibility = "visible";
  myTimeout = setTimeout(() => {
    document.getElementById("arrow1").style.visibility = "visible";
    document.getElementById("transbox3").style.visibility = "hidden";
    document.getElementById("one").style.visibility = "hidden";
    document.getElementById("transbox4").style.visibility = "visible";
    document.getElementById("gif2").style.visibility = "hidden";
    document.getElementById("two").style.visibility = "visible";
  }, 7000);
}

function gif3() {
  document.getElementById("arrow1").style.visibility = "hidden";
  document.getElementById("gif3").style.visibility = "visible";
  document.getElementById("two").style.visibility = "hidden";
  // document.getElementById("next1").style.visibility = "visible";
  myTimeout = setTimeout(() => {
    document.getElementById("next1").style.visibility = "visible";
    document.getElementById("gif3").style.visibility = "hidden";
    document.getElementById("three").style.visibility = "visible";
  }, 5500);
}
