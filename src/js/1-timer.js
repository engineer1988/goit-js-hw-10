import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const btn = document.querySelector('[data-start]');
const days1 = document.querySelector('[data-days]');
const hours1 = document.querySelector('[data-hours]');
const minutes1 = document.querySelector('[data-minutes]');
const seconds1 = document.querySelector('[data-seconds]');

btn.setAttribute('disabled', 'true');

let userSelectedDate = 0;
let diff;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    const time = Date.now();
    if (time < selectedDate) {
      userSelectedDate = selectedDate.getTime();
      console.log(selectedDate.getTime());
      btn.removeAttribute('disabled');
    } else {
      iziToast.error({
        messageSize: '16px',
        progressBar: false,
        backgroundColor: '#ef4040',
        closeOnClick: true,
        position: 'topRight',
        title: 'Error',
        message: 'Please choose a date in the future',
      });
      btn.setAttribute('disabled', 'true');
    }
  },
};

btn.addEventListener('click', timer);

function timer() {
  btn.setAttribute('disabled', 'true');
  const time = Date.now();
  diff = userSelectedDate - time;
  const intervalId = setTimeout(convertMs, 1000, diff);
  const showTimer = obj => {
    days1.textContent = obj.days;
    hours1.textContent = '08';
    minutes1.textContent = obj.minutes;
    seconds1.textContent = obj.seconds;
  };
  showTimer();
}

flatpickr('#datetime-picker', options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// ===============================================================
// import flatpickr from 'flatpickr';
// import iziToast from 'izitoast';
// import 'izitoast/dist/css/iziToast.min.css';
// import 'flatpickr/dist/flatpickr.min.css';

// const startButton = document.querySelector('button');
// const inputData = document.querySelector('input#datetime-picker');
// const daysData = document.querySelector('[data-days]');
// const hoursData = document.querySelector('[data-hours]');
// const minutesData = document.querySelector('[data-minutes]');
// const secondsData = document.querySelector('[data-seconds]');
// const timer = document.querySelector('.timer');

// let userSelectedDate;

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     userSelectedDate = selectedDates[0];
//     if (userSelectedDate < Date.now()) {
//       iziToast.error({
//         message: 'Please choose a date in the future',
//         position: 'topRight',
//       });
//       startButton.disabled = true;
//     } else {
//       startButton.disabled = false;
//     }
//   },
// };

// let countdownInterval;

// function startTimer() {
//   countdownInterval = setInterval(updateTimer, 1000, userSelectedDate);
// }

// function updateTimer(endDate) {
//   const currentDate = new Date();
//   const remainingTime = endDate - currentDate;
//   const { days, hours, minutes, seconds } = convertMs(remainingTime);

//   if (!isNaN(days) && !isNaN(hours) && !isNaN(minutes) && !isNaN(seconds)) {
//     daysData.textContent = addLeadingZero(days);
//     hoursData.textContent = addLeadingZero(hours);
//     minutesData.textContent = addLeadingZero(minutes);
//     secondsData.textContent = addLeadingZero(seconds);
//   }

//   if (remainingTime <= 0) {
//     stopTimer();
//   }
// }

// startButton.addEventListener('click', () => {
//   if (userSelectedDate) {
//     startTimer();
//   }
// });

// function stopTimer() {
//   if (countdownInterval) {
//     clearInterval(countdownInterval);

//     daysData.textContent = '00';
//     hoursData.textContent = '00';
//     minutesData.textContent = '00';
//     secondsData.textContent = '00';

//     countdownInterval = null;
//   }
// }

// function addLeadingZero(value) {
//   return String(value).padStart(2, '0');
// }

// function convertMs(ms) {
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   const days = Math.floor(ms / day);
//   const hours = Math.floor((ms % day) / hour);
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   return { days, hours, minutes, seconds };
// }

// flatpickr(inputData, options);
// ===========================================================
// import flatpickr from 'flatpickr';
// import 'flatpickr/dist/flatpickr.min.css';
// // import Notiflix from 'notiflix';

// // Add refs. document.querySelector

// const refs = {
//   textInput: document.querySelector('#datetime-picker'),
//   startBtn: document.querySelector('button[data-start]'),
//   dataDays: document.querySelector('span[data-days]'),
//   dataHours: document.querySelector('span[data-hours]'),
//   dataMinutes: document.querySelector('span[data-minutes]'),
//   dataSeconds: document.querySelector('span[data-seconds]'),
// };

// let chooseDate = 0;

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     console.log(selectedDates[0]);
//     chooseDate = selectedDates[0].getTime();
//     const currentDate = Date.now();
//     const deltaTime = currentDate - chooseDate;
//     // allert window
//     if (deltaTime >= 0) {
//       Notiflix.Notify.failure('Please choose a date in the future');
//     } else {
//       refs.startBtn.disabled = false;
//     }
//   },
// };
// // flatpickr(selector, options);
// flatpickr(refs.textInput, options);
// refs.startBtn.disabled = true;
// refs.startBtn.addEventListener('click', () => {
//   timer.start();
// });

// const timer = {
//   intervalId: null,
//   isActive: false,
//   start() {
//     if (this.isActive) {
//       return;
//     }
//     this.isActive = true;
//     refs.textInput.disabled = true;
//     refs.startBtn.disabled = true;
//     this.intervalId = setInterval(() => {
//       const dateNow = Date.now();
//       const delta = chooseDate - dateNow;
//       const { days, hours, minutes, seconds } = convertMs(delta);
//       if (delta <= 0) {
//         timer.stop();
//       }
//       clockUpdate(days, hours, minutes, seconds);
//     }, 1000);
//   },
//   stop() {
//     this.isActive = false;
//     refs.textInput.disabled = false;
//     refs.startBtn.disabled = false;
//     clearInterval(this.intervalId);
//   },
// };

// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days = Math.floor(ms / day);
//   // Remaining hours
//   const hours = Math.floor((ms % day) / hour);
//   // Remaining minutes
//   const minutes = Math.floor((ms % hour) / minute);
//   // Remaining seconds
//   const seconds = Math.floor((ms % minute) / second);

//   return { days, hours, minutes, seconds };
// }

// function addLeadingZero(value) {
//   return String(value).padStart(2, '0');
// }
// function clockUpdate(days, hours, minutes, seconds) {
//   refs.dataDays.textContent = addLeadingZero(days);
//   refs.dataHours.textContent = addLeadingZero(hours);
//   refs.dataMinutes.textContent = addLeadingZero(minutes);
//   refs.dataSeconds.textContent = addLeadingZero(seconds);
// }
