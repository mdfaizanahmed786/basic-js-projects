console.log("making countdown app");

//Declaring variables

const days = document.querySelectorAll(".days")[0];
const hours = document.querySelectorAll(".hours")[0];
const minutes = document.querySelectorAll(".minutes")[0];
const seconds = document.querySelectorAll(".seconds")[0];
// setInterval method to run current date, hours, seconds and minutes.
// setInterval(() => {
//   let currDate = new Date();

//   seconds.textContent =
//     currDate.getSeconds() <= 9
//       ? "0" + currDate.getSeconds()
//       : currDate.getSeconds();
//   minutes.textContent =
//     currDate.getMinutes() <= 9
//       ? "0" + currDate.getMinutes()
//       : currDate.getMinutes();
//   hours.textContent =
//     currDate.getHours() <= 9 ? "0" + currDate.getHours() : currDate.getHours();
//   //   days.textContent =
//   //     currDate.getDay() <= 9
//   //       ? "0" + (currDate.getDay() + 1)
//   //       : currDate.getDay() + 1;

//   days.textContent =
//     currDate.getDate() <= 9 ? "0" + currDate.getDate() : currDate.getDate();
// }, 1000);

// It returns the milliseconds sice the specified date

console.log(
  Math.floor(
    (new Date("Jan 6, 2022 15:37:25").getTime() - new Date().getTime()) / 1000
  )
);

let futureDate = new Date("Jan 6, 2022 17:00:00").getTime();
setInterval(() => {
  let currDate = new Date().getTime();
  
  let diff = (futureDate - currDate) / 1000;
  console.log(Math.floor(diff))
  let secondsCount = Math.floor(diff % 60);
  let minuteCount = Math.floor((diff / 60) % 60);
  let hourCount = Math.floor((diff / 3600) % 24);
  let daysCount = Math.floor((diff / 86400));
  seconds.textContent=secondsCount <= 9 ? "0" + secondsCount : secondsCount;
  minutes.textContent=minuteCount <= 9 ? "0" + minuteCount : minuteCount;
  hours.textContent=hourCount <= 9 ? "0" + hourCount : hourCount;
  days.textContent=daysCount <= 9 ? "0" + daysCount : daysCount;

}, 1000);
