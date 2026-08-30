const items = document.querySelectorAll<HTMLParagraphElement>(
  ".promo__timer-item > div",
);

const countdownElement =
  document.querySelector<HTMLDivElement>(".promo__timer");

let countdownDate: number = new Date(2027, 7, 30, 22, 56, 0).getTime();

function getCountdownTime() {
  const now: number = new Date().getTime();

  const distance: number = countdownDate - now;

  const oneDay: number = 24 * 60 * 60 * 1000;
  const oneHour: number = 60 * 60 * 1000;
  const oneMinute: number = 60 * 1000;

  let days: number = Math.floor(distance / oneDay);
  let hours: number = Math.floor((distance % oneDay) / oneHour);
  let minutes: number = Math.floor((distance % oneHour) / oneMinute);
  let seconds: number = Math.floor((distance % oneMinute) / 1000);

  const values: number[] = [days, hours, minutes, seconds];

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
