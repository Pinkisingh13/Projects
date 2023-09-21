let hour = document.querySelector(".hour");
let min = document.querySelector(".min");
let sec = document.querySelector(".sec");
let check = document.querySelector(".dinRaat");



function showTime() {
    let time = new Date();
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();
    let dinRaat = "AM"
    if (h >= 12) {
       if (h>12) h-=12;
       dinRaat = "PM";
    } else {
        h = 12;
        dinRaat = "AM";
    }
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    
 hour.innerHTML = h + ":";
 min.innerHTML = m + ":" ;
 sec.innerHTML = s; 
 check.innerHTML = dinRaat;
}
setInterval(showTime,1000);