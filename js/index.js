document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper('.city__content-swiper', {
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    navigation: {
      nextEl: '.city__navigationSlide-next',
      prevEl: '.city__navigationSlide-prev',
    },
    pagination: {
      el: '.city__content-pagination',
      type: 'bullets',
      clickable: true
    },
    a11y: {
      prevSlideMessage: 'Переключить на предыдущий слайд',
      nextSlideMessage: 'Переключить на следующий слайд',
      paginationBulletMessage: 'Перейти на слайд номер {{index}}',
      firstSlideMessage: "Слайд номер один",
      lastSlideMessage: "Последний слайд"
    },
  });

  ymaps.ready(init);

  function init() {
    var myMap = new ymaps.Map('map', {
      center: [59.938955, 30.315644],
      zoom: 12,
      controls: []
    });
    var myPlacemark = new ymaps.Placemark([59.938955, 30.315644], {
      iconContent: 'САНКТ-ПЕТЕРБУРГ',
      balloonContent: 'Столица России',
    }, {
      iconLayout: "default#image",
      iconImageHref: "./images/metka.svg",
      iconImageSize: [21, 56],
      iconImageOffset: [0, -76]
    });
    myMap.geoObjects.add(myPlacemark);
  }

  const anchors = document.querySelectorAll('a[href*="#"]')

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()

      const blockID = anchor.getAttribute('href').substr(1)

      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  }
  new WOW().init()
})