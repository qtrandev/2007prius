(function () {
  var btn = document.querySelector('.hamburger');
  var header = document.querySelector('header');
  if (!btn) return;

  function close() {
    header.classList.remove('nav-open');
    btn.setAttribute('aria-expanded', 'false');
    btn.textContent = '☰';
  }

  btn.addEventListener('click', function (e) {
    e.stopPropagation();
    var open = header.classList.toggle('nav-open');
    btn.setAttribute('aria-expanded', String(open));
    btn.textContent = open ? '✕' : '☰';
  });

  document.addEventListener('click', function (e) {
    if (!header.contains(e.target)) close();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') close();
  });

  document.querySelectorAll('nav ul a').forEach(function (a) {
    a.addEventListener('click', close);
  });
}());
