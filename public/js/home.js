// Animations
gsap.from(".header", { y: -100, duration: 0.5 });
gsap.from(".heroSectionPhoto", { x: -300, duration: 1 });

const textElement = document.querySelector(".heroSectionText");

const textContent =
  "Get instant access to college notices, exciting events, and more.";

const tl = gsap.timeline();

for (let i = 0; i < textContent.length; i++) {
  tl.to(textElement, {
    textContent: textContent.substr(0, i + 1),
    duration: 0.02,
  });
}

// Variables
const themeButton = document.getElementById("themeButton");
const content = document.querySelector(".content");
// Pallax Logic
window.addEventListener("scroll", function () {
  const scrollTop = window.scrollY;
  const heroSectionMainText = document.querySelector(".heroSectionMainText");
  const heroSectionText = document.querySelector(".heroSectionText");
  const heroSectionPhoto = document.querySelector(".heroSectionPhoto");
  const parallaxSection = document.querySelector(".parallax-section");
  const isMobile = window.innerWidth <= 768;
  const textTranslateY = isMobile ? scrollTop * 0.4 : scrollTop * 0.2;
  const photoTranslateX = isMobile ? 0 : scrollTop * 0.9;

  heroSectionText.style.transform = `translateY(-${textTranslateY}px)`;
  heroSectionMainText.style.transform = `translateY(-${textTranslateY}px)`;
  heroSectionPhoto.style.transform = `translateX(${photoTranslateX}px)`;
});
// ScrollReveal
ScrollReveal().reveal(".aboutUsImage", { delay: 100, reset: true });
ScrollReveal().reveal(".aboutUsMainText", { delay: 110, reset: true });
ScrollReveal().reveal(".aboutUsText", {
  delay: 400,
  interval: 3,
  reset: true,
});
ScrollReveal().reveal(".aboutUsDescription", {
  delay: 400,
  interval: 3,
  reset: true,
});
ScrollReveal().reveal(".dietianNainText", {
  delay: 400,
  interval: 3,
  reset: true,
});
ScrollReveal().reveal(".dietianText", {
  delay: 400,
  interval: 3,
  reset: true,
});

document.addEventListener("DOMContentLoaded", function () {
  const toggleSwitch = document.querySelector(
    '.toggle-switch input[type="checkbox"]'
  );
  toggleSwitch.addEventListener("change", function () {
    if (this.checked) {
      document.querySelector(".header").style.backgroundColor = " #1A2421";
      document.querySelector(".aboutUs").style.backgroundColor = " #1A2421";
      document.querySelector(".hero-section").style.backgroundColor =
        " #1A2421";
      document.querySelector(".heroSectionMainText").style.color = "white";
      document.querySelector(".heroSectionText").style.color = "white";
      document.querySelector(".aboutUsMainText").style.color = "white";
      document.querySelector(".aboutUsText").style.color = "white";
      document.querySelector(".parallax-section").style.backgroundColor =
        "#1A2421";
      document.querySelector(".dietianNainText").style.color = "white";
      document.querySelector(".dietianText").style.color = "white";
      document.querySelectorAll("li").forEach((val) => {
        val.style.color = "white";
      });
      document.querySelectorAll(".aboutUsDescription").forEach((val) => {
        val.style.backgroundColor = "black";
      });
      document.querySelectorAll(".aboutText").forEach((val) => {
        val.style.color = "White";
      });
    } else {
      document.querySelector(".header").style.backgroundColor = "white";
      document.querySelectorAll("li").forEach((val) => {
        val.style.color = "black";
      });
      document.querySelector(".aboutUs").style.backgroundColor = "white";
      document.querySelector(".hero-section").style.backgroundColor = "white";
      document.querySelector(".heroSectionMainText").style.color = "black";
      document.querySelector(".heroSectionText").style.color = "black";
      document.querySelector(".aboutUsMainText").style.color = "black";
      document.querySelector(".aboutUsText").style.color = "black";
      document.querySelector(".parallax-section").style.backgroundColor =
        "white";
      document.querySelector(".dietianNainText").style.color = "black";
      document.querySelector(".dietianText").style.color = "black";
      document.querySelectorAll(".aboutUsDescription").forEach((val) => {
        val.style.backgroundColor = "white";
      });
      document.querySelectorAll(".aboutText").forEach((val) => {
        val.style.color = "black";
      });
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  //------ Slider Begin
  const CaroS = document.querySelector(".Carousel-slider");
  const CaroSlider = new MicroSlider(CaroS, {
    indicators: true,
    indicatorText: "",
  });
  const hammer = new Hammer(CaroS);
  const CaroSTimer = 2000;
  let CaroAutoplay = setInterval(() => CaroSlider.next(), CaroSTimer);

  //------- Mouseenter Event
  CaroS.onmouseenter = function (e) {
    clearInterval(CaroAutoplay);
    console.log(e.type + " mouse detected");
  };

  //----- Mouseleave Event
  CaroS.onmouseleave = function (e) {
    clearInterval(CaroAutoplay);
    CaroAutoplay = setInterval(() => CaroSlider.next(), CaroSTimer);
    console.log(e.type + " mouse detected");
  };

  //----- Mouseclick Event
  CaroS.onclick = function (e) {
    clearInterval(CaroAutoplay);
    console.log(e.type + " mouse detected");
  };

  //------ Gesture Tap Event
  hammer.on("tap", function (e) {
    clearInterval(CaroAutoplay);
    console.log(e.type + " gesture detected");
  });

  //----- Gesture Swipe Event
  hammer.on("swipe", function (e) {
    clearInterval(CaroAutoplay);
    CaroAutoplay = setInterval(() => CaroSlider.next(), CaroSTimer);
    console.log(e.type + " gesture detected");
  });

  let slideLink = document.querySelectorAll(".slider-item");
  if (slideLink && slideLink !== null && slideLink.length > 0) {
    slideLink.forEach((el) =>
      el.addEventListener("click", (e) => {
        e.preventDefault();
        let href = el.dataset.href;
        let target = el.dataset.target;
        if (href !== "#") window.open(href, target);
      })
    );
  }

  //---- Slider End
});
