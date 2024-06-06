// Swiper bundle version
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

const slider = new Swiper('.slider__swiper', {
  // configure Swiper to use modules
  wrapperClass: 'slider__wrapper',
  slideClass: 'slider__slide',

  loop: true,
  autoplay: {
    delay: 5000,
    // disableOnInteraction: true,
    pauseOnMouseEnter: true,
  },

  // slidesPerView: "auto",
  slidesPerView: 1,

  spaceBetween: '12',

  // parallax: true,

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  // mousewheel: {
  //   sensitivity: 1,
  // },
  // watchOverflow: false,

  speed: 800,

  // observer: true,
  // observeParents: true,
  // observeSlideChildren: true,
  navigation: {
    nextEl: '.slider__navigation--next',
    prevEl: '.slider__navigation--previous',
  },
  // scrollbar: {
  //   el: ".slider__scroll",
  //   dragClass: "slider__drag-scroll",
  //   draggable: true,
  // },

  // init: true,

  breakpoints: {
    536: {
      slidesPerView: 2,
      spaceBetween: '16',
    },
    802: {
      slidesPerView: 3,
      spaceBetween: '20',
    },
    1074: {
      slidesPerView: 4,
      spaceBetween: '24',
    },
  },
})

export default slider
