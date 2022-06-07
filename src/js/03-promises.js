import Notiflix from 'notiflix';
import '../css/common.css';

const refs = {
  form: document.querySelector('.form'),
  submitBtn: document.querySelector('button'),
};

refs.form.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  refs.submitBtn.disabled = true;

  const {
    elements: { delay, step, amount },
  } = e.target;
  let delayValue = Number(delay.value);
  let stepValue = Number(step.value);
  let amountValue = Number(amount.value);
  let position = 1;

  setTimeout(() => {
    createPromise(position, delayValue)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
      });

    intervalId = setInterval(() => {
      delayValue += stepValue;
      position += 1;
      if (position > amountValue) {
        clearInterval(intervalId);
        refs.submitBtn.disabled = false;
        return;
      }
      createPromise(position, delayValue)
        .then(({ position, delay }) => {
          Notiflix.Notify.success(
            `Fulfilled promise ${position} in ${delay}ms`
          );
        })
        .catch(({ position, delay }) => {
          Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
        });
    }, stepValue);
  }, delayValue);
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      resolve({ position, delay });
    } else {
      reject({ position, delay });
    }
  });
}
