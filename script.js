const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (toggle && navLinks) {
  toggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

// Image popup / lightbox for project and training images
(function setupImageLightbox() {
  const images = document.querySelectorAll('.js-lightbox');
  if (!images.length) return;

  const overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.innerHTML = `
    <div class="lightbox-content" role="dialog" aria-modal="true" aria-label="Expanded image preview">
      <button class="lightbox-close" type="button" aria-label="Close image popup">&times;</button>
      <img src="" alt="Expanded portfolio image">
    </div>
  `;
  document.body.appendChild(overlay);

  const previewImage = overlay.querySelector('img');
  const closeButton = overlay.querySelector('.lightbox-close');

  function openLightbox(image) {
    previewImage.src = image.currentSrc || image.src;
    previewImage.alt = image.alt || 'Expanded portfolio image';
    overlay.classList.add('open');
    document.body.classList.add('no-scroll');
  }

  function closeLightbox() {
    overlay.classList.remove('open');
    document.body.classList.remove('no-scroll');
    previewImage.src = '';
  }

  images.forEach(image => {
    image.setAttribute('tabindex', '0');
    image.setAttribute('role', 'button');
    image.setAttribute('aria-label', `${image.alt || 'Portfolio image'} - open larger preview`);
    image.addEventListener('click', () => openLightbox(image));
    image.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openLightbox(image);
      }
    });
  });

  closeButton.addEventListener('click', closeLightbox);
  overlay.addEventListener('click', event => {
    if (event.target === overlay) closeLightbox();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && overlay.classList.contains('open')) closeLightbox();
  });
})();
