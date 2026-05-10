const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
const contactForm = document.getElementById("contactForm");
const formMsg = document.getElementById("formMsg");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("show");

  if (menu.classList.contains("show")) {
    menuBtn.textContent = "×";
  } else {
    menuBtn.textContent = "☰";
  }
});

document.querySelectorAll(".menu a").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("show");
    menuBtn.textContent = "☰";
  });
});

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  formMsg.textContent = "Poruka je spremna. Kasnije možemo povezati formu sa pravim email slanjem.";
  contactForm.reset();
});
