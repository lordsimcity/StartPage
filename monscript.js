let currentHour;
let currentMinute;
let currentSec;
let currentDay;
let currentMonth;
let currentYear;




setInterval(() => {
  Time();
  ChangeTextColor();
  Bonjour();
;
}, 1000);

function Time() {
  currentHour = new Date().getHours();
  currentMinute = new Date().getMinutes();
  currentSec = new Date().getSeconds();
  document.getElementById("spanHour").innerText=addZero(currentHour) +": " + addZero(currentMinute) +": " + addZero(currentSec);
}



function addZero(nb) {
  if (nb < 10) {
    return "0"+ nb;
  }
  return nb;
}



function ChangeTextColor() {
if (currentSec % 2===0){
    document.getElementById("spanHour").style.color="black";
} else {
  document.getElementById("spanHour").style.color="red";
  }
}



function toggleHour() {
if (document.getElementById("spanHour").style.visibility==="hidden"){
  document.getElementById("spanHour").style.visibility="visible";
} else {
  document.getElementById("spanHour").style.visibility="hidden";
}
}

function Bonjour() {

        if (currentHour < 6 ) { greeting = 'Au LIT !!';
}
        if (currentHour >= 6 && currentHour < 12) {greeting = 'Bonne matinée';
}
        if (currentHour >= 12 && currentHour < 17){ greeting = 'Bonne aprèm';
}
				if (currentHour >= 17 && currentHour < 21){ greeting = 'Bonne soirée';
}
        if (currentHour >=21) {greeting='Bonne nuit'}

				document.getElementById("greeting").innerText = greeting;

}
