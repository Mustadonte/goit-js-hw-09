import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import 'flatpickr/dist/themes/dark.css';

const refs = {
  startBtn: document.querySelector('button[data-start]'),
  datePicker: document.querySelector('#datetime-picker'),
  daysEl: document.querySelector('[data-days]'),
  hoursEl: document.querySelector('[data-hours]'),
  minutesEl: document.querySelector('[data-minutes]'),
  secondsEl: document.querySelector('[data-seconds]'),
};

const DELAY = 1000;
let delta = 0;
let finishDate = new Date();
refs.startBtn.disabled = true;
refs.startBtn.addEventListener('click', onStart);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: '',
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= Date.now()) {
      alert('Please choose a date in the future');
      refs.startBtn.disabled = true;
    } else {
      refs.startBtn.disabled = false;
      finishDate = selectedDates[0];
    }
  },
};

flatpickr(refs.datePicker, options);

function onStart() {
  refs.startBtn.disabled = true;
  const timerId = setInterval(() => {
    const startTime = Date.now();

    delta = finishDate.getTime() - startTime;
    if (delta <= 999) {
      clearInterval(timerId);
    }
    convertMs(delta);
    const { days, hours, minutes, seconds } = convertMs(delta);
    refs.daysEl.textContent = addLeadingZero(days);
    refs.hoursEl.textContent = addLeadingZero(hours);
    refs.minutesEl.textContent = addLeadingZero(minutes);
    refs.secondsEl.textContent = addLeadingZero(seconds);
  }, DELAY);
}

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
  return String(value).padStart(2, 0);
}
