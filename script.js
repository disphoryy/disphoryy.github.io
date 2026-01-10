const scrollBtn = document.getElementById("scrollToTop");

// Показуємо стрілку при прокрутці
window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    scrollBtn.style.display = "flex";
    scrollBtn.style.opacity = "1";
  } else {
    scrollBtn.style.opacity = "0";
    setTimeout(() => {
      if (window.scrollY < 400) scrollBtn.style.display = "none";
    }, 300);
  }
});

// Дуже плавне повернення вгору
scrollBtn.addEventListener("click", () => {
  const scrollDuration = 800; // тривалість у мс (чим більше — тим плавніше)
  const scrollStep = -window.scrollY / (scrollDuration / 16);

  const smoothScroll = () => {
    if (window.scrollY !== 0) {
      window.scrollBy(0, scrollStep);
      requestAnimationFrame(smoothScroll);
    }
  };
  requestAnimationFrame(smoothScroll);
});

// Анімація появи карток при скролі
const cards = document.querySelectorAll(".service-card");

const revealCards = () => {
  const triggerBottom = window.innerHeight * 0.85;
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < triggerBottom) {
      card.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", revealCards);
revealCards();

// Ефект друкарської машинки
const text = "Innenrenovierung mit Präzision und Stil";
let i = 0;
const speed = 80; // швидкість друку

function typeWriter() {
  if (i < text.length) {
    document.getElementById("typed-text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.addEventListener("load", typeWriter);

// Плавна поява футера
const footer = document.querySelector(".footer");

const showFooter = () => {
  const footerTop = footer.getBoundingClientRect().top;
  if (footerTop < window.innerHeight * 0.9) {
    footer.classList.add("visible");
  }
};

window.addEventListener("scroll", showFooter);
showFooter();

// Приховування хедера при прокрутці вниз і показ при прокрутці вгору
let lastScrollY = window.scrollY;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;

  if (currentScroll > lastScrollY + 10 && currentScroll > 120) {
    header.classList.add("hide");
  } else if (currentScroll < lastScrollY - 10) {
    header.classList.remove("hide");
  }

  lastScrollY = currentScroll;
});

// Плавна прокрутка до секцій "Наші послуги" та "Контакт"
const toServices = document.getElementById("to-services");
if (toServices) {
  toServices.addEventListener("click", () => {
    document.querySelector(".services").scrollIntoView({ behavior: "smooth" });
  });
}

const toContact = document.getElementById("to-contact");
if (toContact) {
  toContact.addEventListener("click", () => {
    document.querySelector(".contact-section").scrollIntoView({ behavior: "smooth" });
  });
}

// FAQ Toggle with Icon Animation
document.querySelectorAll(".faq-title").forEach(button => {
  button.addEventListener("click", () => {
    const faqItem = button.parentElement;
    faqItem.classList.toggle("active");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const dropdownBtn = document.querySelector(".dropbtn");
  const dropdownContent = document.querySelector(".dropdown-content");

  dropdownBtn.addEventListener("click", (e) => {
    e.preventDefault();
    dropdownContent.classList.toggle("show");
  });

  // Закриває меню при кліку поза ним
  document.addEventListener("click", (e) => {
    if (!dropdownBtn.contains(e.target) && !dropdownContent.contains(e.target)) {
      dropdownContent.classList.remove("show");
    }
  });
});

const services = [
  {
    title: "Malerarbeiten",
    link: "malerarbeiten.html",
    image: "Malerarbeit.jpg"
  },
  {
    title: "Trockenbau & Gipskarton",
    link: "gipskarton.html",
    image: "Gipskarton.jpg"
  },
  {
    title: "Bodenverlegung",
    link: "bodenverlegung.html",
    image: "Boden.jpg"
  },
  {
    title: "Sockelleisten, Türen & Fenster",
    link: "sockelleisten.html",
    image: "Door.jpg"
  },
  {
    title: "Möbelmontage",
    link: "mobelmontage.html",
    image: "Mobel.jpg"
  },
  {
    title: "Sanitärarbeiten",
    link: "sanitararbeiten.html",
    image: "Sanitar.jpg"
  },
  {
    title: "Fliesenarbeiten",
    link: "fliesenarbeiten.html",
    image: "Flies.jpg"
  },
  {
    title: "Sonstige Arbeiten",
    link: "sonstiges.html",
    image: "Sonstig.jpg"
  }
];
  
let currentIndex = 0;

const titleEl = document.getElementById("sliderTitle");
const imageEl = document.getElementById("sliderImage");
const linkEl  = document.getElementById("sliderLink");

function updateSlider() {
  const service = services[currentIndex];
  titleEl.textContent = service.title;
  imageEl.src = service.image;
  linkEl.href = service.link;
}

document.querySelector(".next").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % services.length;
  updateSlider();
});

document.querySelector(".prev").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + services.length) % services.length;
  updateSlider();
});

updateSlider();

