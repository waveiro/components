function formatNumber(number) {
  return `0${number}`.slice(-2);
}

function calculateRemainingTime(endDate) {
  const total = Date.parse(endDate) - new Date().getTime();

  if (total <= 0) {
    return null;
  }

  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const seconds = Math.floor((total / 1000) % 60);

  return {
    total,
    days: formatNumber(days),
    hours: formatNumber(hours),
    minutes: formatNumber(minutes),
    seconds: formatNumber(seconds),
  };
}

function initClock(endDate) {
  let intervalId;
  const daysDiv = document.querySelector(".days");
  const hoursDiv = document.querySelector(".hours");
  const minutesDiv = document.querySelector(".minutes");
  const secondsDiv = document.querySelector(".seconds");

  intervalId = setInterval(() => {
    const remainingTime = calculateRemainingTime(endDate);

    if (remainingTime == null) {
      clearInterval(intervalId);
      return;
    }

    const { days, hours, minutes, seconds } = remainingTime;

    daysDiv.textContent = days;
    hoursDiv.textContent = hours;
    minutesDiv.textContent = minutes;
    secondsDiv.textContent = seconds;
  }, 1000);
}

window.addEventListener("DOMContentLoaded", () => {
  initClock(
    "Sun Dec 25 2022 00:00:00 GMT+0100 (Central European Standard Time)"
  );
});
