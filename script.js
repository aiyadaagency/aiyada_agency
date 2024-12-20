gsap.registerPlugin(ScrollTrigger);

gsap.from("header > *", {
  y: -150,
  stagger: 0.1,
  duration: 1,
});

gsap.from(".hero-section .left .hero-text-up", {
  y: -150,
  stagger: 0.1,
  duration: 0.7,
});

gsap.from(".hero-section .left .hero-text-down", {
  y: 150,
  stagger: 0.2,
  duration: 0.8,
});

gsap.from(".hero-section .right .circle-btn", {
  rotate: 360,
  right: -450,
  duration: 1,
  onComplete: () => {
    gsap.to(".hero-section .left .overflow-hidden img", {
      left: 0,
      duration: 1,
      ease: "power1.inOut",
    });
  },
});

gsap.to(".hero-section .left .overflow-hidden img", {
  left: -255,
  duration: 1,
  ease: "power1.inOut",
});

gsap.from(".project-lists img", {
  left: 1500,
  rotation: 35,
  stagger: 0.3,
  ease: "power1.ease",
  onComplete: () => {
    let images = document.querySelectorAll(".project-lists");
    images.forEach((item) => {
      item.style.animation = "slide 59s linear infinite";
    });
  },
});

gsap.from(".services .line1", {
  scale: 0,
  ease: "power1.ease",
  scrollTrigger: {
    trigger: ".services .line1",
    start: "top 100%",
  },
});

gsap.from(".services .line2", {
  scale: 0,
  ease: "power1.ease",
  scrollTrigger: {
    trigger: ".services .line2",
    start: "top 100%",
  },
});

gsap.from(".services .line3", {
  scale: 0,
  ease: "power1.ease",
  scrollTrigger: {
    trigger: ".services .line3",
    start: "top 100%",
  },
});

gsap.from(".services .line4", {
  scale: 0,
  ease: "power1.ease",
  scrollTrigger: {
    trigger: ".services .line4",
    start: "top 100%",
  },
});

gsap.from(".services .line5", {
  scale: 0,
  ease: "power1.ease",
  duration: 0.7,
  scrollTrigger: {
    trigger: ".services .line5",
    start: "top 100%",
  },
});

gsap.from(".services .card .left", {
  left: -500,
  ease: "power1.ease",
  duration: 1.2,
  scrollTrigger: {
    start: "top 100%",
    trigger: ".services .card .left",
  },
});

gsap.from(".services .card .right", {
  right: -500,
  duration: 1.2,
  ease: "power1.ease",
  scrollTrigger: {
    start: "top 100%",
    trigger: ".services .card .right",
  },
});

gsap.from(".services .card .center *", {
  opacity: 0,
  stagger: 0.08,
  ease: "power1.ease",
  duration: 1.2,
  scrollTrigger: {
    start: "top 100%",
    trigger: ".services .card .center",
  },
});

gsap.from(".aboutus *", {
  opacity: 0,
  stagger: 0.1,
  ease: "power1.ease",
  duration: 1.5,
  scrollTrigger: {
    start: "top 100%",
    trigger: ".aboutus *",
  },
});

gsap.from(".footer .top .left h2", {
  left: -1500,
  duration: 1,
  scrollTrigger: {
    trigger: ".footer .top .left h2",
    start: "top 100%",
  },
});

gsap.from(".footer .top .left div", {
  left: -1500,
  duration: 1.2,
  scrollTrigger: {
    trigger: ".footer .top .left h2",
    start: "top 100%",
  },
});

gsap.to(".footer .top .right .circle-btn", {
  rotate: -360,
  duration: 1.2,
  right: 0,
  scrollTrigger: {
    trigger: ".footer .right .circle-btn",
    start: "top 100%",
  },
});

gsap.from(".footer .bottom .left", {
  left: -600,
  duration: 1.2,
  scrollTrigger: {
    trigger: ".footer .bottom",
    start: "top 100%",
  },
});

gsap.from(".footer .bottom .right", {
  left: 600,
  duration: 1.3,
  scrollTrigger: {
    trigger: ".footer .bottom",
    start: "top 100%",
  },
});

//

let circleButton1 = document.querySelector(".hero-section .right .circle-btn");
let circleButton2 = document.querySelector(".footer .top .right .circle-btn");
let body = document.querySelector(".contact-container");
let popup = document.querySelector(".contact-container .popup");
let close = document.querySelector(".contact-container .popup .close");
let contactBtn = document.querySelector(".contact-btn");
let discussBtns = document.querySelectorAll(".discuss-btn");
let menu = document.querySelector(".menu");
let mobileDropdown = document.querySelector(".mobile-nav-links");

discussBtns.forEach((item) => {
  item.addEventListener("click", () => {
    menu.setAttribute("src", "./images/menu.png");
    body.classList.add("blur");
    document.body.classList.add("blur");
    popup.classList.add("show");
    mobileDropdown.classList.remove("active");
  });
});

circleButton1.addEventListener("click", () => {
  body.classList.add("blur");
  document.body.classList.add("blur");
  menu.setAttribute("src", "./images/menu.png");
  popup.classList.add("show");
  mobileDropdown.classList.remove("active");
});

circleButton2.addEventListener("click", () => {
  body.classList.add("blur");
  menu.setAttribute("src", "./images/menu.png");
  document.body.classList.add("blur");
  mobileDropdown.classList.remove("active");
  popup.classList.add("show");
});

contactBtn.addEventListener("click", () => {
  body.classList.add("blur");
  menu.setAttribute("src", "./images/menu.png");
  document.body.classList.add("blur");
  mobileDropdown.classList.remove("active");
  popup.classList.add("show");
});

close.addEventListener("click", () => {
  body.classList.remove("blur");
  menu.setAttribute("src", "./images/menu.png");
  document.body.classList.remove("blur");
  popup.classList.remove("show");
  mobileDropdown.classList.remove("active");
});

menu.addEventListener("click", () => {
  if (menu.getAttribute("src") == "./images/menu.png") {
    menu.setAttribute("src", "./images/Frame 1171276273.png");
    mobileDropdown.classList.add("active");
  } else {
    menu.setAttribute("src", "./images/menu.png");
    mobileDropdown.classList.remove("active");
  }
});

//
