let taskbar = document.getElementsByClassName("taskbar")[0]
let start = document.getElementsByClassName("start")[0]

taskbar.addEventListener("click", ()=>{
    if(start.style.bottom == "50px"){
        start.style.bottom = "-655px"
    }
    else{
        start.style.bottom = "50px"
    }
})