const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");
const videoBtn = document.getElementById("videoBtn");
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (menuBtn && mobileNav) {
  menuBtn.addEventListener("click", () => {
    mobileNav.classList.toggle("show");
  });

  mobileNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("show");
    });
  });
}

if (videoBtn) {
  videoBtn.addEventListener("click", () => {
    window.location.href = "https://www.youtube.com/watch?v=qfJKBOENFkM";
  });
}

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      formMessage.textContent = "Popuni sva polja.";
      return;
    }

    formMessage.textContent = "Poruka je spremna. Formu možemo kasnije povezati sa pravim email slanjem.";
    contactForm.reset();
  });
}