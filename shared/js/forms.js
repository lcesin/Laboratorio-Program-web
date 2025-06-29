document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', async function(e) {
      e.preventDefault();

      const formData = new FormData(form);
      const data = {};
      formData.forEach((value, key) => data[key] = value);

      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });

        if (response.ok) {
          const json = await response.json();
          localStorage.setItem('lastFormResponse', JSON.stringify(json));
          alert('¡Formulario enviado y guardado en localStorage!');
        } else {
          alert('Error en la petición');
        }
      } catch (err) {
        alert('Error de red');
      }
    });
  });
});