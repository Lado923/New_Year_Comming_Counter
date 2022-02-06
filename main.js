const daysEl = document.getElementById('element-1');
const hoursEl = document.getElementById('element-2');
const minutesEl = document.getElementById('element-3');
const secondsEl = document.getElementById('element-4');



function countdownNewYear () {
    const currentTime = new Date();
    const newYear = new Date('1 Jan 2023');
    const differense = Math.floor((newYear - currentTime)/1000);
    
    const days = Math.floor(differense / 60 / 60 / 24);
    const hours = Math.floor(differense / 60 / 60 % 24);
    const minutes = Math.floor(differense / 60 % 60);
    const seconds = Math.floor(differense % 60);

    daysEl.innerHTML = correctionTime(days);
    hoursEl.innerHTML = correctionTime(hours);
    minutesEl.innerHTML = correctionTime(minutes);
    secondsEl.innerHTML = correctionTime(seconds);
}

countdownNewYear();
setInterval(countdownNewYear, 1000);


function correctionTime(time) {
    return time < 10 ? `0${time}` : time
}