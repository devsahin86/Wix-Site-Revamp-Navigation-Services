


function toggleMenu() {
  const nav = document.querySelector(".nav");
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}

/*** START SERVICES SECTION ***/

const cards = document.querySelectorAll(".service-card");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

cards.forEach(card => observer.observe(card));

/*** END SERVICES SECTION ***/

/*** START PRACTICE SECTION ***/
const elements = document.querySelectorAll(
  ".excellence-box, .class-card"
);

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
    }
  });
});

elements.forEach(el => observer.observe(el));

/*** START PRACTICE SECTION ***/

/*** START EXPERIENCE SECTION ***/

const cards = document.querySelectorAll(".testimonial-card");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("fade-up");
        }
    });
});

cards.forEach(card => observer.observe(card));

/*** END EXPERIENCE SECTION ***/

/*** START CHATE SECTION ***/
document.querySelectorAll(".cta-btn").forEach(btn => {
    btn.addEventListener("mouseover", () => {
        btn.style.transform = "translateY(-3px)";
    });

    btn.addEventListener("mouseout", () => {
        btn.style.transform = "translateY(0)";
    });
});

/*** END CHATE SECTION ***/

/*** START FOOTER SECTION ***/
document.querySelectorAll(".footer a").forEach(link => {
    link.addEventListener("mouseover", () => {
        link.style.opacity = "0.8";
    });
    link.addEventListener("mouseout", () => {
        link.style.opacity = "1";
    });
});


/*** END FOOTER SECTION ***/



















