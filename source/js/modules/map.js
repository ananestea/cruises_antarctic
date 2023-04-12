let loaded = false;

const createMap = ({id, initials, placemark}) => {
  const map = new window.ymaps.Map(id, initials);
  map.geoObjects.add(new window.ymaps.Placemark(map.getCenter(), ...placemark));
  map.behaviors.disable('scrollZoom');
};

function initMap(mapData) {
  document.querySelector('.contacts__map-image').style.display = 'none';
  if (loaded) {
    createMap(mapData);

    return;
  }

  const scriptElement = document.createElement('script');
  scriptElement.async = true;
  scriptElement.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU';
  scriptElement.addEventListener('load', () => {
    window.ymaps.ready(() => {
      createMap(mapData);
      loaded = true;
    });
  });
  document.body.append(scriptElement);
}

const map = document.getElementById('map');
const mapInitializer = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    initMap({
      id: 'map',
      initials: {
        center: [59.938900, 30.323037],
        controls: [],
        zoom: 16,
      },
      placemark: [
        {
          hintContent: 'г. Санкт Петербург, ул. Большая Конюшенная, 19/8',
        },
        {
          iconImageHref: 'img/svg/pin.svg',
          iconImageSize: [18, 22],
          iconLayout: 'default#image',
        }
      ],
    });

    mapInitializer.unobserve(map);
  }
});

export {mapInitializer, map};
