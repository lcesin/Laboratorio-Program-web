const colorInput = document.getElementById('pageColor');

document.addEventListener('DOMContentLoaded', () => {
  const savedColor = localStorage.getItem('main-background-color');
  if (savedColor) {
    document.documentElement.style.setProperty('--main-background-color', savedColor);
    colorInput.value = savedColor;
  }
});

colorInput.addEventListener('input', (e) => {
  const color = e.target.value;
  document.documentElement.style.setProperty('--main-background-color', color);
  localStorage.setItem('main-background-color', color);
});

document.addEventListener('DOMContentLoaded', () => {
  const savedColor = localStorage.getItem('main-background-color');
  if (savedColor) {
    document.documentElement.style.setProperty('--main-background-color', savedColor);
    const colorInput = document.getElementById('pageColor');
    if (colorInput) colorInput.value = savedColor;
  }
});