"use strict";
const items = document.querySelectorAll(".promo__timer-item > div");
const countdownElement = document.querySelector(".promo__timer");
let countdownDate = new Date(2027, 7, 30, 22, 56, 0).getTime();
function getCountdownTime() {
    const now = new Date().getTime();
    const distance = countdownDate - now;
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;
    let days = Math.floor(distance / oneDay);
    let hours = Math.floor((distance % oneDay) / oneHour);
    let minutes = Math.floor((distance % oneHour) / oneMinute);
    let seconds = Math.floor((distance % oneMinute) / 1000);
    const values = [days, hours, minutes, seconds];
    items.forEach((item, index) => {
        const value = values[index];
        item.textContent = value !== undefined ? String(value) : "";
    });
    if (distance < 0) {
        clearInterval(refreshing);
        if (countdownElement) {
            countdownElement.innerHTML = `<h4 class="promo__expired">Время вышло</h4>`;
        }
    }
}
let refreshing = setInterval(getCountdownTime, 1000);
getCountdownTime();
