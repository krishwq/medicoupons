
  // for navbar section
  const offcanvasElement = document.getElementById('offcanvasNavbar');
  const offcanvas = bootstrap.Offcanvas.getOrCreateInstance(offcanvasElement);

  document.querySelectorAll('#offcanvasNavbar .nav-link:not(.dropdown-toggle)')
    .forEach(link => {
      link.addEventListener('click', () => {
        offcanvas.hide();   // ✅ Correct way to close
      });
    });

// for faq section 
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
    const button = item.querySelector(".faq-question");

    button.addEventListener("click", () => {
        item.classList.toggle("active");
    });
});
