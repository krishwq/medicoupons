
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

// alart section
function copyCode1() {
    navigator.clipboard.writeText("SPO2");

    const alertBox = document.getElementById("customAlert");
    alertBox.classList.add("show");

    setTimeout(() => {
        alertBox.classList.remove("show");
    }, 2500);
}
function copyCode2() {
    navigator.clipboard.writeText("DRD84N5N");

    const alertBox = document.getElementById("customAlert");
    alertBox.classList.add("show");

    setTimeout(() => {
        alertBox.classList.remove("show");
    }, 2500);
}
