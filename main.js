// Menú hamburguesa (móvil)
document.getElementById('menu-btn').addEventListener('click',
  () => document.getElementById('menu').classList.toggle('open'));

// Botones "Copy" (página Downloads): copian el texto del <pre> indicado
document.querySelectorAll('[data-copy]').forEach(b => {
  b.addEventListener('click', async () => {
    const txt = document.getElementById(b.dataset.copy).innerText;
    try { await navigator.clipboard.writeText(txt); b.textContent = 'Copied!'; }
    catch (e) { b.textContent = 'Select & copy'; }
    setTimeout(() => b.textContent = 'Copy', 1500);
  });
});

// Formulario de contacto (página Community): validación y mensaje
const form = document.getElementById('contact-form');
if (form) form.addEventListener('submit', e => {
  e.preventDefault();
  const msg = document.getElementById('form-msg');
  if (!form.email.value.includes('@') || form.message.value.trim().length < 5) {
    msg.textContent = 'Please enter a valid email and a message.'; return;
  }
  msg.textContent = 'Thanks! Your message has been sent.'; form.reset();
});
