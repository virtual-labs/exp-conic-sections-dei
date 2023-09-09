// ------------------ first two slides ------------------

const page1 = document.getElementById("container");
const page2 = document.getElementById("container2");

document.getElementById("btn1").addEventListener("click", () => {
  parent.location = "../problem-1/links.html";
});

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
  }, 6500);
}

// ---------------question1 starts here-----------------

// ------------------ step1 ----------------------

function gif3() {
  document.getElementById("arrow1").style.visibility = "hidden";
  document.getElementById("gif3").style.visibility = "visible";
  document.getElementById("two").style.visibility = "hidden";
  // document.getElementById("next1").style.visibility = "visible";
  myTimeout = setTimeout(() => {
    document.getElementById("next").style.visibility = "visible";
    document.getElementById("gif3").style.visibility = "hidden";
    document.getElementById("three").style.visibility = "visible";
  }, 5500);
}

// ------------------ step2 ----------------------

function gif4() {
  document.getElementById("four").style.visibility = "hidden";
  document.getElementById("arrow2").style.visibility = "hidden";
  document.getElementById("gif4").style.visibility = "visible";
  myTimeout = setTimeout(() => {
    document.getElementById("gif4").style.visibility = "hidden";
    document.getElementById("five").style.visibility = "visible";
    document.getElementById("transbox5").style.visibility = "hidden";
    document.getElementById("next").style.visibility = "visible";
  }, 7500);
}

// ------------------ step3 ----------------------

function gif5() {
  document.getElementById("arrow10").style.visibility = "hidden";
  document.getElementById("transbox6").style.visibility = "hidden";
  document.getElementById("five").style.visibility = "hidden";
  document.getElementById("gif5").style.visibility = "visible";
  myTimeout = setTimeout(() => {
    document.getElementById("gif5").style.visibility = "hidden";
    document.getElementById("six").style.visibility = "visible";
    document.getElementById("next").style.visibility = "visible";
  }, 7540);
}

// ------------------ step4 ----------------------

function gif7() {
  document.getElementById("seven").style.visibility = "hidden";
  document.getElementById("whitebox1").style.visibility = "hidden";
  document.getElementById("arrow10").style.visibility = "hidden";
  document.getElementById("gif6").style.visibility = "visible";
  myTimeout = setTimeout(() => {
    document.getElementById("next").style.visibility = "visible";
  }, 9600);
}

// ------------------ step5 ----------------------

function gif8() {
  document.getElementById("seven").style.visibility = "hidden";
  document.getElementById("arrow10").style.visibility = "hidden";
  document.getElementById("gif7").style.visibility = "visible";
  myTimeout = setTimeout(() => {
    document.getElementById("next").style.visibility = "visible";
  }, 7500);
}

// ------------------ step6 ----------------------

function gif9() {
  document.getElementById("nine").style.visibility = "hidden";
  document.getElementById("arrow10").style.visibility = "hidden";
  document.getElementById("gif9").style.visibility = "visible";
  myTimeout = setTimeout(() => {
    document.getElementById("next").style.visibility = "visible";
    document.getElementById("gif9").style.visibility = "hidden";
    document.getElementById("ten").style.visibility = "visible";
  }, 15000);
}

// ----------------------step7---------------------

function gif10() {
  document.getElementById("eleven").style.visibility = "hidden";
  document.getElementById("arrow4").style.visibility = "hidden";
  document.getElementById("gif10").style.visibility = "visible";
  myTimeout = setTimeout(() => {
    document.getElementById("next").style.visibility = "visible";
    document.getElementById("gif10").style.visibility = "hidden";
    document.getElementById("twelve").style.visibility = "visible";
  }, 50000);
}
// ----------------------step8---------------------

function gif11() {
  document.getElementById("thirteen").style.visibility = "hidden";
  document.getElementById("arrow5").style.visibility = "hidden";
  document.getElementById("gif11").style.visibility = "visible";
  myTimeout = setTimeout(() => {
    document.getElementById("arrow6").style.visibility = "visible";
    document.getElementById("transbox10").style.visibility = "visible";
  }, 2000);
}

function gif12() {
  document.getElementById("transbox9").style.visibility = "hidden";
  document.getElementById("gif11").style.visibility = "hidden";
  document.getElementById("arrow6").style.visibility = "hidden";
  document.getElementById("transbox10").style.visibility = "hidden";
  document.getElementById("gif12").style.visibility = "visible";
  myTimeout = setTimeout(() => {
    document.getElementById("gif12").style.visibility = "hidden";
    document.getElementById("fourteen").style.visibility = "visible";
    document.getElementById("next").style.visibility = "visible";
  }, 4500);
}

// -----------------step9--------------------

function gif13() {
  document.getElementById("fifteen").style.visibility = "hidden";
  document.getElementById("arrow5").style.visibility = "hidden";
  document.getElementById("gif13").style.visibility = "visible";
  myTimeout = setTimeout(() => {
    document.getElementById("gif13").style.visibility = "hidden";
    document.getElementById("sixteen").style.visibility = "visible";
    document.getElementById("next").style.visibility = "visible";
  }, 32000);
}

// -----------------step10--------------------

function gif14() {
  document.getElementById("seventeen").style.visibility = "hidden";
  document.getElementById("arrow3").style.visibility = "hidden";
  document.getElementById("gif14").style.visibility = "visible";
  myTimeout = setTimeout(() => {
    document.getElementById("gif14").style.visibility = "hidden";
    document.getElementById("eighteen").style.visibility = "visible";
    document.getElementById("next").style.visibility = "visible";
  }, 3500);
}

// -----------------step11--------------------

function gif15() {
  document.getElementById("nineteen").style.visibility = "hidden";
  document.getElementById("arrow7").style.visibility = "hidden";
  document.getElementById("gif15").style.visibility = "visible";
  myTimeout = setTimeout(() => {
    document.getElementById("gif15").style.visibility = "hidden";
    document.getElementById("twenty").style.visibility = "visible";
    document.getElementById("next").style.visibility = "visible";
  }, 7500);
}

// -----------------step12--------------------

function gif16() {
  document.getElementById("twentyone").style.visibility = "hidden";
  document.getElementById("arrow4").style.visibility = "hidden";
  document.getElementById("gif16").style.visibility = "visible";
  myTimeout = setTimeout(() => {
    document.getElementById("arrow8").style.visibility = "visible";
    document.getElementById("gif16").style.visibility = "hidden";
    document.getElementById("twentytwo").style.visibility = "visible";
    document.getElementById("transbox8").style.visibility = "hidden";
    document.getElementById("transbox13").style.visibility = "visible";
  }, 9200);
}
function gif17() {
  document.getElementById("twentytwo").style.visibility = "hidden";
  document.getElementById("arrow8").style.visibility = "hidden";
  document.getElementById("gif17").style.visibility = "visible";
  myTimeout = setTimeout(() => {
    document.getElementById("gif17").style.visibility = "hidden";
    document.getElementById("twentythree").style.visibility = "visible";
    document.getElementById("transbox8").style.visibility = "hidden";
    document.getElementById("transbox13").style.visibility = "hidden";
    document.getElementById("next").style.visibility = "visible";
  }, 7200);
}

// ---------------------step13---------------------------

function gif18() {
  document.getElementById("transbox14").style.visibility = "hidden";
  document.getElementById("twentyfour").style.visibility = "hidden";
  document.getElementById("arrow3").style.visibility = "hidden";
  document.getElementById("gif18").style.visibility = "visible";
  myTimeout = setTimeout(() => {
    document.getElementById("gif18").style.visibility = "hidden";
    document.getElementById("twentyfive").style.visibility = "visible";
    document.getElementById("next").style.visibility = "visible";
  }, 9000);
}

// ----------------------step14------------------------

function gif19() {
  document.getElementById("transbox15").style.visibility = "hidden";
  document.getElementById("twentysix").style.visibility = "hidden";
  document.getElementById("arrow9").style.visibility = "hidden";
  document.getElementById("gif19").style.visibility = "visible";
  myTimeout = setTimeout(() => {
    document.getElementById("gif19").style.visibility = "hidden";
    document.getElementById("twentyseven").style.visibility = "visible";
    document.getElementById("next").style.visibility = "visible";
  }, 7400);
}
