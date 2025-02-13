const header = document.querySelector("header");
const logo = document.querySelector(".nav__logo");
const gnb = document.querySelector(".gnb__wrab");
const nav__button = document.querySelector(".nav__button");
const swiper__ani = document.querySelector(".swiper");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("add__opacity");

    swiper__ani.classList.add("scale__small");
  } else {
    header.classList.remove("add__opacity");

    swiper__ani.classList.remove("scale__small");
  }
});

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  disableOnInteraction: false,
  speed: 1000,
  // direction: "vertical",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  // autoplay: {
  //   delay: 3000, //3초마다 자동전환
  //   disableOnInteraction: false,
  // },
  // speed: 1000,
});

//지셉
gsap.registerPlugin(ScrollTrigger);

const TL = gsap.timeline({
  scrollTrigger: {
    trigger: ".swiper",
    start: "bottom top",
    markers: true,
    speed: 1000,
  },
});

TL.fromTo(
  ".food__text__top",
  {
    opacity: 0,
  },
  {
    opacity: 1,
  }
);

TL.fromTo(
  ".food__text__mid1",
  {
    opacity: 0,
  },
  {
    opacity: 1,
  }
);
TL.fromTo(
  ".food__text__mid2",
  {
    opacity: 0,
  },
  {
    opacity: 1,
  }
);
TL.fromTo(
  ".foot__text__bottom1",
  {
    opacity: 0,
  },
  {
    opacity: 1,
  }
);
TL.fromTo(
  ".foot__text__bottom2",
  {
    opacity: 0,
  },
  {
    opacity: 1,
  }
);

TL.fromTo(
  ".img__carrot",
  {
    opacity: 0,
  },
  {
    opacity: 1,
  }
);

TL.fromTo(
  ".img__leaf",
  {
    opacity: 0,
  },
  {
    opacity: 1,
  }
);

TL.fromTo(
  ".img__egg",
  {
    opacity: 0,
  },
  {
    opacity: 1,
  }
);

const TL1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".swiper",
    start: "bottom top",
    markers: true,
    speed: 1,
    repeat: -1,
  },
});

TL1.to(".star1", { rotate: "720deg", duration: 30 }, 0);

TL1.to(".star3", { rotate: "-720deg", duration: 30 }, 0);
TL1.to(".star4", { rotate: "-720deg", duration: 30 }, 0);

TL1.to(".star6", { rotate: "720deg", duration: 30 }, 0);

const TL2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".swiper",
    start: "bottom top",
    markers: true,
    speed: 1,
  },
});

TL2.to(".star4", {
  y: 20,
  x: 5,
  duration: 1,
  repeat: -1,
  yoyo: true,
});
TL2.to(".star4", {
  y: -20,
  x: -5,
  duration: 2,
  repeat: -1,
  yoyo: true,
});

TL2.to(
  ".star5",
  {
    y: 20,
    x: -10,
    duration: 1,
    repeat: -1,
    yoyo: true,
  },
  0
);
TL2.to(".star5", {
  y: -20,
  x: 10,
  duration: 2,
  repeat: -1,
  yoyo: true,
});
