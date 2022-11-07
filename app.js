const currentYear =  new Date().getFullYear();

const date = new Date(`January 1  ${currentYear + 1}`);







const days = document.querySelector('.days');
const hours = document.querySelector('.hours');
const munites = document.querySelector('.munites');
const seconds = document.querySelector('.seconds');





const check  =  function(){
    const currentTime = new Date();
    const diff = date -  currentTime;
    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;


    days.innerHTML = d;
    hours.innerHTML = h < 10 ? "0" + h : h;
    munites.innerHTML = m < 10 ? "0" + m : m;
    seconds.innerHTML = s < 10 ? '0' + s : s
}


setInterval(check, 1000);