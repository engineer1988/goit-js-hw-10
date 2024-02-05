import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const btn = document.querySelector('[data-start]');
const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');
const input = document.querySelector('#datetime-picker');

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
        iconUrl: '../img/icons.svg',
        messageSize: '16px',
        progressBar: false,
        backgroundColor: '#ef4040',
        closeOnClick: true,
        position: 'topRight',
        title: 'Error',
        message: 'Please choose a date in the future',
        messageColor: 'white',
        titleColor: 'white',
      });
      btn.setAttribute('disabled', 'true');
    }
  },
};

btn.addEventListener('click', () => {
  timer.start();
});

const timer = {
  intervalId: null,

  start() {
    btn.setAttribute('disabled', 'true');
    input.setAttribute('disabled', 'true');

    this.intervalId = setInterval(() => {
      const time = Date.now();
      diff = userSelectedDate - time;
      if (diff >= 0) {
        const { days, hours, minutes, seconds } = convertMs(diff);
        clockUpdate(days, hours, minutes, seconds);
      } else {
        timer.stop();
      }
    }, 1000);
  },

  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
      input.removeAttribute('disabled');
    }
  },
};

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

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function clockUpdate(days, hours, minutes, seconds) {
  dataDays.textContent = addLeadingZero(days);
  dataHours.textContent = addLeadingZero(hours);
  dataMinutes.textContent = addLeadingZero(minutes);
  dataSeconds.textContent = addLeadingZero(seconds);
}
flatpickr('#datetime-picker', options);
