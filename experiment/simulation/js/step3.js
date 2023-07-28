function gif5(){
  document.getElementById("arrow3").style.visibility = "hidden";
  document.getElementById("transbox6").style.visibility = "hidden";
  document.getElementById("five").style.visibility = "hidden";
  document.getElementById("gif5").style.visibility = "visible";
  myTimeout = setTimeout(() => {
      document.getElementById("gif5").style.visibility = "hidden";
      document.getElementById("six").style.visibility = "visible";
      document.getElementById("next3").style.visibility = "visible";
  }, 7540);
}