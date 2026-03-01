
  const offcanvasElement = document.getElementById('offcanvasNavbar');
  const offcanvas = bootstrap.Offcanvas.getOrCreateInstance(offcanvasElement);

  document.querySelectorAll('#offcanvasNavbar .nav-link:not(.dropdown-toggle)')
    .forEach(link => {
      link.addEventListener('click', () => {
        offcanvas.hide();   // ✅ Correct way to close
      });
    });
