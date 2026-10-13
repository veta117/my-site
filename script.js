// Счётчик
let count = 0;
const counterEl = document.getElementById('counter');
const clickBtn = document.getElementById('clickBtn');

clickBtn.addEventListener('click', () => {
  count++;
  counterEl.textContent = count;
});

// Переключение темы
const themeBtn = document.getElementById('themeBtn');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});