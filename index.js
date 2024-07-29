const day = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const container = document.getElementById("countdown");

let currentyear = 2023;
let newyear = currentyear+1;
let newyeartime = new Date('October 26 2024 00:00:00');

function update(){
    let currentdate = new Date();
    let difference = newyeartime - currentdate ;
     let d = Math.floor(difference/1000/60/60/24);
     let h = Math.floor(difference/1000/60/60)%24;
     let m = Math.floor(difference/1000/60)%60;
     let s = Math.floor(difference/1000)%60;

     days.innerHTML =d <10 ? "0"+d : d ;
     hours.innerHTML = h <10 ? "0"+h : h;
     minutes.innerHTML = m <10 ? "0"+m : m;
     seconds.innerHTML = s <10 ? "0"+s : s;
}
 setInterval(update , 1000)