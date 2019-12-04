const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.navigation');

const handleClick = () => {
  hamburger.classList.toggle('hamburger--active');
  nav.classList.toggle('navigation--active');
};

hamburger.addEventListener('click', handleClick);

$(document).ready(function() {
  $('#up').on('click', function() {
    $('html,body').animate(
      {
        scrollTop: 0
      },
      2000
    );
  });
  AOS.init({
    easing: 'ease',
    duration: 1800,
    once: true
  });
});

TweenMax.from('.logo', 1.6, {
  delay: 1,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut
});

TweenMax.from('.projects', 1.4, {
  delay: 1.2,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut
});

TweenMax.from('.contact-wide', 1.4, {
  delay: 1,
  opacity: 0,
  y: 40,
  ease: Expo.easeInOut
});

TweenMax.from('.resume-wide', 1.4, {
  delay: 1,
  opacity: 0,
  y: 40,
  ease: Expo.easeInOut
});

TweenMax.from('.tag', 1.4, {
  delay: 1,
  opacity: 0,
  y: -40,
  ease: Expo.easeInOut
});

TweenMax.from('.about-me-wide', 2, {
  delay: 1.6,
  opacity: 0,
  y: 40,
  ease: Expo.easeInOut
});

TweenMax.from('.line', 2, {
  delay: 2.8,
  opacity: 0,
  x: -30,
  ease: Expo.easeInOut
});

TweenMax.staggerFrom(
  '.services-wide ul li',
  2,
  {
    delay: 2.8,
    opacity: 0,
    y: 80,
    ease: Expo.easeInOut
  },
  0.2
);

TweenMax.staggerFrom(
  '.media-wide ul li',
  2,
  {
    delay: 2.8,
    opacity: 0,
    y: 80,
    ease: Expo.easeInOut
  },
  0.2
);
TweenMax.staggerFrom(
  '.arrow-wide',
  2,
  {
    delay: 5.8,
    opacity: 0,
    y: -80,
    ease: Expo.easeInOut
  },
  0.2
);
console.log("If you can see this you're awesome!");
