let menuIcon = document.querySelector(".container");
let sidebar = document.querySelector(".sidebar");

menuIcon.onclick = function(){
	sidebar.classList.toggle("small-sidebar");
}

function play(idPlayer, control) {
	let player = document.querySelector('#audioPlayer');
	player.play();
}
// JavaScript code
function search_nude() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('image-card');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}