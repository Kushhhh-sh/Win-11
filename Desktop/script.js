// ************************StartMenu JS************************
let start_icon = document.getElementsByClassName("start_icon")[0];
let start = document.getElementsByClassName("start")[0];

start_icon.addEventListener("click", () => {
  if (start.style.bottom == "50px") {
    start.style.bottom = "-655px";
  } else {
    start.style.bottom = "50px";
  }
});
// ************************StartMenu JS************************

// *************************TOOLTIP JS*************************
var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});
// *************************TOOLTIP JS*************************

// **********************RESIZABLE IFRAME JS**********************
$(".resizable").draggable();
$(".resizable").resizable({
  handles: "n,s,w,e",
});
// **********************RESIZABLE IFRAME JS**********************

//********************IFRAME VISIBILITY JS********************
function openedge() {
  var edgeframe = document.getElementById("edgeframe");
  var tbedge = document.getElementById("tb-edge");

  if (edgeframe.style.display == "none") {
    edgeframe.style.display = "inline";
    tbedge.style.display = "inline";
  } else {
    edgeframe.style.display = "none";
    tbedge.style.display = "none";
  }
}

function opennote() {
  var noteframe = document.getElementById("noteframe");
  var tbnote = document.getElementById("tb-note");

  if (noteframe.style.display == "none") {
    noteframe.style.display = "inline";
    tbnote.style.display = "inline";
  } else {
    noteframe.style.display = "none";
    tbnote.style.display = "none";
  }
}

function openpaint() {
  var paintframe = document.getElementById("paintframe");
  var tbpaint = document.getElementById("tb-paint");

  if (paintframe.style.display == "none") {
    paintframe.style.display = "inline";
    tbpaint.style.display = "inline";
  } else {
    paintframe.style.display = "none";
    tbpaint.style.display = "none";
  }
}

function openword() {
  var wordframe = document.getElementById("wordframe");
  var tbword = document.getElementById("tb-word");

  if (wordframe.style.display == "none") {
    wordframe.style.display = "inline";
    tbword.style.display = "inline";
  } else {
    wordframe.style.display = "none";
    tbword.style.display = "none";
  }
}

function openexcel() {
  var excelframe = document.getElementById("excelframe");
  var tbexcel = document.getElementById("tb-excel");

  if (excelframe.style.display == "none") {
    excelframe.style.display = "inline";
    tbexcel.style.display = "inline";
  } else {
    excelframe.style.display = "none";
    tbexcel.style.display = "none";
  }
}

function openppt() {
  var pptframe = document.getElementById("pptframe");
  var tbppt = document.getElementById("tb-ppt");

  if (pptframe.style.display == "none") {
    pptframe.style.display = "inline";
    tbppt.style.display = "inline";
  } else {
    pptframe.style.display = "none";
    tbppt.style.display = "none";
  }
}

function opencalci() {
  var calciframe = document.getElementById("calciframe");
  var tbcalci = document.getElementById("tb-calci");

  if (calciframe.style.display == "none") {
    calciframe.style.display = "inline";
    tbcalci.style.display = "inline";
  } else {
    calciframe.style.display = "none";
    tbcalci.style.display = "none";
  }
}

function opencredit() {
  var creditframe = document.getElementById("creditframe");

  if (creditframe.style.display == "none") {
    creditframe.style.display = "inline";
  } else {
    creditframe.style.display = "none";
  }
}
//********************IFRAME VISIBILITY JS********************


//********************CALENDAR JS********************
//CALENDAR
//FOR CALENDAR POPUP
let popup_calendar = document.getElementsByClassName("calendar")[0];

function pop(){
  console.log("hello")
  if(popup_calendar.style.bottom == "-655px")
  {
    popup_calendar.style.bottom = "50px";
  }else{
    popup_calendar.style.bottom = "-655px";
  }
}

// DARK MODE TOGGLE
document.querySelector(".dark-mode-switch").onclick = () => {
  document.querySelector("div").classList.toggle("dark");
  document.querySelector("div").classList.toggle("light");
};

// CHECK LEAP YEAR
isLeapYear = (year) => {
  return (
    (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) ||
    (year % 100 === 0 && year % 400 === 0)
  );
};

getFebDays = (year) => {
  return isLeapYear(year) ? 29 : 28;
};

let calendar = document.querySelector(".calendar");

let month_picker = document.querySelector("#month-picker");

const month_names = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

month_picker.onclick = () => {
  month_list.classList.add("show");
};
// GENERATE CALENDAR

generateCalendar = (month, year) => {
  let calendar_days = document.querySelector(".calendar-days");
  calendar_days.innerHTML = "";
  let calendar_header_year = document.querySelector("#year");

  let days_of_month = [
    31,
    getFebDays(year),
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];

  let currDate = new Date();

  month_picker.innerHTML = month_names[month];
  calendar_header_year.innerHTML = year;

  let first_day = new Date(month, year, 1);

  for (let i = 0; i <= days_of_month[month] + first_day.getDay() - 1; i++) {
    let day = document.createElement("div");
    if (i >= first_day.getDay()) {
      day.classList.add("calendar-day-hover");
      day.innerHTML = i - first_day.getDay() + 1;
      day.innerHTML += `<span></span>
                            <span></span>
                            <span></span>
                            <span></span>`;
      if (
        i - first_day.getDay() + 1 === currDate.getDate() &&
        year === currDate.getFullYear() &&
        month === currDate.getMonth()
      ) {
        day.classList.add("curr-date");
      }
    }
    calendar_days.appendChild(day);
  }
};

let month_list = calendar.querySelector(".month-list");

month_names.forEach((e, index) => {
  let month = document.createElement("div");
  month.innerHTML = `<div>${e}</div>`;
  month.onclick = () => {
    month_list.classList.remove("show");
    curr_month.value = index;
    generateCalendar(curr_month.value, curr_year.value);
  };
  month_list.appendChild(month);
});

document.querySelector("#prev-year").onclick = () => {
  --curr_year.value;
  generateCalendar(curr_month.value, curr_year.value);
};

document.querySelector("#next-year").onclick = () => {
  ++curr_year.value;
  generateCalendar(curr_month.value, curr_year.value);
};

let currDate = new Date();

let curr_month = { value: currDate.getMonth() };
let curr_year = { value: currDate.getFullYear() };

generateCalendar(curr_month.value, curr_year.value);

function reset_month() {
  curr_month = { value: currDate.getMonth() };
  curr_year = { value: currDate.getFullYear() };
  generateCalendar(curr_month.value, curr_year.value);
}

// JAVASCRIPT FOR TIME
setInterval(() => {
  const time = document.querySelector("#time");
  const tbtime = document.querySelector("#taskbar_time")
  let date_time = new Date();
  let hours = date_time.getHours();
  let minutes = date_time.getMinutes();
  let seconds = date_time.getSeconds();
  //   let day_night = "AM";
  //   if (hours > 12) {
  //     day_night = "PM";
  //     hours = hours - 12;
  //   }
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  time.textContent = hours + ":" + minutes + ":" + seconds;
  tbtime.textContent = hours + ":" + minutes;

  //DATE
  let date = document.querySelector("#date");
  let tbdate = document.querySelector("#taskbar_date")

  let months = new Array();
  months[0] = "Jan";
  months[1] = "Feb";
  months[2] = "Mar";
  months[3] = "Apr";
  months[4] = "May";
  months[5] = "Jun";
  months[6] = "Jul";
  months[7] = "Aug";
  months[8] = "Sep";
  months[9] = "Oct";
  months[10] = "Nov";
  months[11] = "Dec";

  let date_no = date_time.getDate();
  let month_no = months[date_time.getMonth()];
  let year_no = date_time.getFullYear();

  date.textContent = date_no + " " + month_no + " " + year_no;
  tbdate.textContent = date_no + " " + month_no + " " + year_no;
});

//********************CALENDAR JS********************
