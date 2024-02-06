
var myTrigger = document.getElementById("myTrigger");
var myHi = document.getElementById("hi");


myTrigger.addEventListener('click', thisFunction);


function thisFunction() {
    console.log("Function call");
    myHi.textContent = "new Hi aaaaaaa";


}

