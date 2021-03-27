function redir(page){
    window.location.href = page;
}


var dropdown = document.querySelector("nav .dropdown");
var button = document.querySelector("nav .menu");
dropdown.style.display = "none";
function drop(){
    if (dropdown.style.display === "none"){
        dropdown.style.display = "grid";
    } else {
        dropdown.style.display = "none";
    }
}