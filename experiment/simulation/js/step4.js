function gif7(){
    document.getElementById("seven").style.visibility="hidden";
    document.getElementById("whitebox1").style.visibility="hidden";
    document.getElementById("arrow3").style.visibility="hidden";
    document.getElementById("gif6").style.visibility="visible";
    myTimeout = setTimeout(() => {
        document.getElementById("next").style.visibility = "visible";
    },9600);
}