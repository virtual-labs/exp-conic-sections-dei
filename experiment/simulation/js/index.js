
// ------------------ first two slides ------------------

const page1=document.getElementById("container");
const page2=document.getElementById("container2");

document.getElementById("btn1").addEventListener('click',()=>{
    page1.classList.add("hide");
    page2.classList.remove("hide");
})
document.getElementById("btn2").addEventListener('click',()=>{
    page1.classList.remove("hide");
    page2.classList.add("hide");
})




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


  function gif4(){
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
  

  function gif5(){
    document.getElementById("arrow3").style.visibility = "hidden";
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
  
  
  function gif7(){
    document.getElementById("seven").style.visibility="hidden";
    document.getElementById("whitebox1").style.visibility="hidden";
    document.getElementById("arrow3").style.visibility="hidden";
    document.getElementById("gif6").style.visibility="visible";
    myTimeout = setTimeout(() => {
      document.getElementById("next").style.visibility = "visible";
    },9600);
  }
  
  
  // ------------------ step5 ----------------------
  
  
  function gif8()
  {
    document.getElementById("seven").style.visibility="hidden";
    document.getElementById("arrow3").style.visibility="hidden";
    document.getElementById("gif7").style.visibility="visible";
    myTimeout = setTimeout(() => {
      document.getElementById("next").style.visibility = "visible";
    },7500);
  }
  
  
  // ------------------ step6 ----------------------
  
  
  function gif9()
  {
    document.getElementById("nine").style.visibility="hidden";
    document.getElementById("arrow3").style.visibility="hidden";
    document.getElementById("gif9").style.visibility="visible";
    myTimeout = setTimeout(() => {
      document.getElementById("next").style.visibility = "visible";
      document.getElementById("gif9").style.visibility="hidden";
      document.getElementById("ten").style.visibility="visible";
    },15000);
  }
  
  // ----------------------step7---------------------
  

  function gif10()
  {
    document.getElementById("eleven").style.visibility="hidden";
    document.getElementById("arrow4").style.visibility="hidden";
    document.getElementById("gif10").style.visibility="visible";
    myTimeout = setTimeout(() => {
      document.getElementById("next").style.visibility = "visible";
      document.getElementById("gif10").style.visibility="hidden";
      document.getElementById("twelve").style.visibility="visible";
    },50000);
  }