// HAMBURGER MENU
let open = document.querySelector(".fa-bars-staggered");
let close = document.querySelector(".fa-xmark");
let ulContainer = document.querySelector(".ul-container");
let loader = document.querySelector(".one");

// Media Query
let mediaQuery = window.matchMedia("(max-width: 769px)");
function handleMediaQuery(e) {
  if (e.matches) {
    // gsap.from("nav" ,{
    //     y: -300,
    //     duration:1,
    //  });
    //  gsap.from(".section-1 img",{
    //     x: 1200,
    //     duration:2,
    // });
    // gsap.from(".section-1 p",{
    //     x: -600,
    //     duration:2,
    // });
    // gsap.from("nav h2",{
    //     y: -200,
    // })

    loader.style.display = "none";

    // Inside the media query
    ulContainer.style.display = "none";
    open.style.display = "block";
    // Event listener for the bar icon to open the menu
    open.addEventListener("click", () => {
      ulContainer.style.display = "block";
      gsap.from("nav .ul-container", {
        y: -600,
      });
      close.style.display = "block";
      open.style.display = "none";
    });

    // Event listener for the bar icon to open the menu
    close.addEventListener("click", () => {
      ulContainer.style.display = "none";
      open.style.display = "block";
      close.style.display = "none";
    });
  } else {
    open.style.display = "none";
    close.style.display = "none";
    ulContainer.style.display = "block";
  }
}
mediaQuery.addEventListener("change", handleMediaQuery);
handleMediaQuery(mediaQuery);

// ANIMATION USING GSAP

let mediaQuery2 = window.matchMedia("(min-width: 770px)");
function anime(e) {
  if (e.matches) {
       gsap.to('.one', {
          y: -900,
          ease:Expo.easeOut,
          duration:2,
          delay: 6,
       })
       gsap.to('.highlight',{
        x:1300,
        duration:2,
        delay: 4,
       })
    gsap.from(".head-para-skill-name, .all-skill-name-box, .skill-name", {
        opacity: 0,
        duration: 2,
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".head-para-skill-name",
          scroller: "body",
          start: "top 100%",
          end: "top 130%",
        },
      });

    const id = setInterval(() => {
      gsap.from("nav li", {
        y: -300,
        stagger: 0.3,
        duration: 1,
      });
      gsap.from(".section-1 img", {
        x: 1200,
        duration: 2.3,
      });
      gsap.from(".section-1 p", {
        x: -600,
        duration: 2.3,
        stagger: 0.3,
      });
      gsap.from("nav h2", {
        y: -200,
      });
      clearInterval(id);
    }, 5000);
  }
}
mediaQuery2.addEventListener("change", anime);
anime(mediaQuery2);
