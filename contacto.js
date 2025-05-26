document.getElementById('formContacto').addEventListener('submit', function (e) {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const mensaje = document.getElementById('mensaje').value;

  console.log("Mensaje enviado:", { nombre, email, mensaje });

  document.getElementById('confirmacion').textContent =
    "¡Gracias por contactarnos! Te responderemos pronto.";

  document.getElementById('formContacto').reset();
});
