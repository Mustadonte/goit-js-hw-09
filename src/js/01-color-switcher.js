const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};
const DELAY = 1000;
let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

refs.startBtn.addEventListener('click', onStart);
refs.stopBtn.addEventListener('click', onStop);

function onStart(e) {
  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, DELAY);
  e.target.disabled = true;
}

function onStop() {
  clearInterval(timerId);
  refs.startBtn.disabled = false;
}
