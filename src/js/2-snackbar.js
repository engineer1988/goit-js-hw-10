import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
const btn = document.querySelector('.form');

// let delay;
// let state;

// const inputDelay = document.querySelector('.input');
// inputDelay.addEventListener('change', event => {
//   delay = event.currentTarget.value;
//   console.log(typeof delay);
// });

// const fieldsetState = document.querySelector('fieldset');
// fieldsetState.addEventListener('change', event => {
//   state = event.target.value;
//   console.log(state);
// });

function createPromise(event) {
  event.preventDefault();
  const delay = btn.delay.value;
  const state = btn.state.value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  //   const promise = new Promise((resolve, reject) => {
  //     if (state === 'fulfilled') {
  //       setTimeout(() => resolve(delay), delay);
  //     } else if (state === 'rejected') {
  //       setTimeout(() => reject(delay), delay);
  //     }
  //   });

  promise
    .then(delay =>
      iziToast.success({
        position: 'topRight',
        message: `✅ Fulfilled promise in ${delay}ms`,
      })
    )
    .catch(delay =>
      iziToast.error({
        position: 'topRight',
        message: `❌Rejected promise in ${delay}ms`,
      })
    );
}
btn.addEventListener('submit', createPromise);
// ==========================================
// import iziToast from 'izitoast';
// import 'izitoast/dist/css/iziToast.min.css';

// const form = document.querySelector('.form');

// function createPromise(event) {
//   event.preventDefault();
//   const delay = form.delay.value;
//   const state = form.state.value;

//   const promise = new Promise((resolve, reject) => {
//     if (state === 'fulfilled') {
//       setTimeout(() => resolve(delay), delay);
//     } else if (state === 'rejected') {
//       setTimeout(() => reject(delay), delay);
//     }
//   });

//   promise
//     .then(delay => {
//       iziToast.success({
//         message: `✅ Fulfilled promise in ${delay}ms`,
//         position: 'bottomCenter',
//       });
//     })
//     .catch(delay => {
//       iziToast.error({
//         message: `❌Rejected promise in ${delay}ms`,
//         position: 'bottomCenter',
//       });
//     });
// }

// form.addEventListener('submit', createPromise);
