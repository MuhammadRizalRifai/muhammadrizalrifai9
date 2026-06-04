const navToggle = document.getElementById("navToggle");
const siteNav = document.getElementById("siteNav");
const contactForm = document.getElementById("contactForm");
const formFeedback = document.getElementById("formFeedback");

navToggle.addEventListener("click", () => {
  siteNav.classList.toggle("open");
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = event.target.name.value.trim();
  const email = event.target.email.value.trim();
  const message = event.target.message.value.trim();

  if (!name || !email || !message) {
    formFeedback.textContent = "Mohon isi semua kolom terlebih dahulu.";
    return;
  }

  formFeedback.textContent = "Pesan berhasil dikirim. Terima kasih!";
  formFeedback.style.color = "#86efac";
  contactForm.reset();
});
