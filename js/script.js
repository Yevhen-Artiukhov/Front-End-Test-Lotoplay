// Реалізовано з використанням AI: ChatGPT

// ===== МОДАЛКА =====
const modalBackdrop = document.querySelector("[data-modal]");
const modalTitle = modalBackdrop.querySelector(".modal-title");
const modalEventInput = modalBackdrop.querySelector("#modalEvent");
const ticketForm = document.getElementById("ticketForm");
const ticketSuccess = document.getElementById("ticketSuccess");

const openModalBtns = document.querySelectorAll("[data-modal-open]");
const closeModalBtns = modalBackdrop.querySelectorAll("[data-modal-close]");

function openModal(title) {
  modalBackdrop.classList.add("is-open");
  modalTitle.textContent = title || "Замовити квиток";
  modalEventInput.value = title || "";
  ticketForm.reset();
  ticketSuccess.classList.remove("visible");
}

function closeModal() {
  modalBackdrop.classList.remove("is-open");
  ticketForm.reset();
  ticketSuccess.classList.remove("visible");
}

openModalBtns.forEach(btn =>
  btn.addEventListener("click", () => {
    openModal(btn.dataset.modalTitle);
  })
);

closeModalBtns.forEach(btn =>
  btn.addEventListener("click", closeModal)
);

modalBackdrop.addEventListener("click", e => {
  if (e.target === modalBackdrop) closeModal();
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeModal();
});

// ===== ВАЛІДАЦІЯ ФОРМИ У МОДАЛЦІ =====
ticketForm.addEventListener("submit", e => {
  e.preventDefault();

  if (!ticketForm.checkValidity()) {
    ticketForm.reportValidity();
    return;
  }

  ticketSuccess.classList.add("visible");
});

// ===== MOBILE MENU =====
const burgerBtn = document.querySelector("[data-menu-open]");
const mobileMenu = document.querySelector("[data-menu]");
const mobileMenuClose = document.querySelector("[data-menu-close]");

if (burgerBtn) {
  burgerBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("is-open");
  });

  mobileMenuClose.addEventListener("click", () => {
    mobileMenu.classList.remove("is-open");
  });

  mobileMenu.querySelectorAll(".mobile-menu-link").forEach(link =>
    link.addEventListener("click", () =>
      mobileMenu.classList.remove("is-open")
    )
  );
}

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    const id = link.getAttribute("href").slice(1);
    const target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// ===== ГОЛОВНА ФОРМА → GET =====
const mainForm = document.getElementById("mainForm");
mainForm.addEventListener("submit", e => {
  if (!mainForm.checkValidity()) {
    e.preventDefault();
    mainForm.reportValidity();
  }
});
