const menu = document.getElementById("nav-menu")
const nav_list = document.getElementById("nav-list")
const empty_space = document.getElementById("empty-space")
let show_navlist=false;
function menuInteract(){
    if(show_navlist){
        show_navlist=false;
        nav_list.classList.add("hide-nav")
        nav_list.classList.remove("show-nav")
        empty_space.style.height="40px";
    }else{
        show_navlist=true;
        nav_list.classList.remove("hide-nav")
        nav_list.classList.add("show-nav")
        empty_space.style.height="170px";
    }
}
menu.addEventListener("click", menuInteract)