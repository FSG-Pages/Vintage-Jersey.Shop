function show_menu(){
    let menu = document.getElementById("menu");
    let currentDisplay = window.getComputedStyle(menu).display;

    if (currentDisplay === "none") {
        menu.style.display = "block";
        menu.style.animation = "showMenu 0.3s forwards";
    } else {
        menu.style.animation = "hideMenu 0.3s forwards";
        setTimeout(() => {
            menu.style.display = "none";
        }, 300); 
    }
}
function close_menu(){
    let menu = document.getElementById("menu");
    let currentDisplay = window.getComputedStyle(menu).display;

    if (currentDisplay === "none") {
        menu.style.display = "block";
        menu.style.animation = "showMenu 0.3s forwards";
    } else {
        menu.style.animation = "hideMenu 0.3s forwards";
        setTimeout(() => {
            menu.style.display = "none";
        }, 300); 
    }
}

function search(){

}
