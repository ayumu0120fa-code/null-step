const menuBtn = document.querySelector('.menu-btn');
const header = document.querySelector('.header');

menuBtn?.addEventListener('click', () => {
  const open = header.classList.toggle('menu-open');
  menuBtn.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.nav a, .footer-nav a').forEach(link => {
  link.addEventListener('click', () => header.classList.remove('menu-open'));
});

// Put your SUZURI shop URL here when ready.
const SUZURI_URL = '#';
const shopLink = document.getElementById('shopLink');
shopLink?.addEventListener('click', (e) => {
  if (SUZURI_URL === '#') {
    e.preventDefault();
    alert('SUZURIのショップURLをscript.jsのSUZURI_URLに入れると購入ページへ移動できます。');
  }
});
