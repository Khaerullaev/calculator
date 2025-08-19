let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}


function updateTemperature() {
  const celsiusChecked = document.getElementById("celsius").checked;
  const input = document.getElementById("tempInput").value;
  const tempValue = parseFloat(input) || Math.floor(Math.random() * 100);
  const display = document.getElementById("temperature");

  let result = 0;
  let unit = "";

  if (celsiusChecked) {
    result = tempValue;
    unit = "°C";
  } else {
    result = (tempValue * 9) / 5 + 32;
    unit = "°F";
  }

  display.textContent = `${Math.round(result)}${unit}`;
}


let timer;
let seconds = 0;

function updateTimerDisplay() {
  const min = String(Math.floor(seconds / 60)).padStart(2, '0');
  const sec = String(seconds % 60).padStart(2, '0');
  document.getElementById('time').textContent = `${min}:${sec}`;
}

function start() {
  if (!timer) {
    timer = setInterval(() => {
      seconds++;
      updateTimerDisplay();
    }, 1000);
  }
}

function stop() {
  clearInterval(timer);
  timer = null;
}

function reset() {
  clearInterval(timer);
  timer = null;
  seconds = 0;
  updateTimerDisplay();
}