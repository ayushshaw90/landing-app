const menu = document.getElementById("nav-menu")
const nav_list = document.getElementById("nav-list")
let show_navlist=false;
function menuInteract(){
    if(show_navlist){
        show_navlist=false;
        nav_list.classList.add("hide-nav")
        nav_list.classList.remove("show-nav")
    }else{
        show_navlist=true;
        nav_list.classList.remove("hide-nav")
        nav_list.classList.add("show-nav")
    }
}
menu.addEventListener("click", menuInteract)