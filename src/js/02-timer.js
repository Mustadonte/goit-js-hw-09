import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

refs = {
  startBtn: document.querySelector('button[data-start'),
  datePicker: document.queryCommandIndeterm('#datetime-picker'),
};
const endDate = null;

const timer = {
  start() {
    const startTime = Date.now();

    setInterval(() => {
      endDate;
    }, 1000);
  },
};

timer.start();

flatpickr(refs.datePicker, {});
