// ***********************VARIABLES***********************

let startScreen = document.querySelector("#start-screen");
let clockDiv = document.querySelector("#clock");
let dateDiv = document.querySelector("#date");
let datentime = document.querySelector("#date_and_time");
let logInScreen = document.querySelector("#login-screen");


// *********************DATE AND TIME*********************
function clock() {
  function addZero(i) {
    if (i < 10) {
      i = "0" + i;
      return i;
    } else {
      return i;
    }
  }
  let d = new Date();
  let h = addZero(d.getHours());
  let m = addZero(d.getMinutes());
  let s = addZero(d.getSeconds());

  clockDiv.innerText = `${h}:${m}`;
}
setInterval(clock, 1000);

let date = new Date();

let month_array = new Array();
month_array[0] = "January";
month_array[1] = "February";
month_array[2] = "March";
month_array[3] = "April";
month_array[4] = "May";
month_array[5] = "June";
month_array[6] = "July";
month_array[7] = "August";
month_array[8] = "September";
month_array[9] = "October";
month_array[10] = "November";
month_array[11] = "December";

let day_array = new Array();
day_array[0] = "Sunday";
day_array[1] = "Monday";
day_array[2] = "Tuesday";
day_array[3] = "Wednesday";
day_array[4] = "Thursday";
day_array[5] = "Friday";
day_array[6] = "Saturday";

let date_no = date.getDate();
let month = month_array[date.getMonth()];
let day = day_array[date.getDay()];

dateDiv.textContent = day + ", " + date_no + " " + month;

// *********************DATE AND TIME*********************

// *********************ONCLICK TRANSITION*********************

startScreen.addEventListener("click", showLogIn);
function showLogIn() {
  let tl = gsap.timeline();

  tl.to(datentime, 0.5, { y: -1000, opacity: 0 });
  tl.to(startScreen, 1, { scale: 1.1, ease: "power4.inOut" }, "-=.45");
  tl.to(logInScreen, 1, { opacity: 1, pointerEvents: "all" }, "-=.8");
}

// *********************ONCLICK TRANSITION*********************