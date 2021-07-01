// ************************StartMenu JS************************
let start_icon = document.getElementsByClassName("start_icon")[0]
let start = document.getElementsByClassName("start")[0]

start_icon.addEventListener("click", () => {
    if (start.style.bottom == "50px") {
        start.style.bottom = "-655px"
    }
    else {
        start.style.bottom = "50px"
    }
})
// ************************StartMenu JS************************

// *************************TOOLTIP JS*************************
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})
// *************************TOOLTIP JS*************************

// **********************RESIZABLE IFRAME JS**********************
$(".resizable").draggable();
$(".resizable").resizable({
    handles: "n,s,w,e"
});
// **********************RESIZABLE IFRAME JS**********************