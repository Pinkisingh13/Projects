
let menu = document.querySelector('.fa-solid');
let ul = document.querySelector('.list');
let nav = document.querySelector('.nav-link');
let active = document.querySelector('.active');
let navbar = document.querySelector('.navbar');

document.addEventListener('DOMContentLoaded', function(){
    menu.addEventListener('click',function() {
        ul.classList.toggle('active');

        window.onscroll=()=>{
            scroll();
        }
        function scroll() {
            if (ul.classList.toggle('active')) {
                ul.classList.remove('active');
            }

            if (document.body.scrollTop > 20 ||
                document.documentElement.scrollTop > 20) {
                navbar.style.top = "-60%";
            } else {
                navbar.style.top = "0%";
            }
        }
    });
});


window.onscroll =()=>{
    scroll2();
}
function scroll2() {
    if (document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20) {
        navbar.style.top = "-60%";
    } else {
        navbar.style.top = "0%";
    }
}