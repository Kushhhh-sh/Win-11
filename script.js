let icon = document.getElementsByClassName("icon")[0]
let start = document.getElementsByClassName("start")[0]

icon.addEventListener("click", ()=>{
    if(start.style.bottom == "50px"){
        start.style.bottom = "-655px"
    }
    else{
        start.style.bottom = "50px"
    }
})