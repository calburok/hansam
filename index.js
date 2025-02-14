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
    duration: 0.05,
  }
);

TL.fromTo(
  ".food__text__mid1",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 0.05,
  }
);
TL.fromTo(
  ".food__text__mid2",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 0.05,
  }
);
TL.fromTo(
  ".foot__text__bottom1",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 0.05,
  }
);
TL.fromTo(
  ".foot__text__bottom2",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 0.05,
  }
);

TL.fromTo(
  ".img__carrot",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 0.05,
  }
);

TL.fromTo(
  ".img__leaf",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 0.05,
  }
);

TL.fromTo(
  ".img__egg",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 0.05,
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
TL1.to(".star2", { rotate: "-720deg", duration: 30 }, 0);
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

const TL3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".service",
    start: "top top",
    end: "150% top",
    pin: true,
    scrub: true,
    markers: true,
  },
});

TL3.to(".service__wrap", {
  duration: 2.5,
  ease: "expoScale(0.5,7,none)",
  x: -800,
});

const TL4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".spring",
    start: "30% bottom",
    end: "10% top",
    scrub: 1,
    markers: true,
  },
});

TL4.to(".spring__bigcard", {
  scale: 1,
  duration: 1,
  yoyo: true,
});

// 호버 애니메이션

const peoplebox = document.querySelector(".peoplebox");
const peopleline = document.querySelector(".peopleline");
const peopleline2 = document.querySelector(".peopleline2");
const cardTop = document.querySelector(".cardTop ");
const person = document.querySelector(".person");
const person1 = document.querySelector(".person1");

const TL5 = gsap.timeline({
  scrub: true,
});

cardTop.addEventListener("mouseover", () => {
  TL5.to(".person", {
    opacity: 1,
    duration: 0.05,
  });
  TL5.to(".person1", {
    opacity: 1,
    duration: 0.05,
  });
  TL5.to(".person2", {
    opacity: 1,
    duration: 0.05,
  });
  TL5.to(".person3", {
    opacity: 1,
    duration: 0.05,
  });
  TL5.to(".person4", {
    opacity: 1,
    duration: 0.05,
  });
  TL5.to(".person5", {
    opacity: 1,
    duration: 0.05,
  });
  TL5.to(".person6", {
    opacity: 1,
    duration: 0.05,
  });
  TL5.to(".person7", {
    opacity: 1,
    duration: 0.05,
  });
  TL5.to(".person8", {
    opacity: 1,
    duration: 0.05,
  });
  TL5.to(".person9", {
    opacity: 1,
    duration: 0.05,
  });
  TL5.to(".person10", {
    opacity: 1,
    duration: 0.05,
  });
  TL5.to(".person11", {
    opacity: 1,
    duration: 0.05,
  });
  TL5.to(".person12", {
    opacity: 1,
    duration: 0.05,
  });
  TL5.to(".person13", {
    opacity: 1,
    duration: 0.05,
  });
  TL5.to(".person14", {
    opacity: 1,
    duration: 0.05,
  });
  TL5.to(".person15", {
    opacity: 1,
    duration: 0.05,
  });
  TL5.to(".person16", {
    opacity: 1,
    duration: 0.05,
  });
  TL5.to(".person17", {
    opacity: 1,
    duration: 0.05,
  });
  TL5.to(".person18", {
    opacity: 1,
    duration: 0.05,
  });
  TL5.to(".person19", {
    opacity: 1,
    duration: 0.05,
  });
  TL5.to(".person20", {
    opacity: 1,
    duration: 0.05,
  });
  TL5.to(".person21", {
    opacity: 1,
    duration: 0.05,
  });
  TL5.to(".person22", {
    opacity: 1,
    duration: 0.05,
  });
  TL5.to(".person23", {
    opacity: 1,
    duration: 0.05,
  });
  TL5.to(".person24", {
    opacity: 1,
    duration: 0.05,
  });
  TL5.to(".person25", {
    opacity: 1,
    duration: 0.05,
  });
  TL5.to(".person26", {
    opacity: 1,
    duration: 0.05,
  });
  TL5.to(".person27", {
    opacity: 1,
    duration: 0.05,
  });
  TL5.to(".person28", {
    opacity: 1,
    duration: 0.05,
  });
  TL5.to(".person29", {
    opacity: 1,
    duration: 0.05,
  });
  TL5.to(".person30", {
    opacity: 1,
    duration: 0.05,
  });
  TL5.to(".person31", {
    opacity: 1,
    duration: 0.05,
  });
  TL5.to(".person32", {
    opacity: 1,
    duration: 0.05,
  });
  TL5.to(".person33", {
    opacity: 1,
    duration: 0.05,
  });
  TL5.to(".person34", {
    opacity: 1,
    duration: 0.05,
  });
  TL5.to(".person35", {
    opacity: 1,
    duration: 0.05,
  });
  TL5.to(".person36", {
    opacity: 1,
    duration: 0.05,
  });
  TL5.to(".person37", {
    opacity: 1,
    duration: 0.05,
  });
  TL5.to(".person38", {
    opacity: 1,
    duration: 0.05,
  });
});

const TL6 = gsap.timeline({
  scrollTrigger: {
    trigger: ".confident",
    start: "50% 50%",
    markers: true,
  },
});

TL6.fromTo(
  ".confident__card",
  {
    x: 2000,
  },
  {
    x: 0,
    duration: 2.5,
    stagger: 0.1,
    ease: "bounce.out",
  }
);

//페이지네이션

const TL7 = gsap.timeline({
  scrollTrigger: {
    trigger: ".sequenceCard1",
    start: "top 10%",
    end: "120% top",
    pin: true,
    scrub: true,
    markers: true,
  },
});
TL7.to(".sequenceCard1", { scale: 0.9, duration: 5 });
TL7.to(".sequenceCard1", { scale: 0 });

const TL8 = gsap.timeline({
  scrollTrigger: {
    trigger: ".sequenceCard2",
    start: "top 10%",
    end: "120% top",
    pin: true,
    scrub: true,
    markers: true,
  },
});
TL8.to(".sequenceCard2", { scale: 0.9, duration: 5 });
TL8.to(".sequenceCard1", { scale: 0 });
const TL9 = gsap.timeline({
  scrollTrigger: {
    trigger: ".sequenceCard3",
    start: "top 10%",
    end: "9% 9% ",
    pin: true,
    scrub: true,
    markers: true,
  },
});
