// Toggle icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// For SCROLL SECTION *************
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
  // For Sticky navbar
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  // Remove toggle icon and navbar when click navbar link
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

/*---------SCROLL REVEAL---------*/
ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});
ScrollReveal().reveal(
  ".home-content, .heading, .about .section-title, .portfolio .section-title h2, .contact .section-title h2",
  {
    origin: "top",
  }
);
ScrollReveal().reveal(
  ".home-img, .portfolio-box .contact form, .about .info-item, .portfolio .portfolio-box",
  {
    origin: "bottom",
  }
);
ScrollReveal().reveal(
  ".home-content h1, .about .about-text h3,.about .about-text p, .portfolio .section-title h3",
  {
    origin: "left",
  }
);
ScrollReveal().reveal(".home-content p, .skill-item, .timeline-item", {
  origin: "right",
});

// TYPED SECTION**************
// const typed = new Typed(".typping", {
//   strings: ["Web Designer", "Web Developer", "Graphic Designer"],
//   typeSpeed: 100,
//   BackSpeed: 100,
//   BackDelay: 1000,
//   loop: true,
// });

/* FOR SUBMIT PAGE
website- web3forms -> go to html -> add email id for access key
Access Key : 9fff1850-d579-4b5a-a0e6-519a73708282
action="https://api.web3forms.com/submit" method="POST" in action form in HTML
 */
