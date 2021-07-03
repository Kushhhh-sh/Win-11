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
