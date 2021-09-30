var DOB = document.querySelector("#dob");
var LN = document.querySelector("#luckyno");
var CN = document.querySelector("#chknum");
var LP = document.querySelector("#luckypara");
var UP = document.querySelector("#unluckypara");
var NC = document.querySelector("#notice-close");
var NO = document.querySelector("#notice");

NC.addEventListener("click" ,  closeButton);
CN.addEventListener("click" ,  checkinputs);


function closeButton() {
  NO.style.display = "none";
}

function checkinputs() {
    
    var numsum = calculateSum(DOB.value);
    var luckno = Number(LN.value);
    var result = checkLuck(numsum,luckno);
    
    if(result === true) {
       LP.style.display = "block";
       UP.style.display = "none";
    } else {
       UP.style.display = "block";
       LP.style.display = "none";
    }
}

function calculateSum(birthdate) {
    var bd = birthdate.replaceAll("-","");
    var bd = bd.split("");
    var sum = 0; 

    for(let i=0; i<bd.length;i++) {
        sum = sum + Number(bd[i]);
    } 
    return sum;
}

function checkLuck(numsum,luckno) {
   if (numsum % luckno === 0) {
       return true;
   } else {
       return false;
   }
}