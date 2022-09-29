function clickBox() {
    let box = document.getElementById('castimg');
    box.classList.add('castimg-active');
}
let box = document.getElementById('castimg');
box.addEventListener('mouseover', clickBox); 

function toggleNav() {
    let aside = document.getElementById('sidebar');
    aside.classList.toggle('sidebar--active');
}

let button = document.getElementById('navToggleButton');
button.addEventListener('click', toggleNav);
