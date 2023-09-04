const btn = document.querySelector('.change-color');
const nameColor = document.querySelector('.color');

btn.addEventListener('click', onClick);

function onClick() {
  document.body.style.backgroundColor = nameColor.textContent = getRandomHexColor();
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
