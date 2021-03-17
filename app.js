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



function popup(main, sub){
    document.getElementById('myModal').style.display = 'grid';
    var h1 = document.getElementById('maintext');
    var h3 = document.getElementById('subtext');

    h1.innerHTML = main;
    h3.innerHTML = sub;
}


document.getElementById('close').addEventListener('click', function(){
    document.getElementById('myModal').style.display = 'none';
});


