const colorInput = document.getElementById('pageColor');
if (colorInput) {
  colorInput.addEventListener('input', (e) => {
    const color = e.target.value;
    document.documentElement.style.setProperty('--main-background-color', color);
    localStorage.setItem('main-background-color', color);
  });
}