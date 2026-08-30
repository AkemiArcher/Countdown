const items = document.querySelectorAll<HTMLParagraphElement>(
  ".promo__timer-item > h4",
);

let countdownDate: number = new Date(2027, 11, 18, 10, 0, 0).getTime();

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
  console.log(values);
  items.forEach((item, index) => {
    const value = values[index];
    item.textContent = value !== undefined ? String(value) : "";
  });
}
getCountdownTime();
setInterval(() => {
  getCountdownTime();
}, 1000);
