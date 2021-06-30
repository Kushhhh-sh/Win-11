let start_icon = document.getElementsByClassName("start_icon")[0]
let start = document.getElementsByClassName("start")[0]

start_icon.addEventListener("click", ()=>{
    if(start.style.bottom == "50px"){
        start.style.bottom = "-655px"
    }
    else{
        start.style.bottom = "50px"
    }
})