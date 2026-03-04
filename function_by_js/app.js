
// for navbar section
const offcanvasElement = document.getElementById('offcanvasNavbar');
const offcanvas = bootstrap.Offcanvas.getOrCreateInstance(offcanvasElement);

document.querySelectorAll('#offcanvasNavbar .nav-link:not(.dropdown-toggle)')
.forEach(link => {

  link.addEventListener('click', function(e) {

    const target = this.getAttribute("href");

    if(target.startsWith("#")){
      e.preventDefault(); // stop instant scroll

      offcanvas.hide(); // close menu

      setTimeout(() => {
        document.querySelector(target).scrollIntoView({
          behavior: "smooth"
        });
      }, 300); // wait for offcanvas to close
    }

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
function copyCode3() {
    navigator.clipboard.writeText("SAVE10");

    const alertBox = document.getElementById("customAlert");
    alertBox.classList.add("show");

    setTimeout(() => {
        alertBox.classList.remove("show");
    }, 2500);
}
