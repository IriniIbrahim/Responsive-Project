function clickBox() {
    let box = document.getElementById('castimg');
    box.classList.add('castimg-active');
}
let box = document.getElementById('castimg');
box.addEventListener('mouseover', clickBox); 