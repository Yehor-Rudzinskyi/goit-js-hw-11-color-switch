import './styles.css';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
    startBtn: document.querySelector('button[data-action="start"]'),
    stopBtn: document.querySelector('button[data-action="stop"]'),
    body: document.querySelector('body'),
}

let intervalId = null;
let isActive = false;
refs.startBtn.addEventListener('click', () => {
    if (isActive) {
        return;
    }
    isActive = true;
     intervalId = setInterval(() => {
        refs.body.style.backgroundColor = colors[`${randomIntegerFromInterval(0,5)}`];
    }, 1000)
});


refs.stopBtn.addEventListener('click', () => {
    isActive = false;
    clearInterval(intervalId)
    refs.body.style.backgroundColor = '#FFFFFF';
});

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
