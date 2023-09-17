
let bar = document.querySelector(".fa-bars-staggered");
let ulContainer = document.querySelector(".ul-container");
let close = document.querySelector(".fa-xmark");
let list = document.querySelector("ul");

// Creating a media query object
const mediaQuery = window.matchMedia("(max-width: 600px)");

// Function to handle the media query changes
function handleMediaQuery(event) {
  if (event.matches) {

    // Inside the media query
    bar.style.display = "block";
    ulContainer.style.display = "none";

    // Event listener for the bar icon to open the menu
    bar.addEventListener("click", function () {
      ulContainer.style.display = "block";
      close.style.display = "block";
      bar.style.display = "none";

      // Event listener for the close icon to close the menu
      close.addEventListener("click", function () {
        ulContainer.style.display = "none";
        bar.style.display = "block";
        close.style.display = "none";
      });
    });
  } else {

    // Outside the media query
    bar.style.display = "none";
    close.style.display = "none";
    ulContainer.style.display = "block";
  }
}

// Add an event listener for the media query
mediaQuery.addEventListener("change", handleMediaQuery);

// Initial call to set the initial icon visibility based on the viewport width
handleMediaQuery(mediaQuery);



