function gif4(){
  document.getElementById("four").style.visibility = "hidden";
  document.getElementById("arrow2").style.visibility = "hidden";
  document.getElementById("gif4").style.visibility = "visible";
  myTimeout = setTimeout(() => {
    document.getElementById("gif4").style.visibility = "hidden";
    document.getElementById("five").style.visibility = "visible";
    document.getElementById("transbox5").style.visibility = "hidden";
    document.getElementById("next2").style.visibility = "visible";
  }, 7500);
}

