//TEST 12/6/2023

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-menu');

if(menu != null) {
    menu.addEventListener('click', function() {
        menu.classList.toggle('is-active');
        menuLinks.classList.toggle('active');
        console.log("Test");
    })  
} else {
    console.log("Menu null")
}

