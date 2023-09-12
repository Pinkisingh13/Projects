let menu = document.querySelector('.fa-solid');
let ul = document.querySelector('.list');
let navLinks = document.querySelector('.nav-link ul')
document.addEventListener('DOMContentLoaded', function(){
    menu.addEventListener('click',function() {
        if (ul.style.left === '0%') {
            ul.style.left = '-100%';
        }else{
            ul.style.left='0';
        }
        ul.classList.toggle('active');
        navLinks.forEach((link,index) => {
            if (link.style.animation) {
                link.style.animation="";
            }else{
                link.style.animation= `navLinkFade 0.5s ease forwards ${index / 7}s`
            }
        });
    });
});