import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

function createPromise(event) {
  event.preventDefault();
  const delay = form.delay.value;
  const state = form.state.value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  promise
    .then(delay =>
      iziToast.success({
        backgroundColor: 'rgb(89, 161, 13)',
        titleSize: '16px',
        titleColor: 'rgb(255, 255, 255)',
        messageColor: 'rgb(255, 255, 255)',
        title: 'OK',
        position: 'topRight',
        message: `✅ Fulfilled promise in ${delay}ms`,
      })
    )
    .catch(delay =>
      iziToast.error({
        backgroundColor: 'rgb(239, 64, 64)',
        titleSize: '16px',
        titleColor: 'rgb(255, 255, 255)',
        messageColor: 'rgb(255, 255, 255)',

        title: 'Error',
        position: 'topRight',
        message: `❌Rejected promise in ${delay}ms`,
      })
    );
}
form.addEventListener('submit', createPromise);
form.addEventListener('submit', () => {
  form.reset();
});
