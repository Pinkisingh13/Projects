
let active = document.querySelector(".active");
let bar = document.querySelector(".fa-bars-staggered");
let close = document.querySelector(".fa-xmark");
let list = document.querySelector(".list");
let ulContainer = document.querySelector(".ul-container")



 bar.addEventListener("click", function () {
    if (ulContainer.style.display == "none") {
        ulContainer.style.display ="block";
        ulContainer.classList.toggle("active");
        bar.style.display="none";
        close.style.display ="block";
    }else{
        ulContainer.style.display ="none";
        bar.style.display="block";
        close.style.display ="none";
    }
})

close.addEventListener("click", function () {
    if (ulContainer.style.display == "block") {
        ulContainer.style.display ="none";
        ulContainer.classList.toggle("active");
        bar.style.display="block";
        close.style.display ="none";
    }else{
        ulContainer.style.display ="block";
        bar.style.display="none";
        close.style.display ="block";
    }
})
// document.addEventListener("DOMContentLoaded", function () {
//     menu.addEventListener("click", function () {

    //    navBox.classList.toggle("active");
      

    //   window.onscroll = () => {
    //     scroll();
    //   };
    //   function scroll() {
    //     if (ul.classList.toggle("active")) {
    //       ul.classList.remove("active");
    //     }
  
    //     if (
    //       document.body.scrollTop > 20 ||
    //       document.documentElement.scrollTop > 20
    //     ) {
    //       navbar.style.top = "-60%";
    //     } else {
    //       navbar.style.top = "0%";
    //     }
    //   }
//     });
//   });