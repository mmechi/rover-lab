(function () {
  var overlay = document.createElement('div');
  overlay.style.cssText = [
    'display:none',
    'position:fixed',
    'inset:0',
    'background:rgba(0,0,0,0.88)',
    'z-index:9999',
    'cursor:zoom-out',
    'align-items:center',
    'justify-content:center',
    'padding:2rem',
    'box-sizing:border-box'
  ].join(';');

  var img = document.createElement('img');
  img.style.cssText = [
    'width:100%',
    'height:100%',
    'object-fit:contain',
    'border-radius:6px',
    'box-shadow:0 0 60px rgba(0,0,0,0.8)',
    'pointer-events:none'
  ].join(';');

  overlay.appendChild(img);
  document.body.appendChild(overlay);

  function open(src, alt) {
    img.src = src;
    img.alt = alt || '';
    overlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }

  function close() {
    overlay.style.display = 'none';
    img.src = '';
    document.body.style.overflow = '';
  }

  overlay.addEventListener('click', close);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') close();
  });

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.fig-wrap img').forEach(function (el) {
      el.style.cursor = 'zoom-in';
      el.addEventListener('click', function () {
        open(el.src, el.alt);
      });
    });
  });
})();
