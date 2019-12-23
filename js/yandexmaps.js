ymaps.ready(init);

let myPlaceMarks = [
  {
    latitude: 55.7464,
    longitude: 37.5989,
    hintContent: '<div class="streetname" style="color:brown">Гоголевский бульвар</div>',
    balloonContent: [
      '<div>',
      '</img>',
      'text',
      '</div>'
    ]
  },
  {
    latitude: 55.7342,
    longitude: 37.6207,
    hintContent: '<div class="streetname" style="color:green">2-й Казачий переулок</div>',
    balloonContent: [
      '<div>',
      '</img>',
      'text',
      '</div>'
    ]
  },
  {
    latitude: 55.7612,
    longitude: 37.6089,
    hintContent: '<div class="streetname" style="color:red">Тверская улица</div>',
    balloonContent: [
      '<div>',
      '</img>',
      'text',
      '</div>'
    ]
  },
  {
    latitude: 55.7578,
    longitude: 37.5641,
    hintContent: '<div class="streetname" style="color:blue">Большой трехгорный переулок</div>',
    balloonContent: [
      '<div>',
      '</img>',
      'text',
      '</div>'
    ]
  }
]

geoObjects = [];

function init() {
  var map = new ymaps.Map('map', {
    center: [55.75, 37.61],
    zoom: 12,
    controls: ['zoomControl'],
    behaviors: ['drag']
  })

  for (var i = 0; i < myPlaceMarks.length; i++) {
    geoObjects[i] = new ymaps.Placemark([myPlaceMarks[i].latitude, myPlaceMarks[i].longitude], {
     hintContent: myPlaceMarks[i].hintContent,
     balloonContent: myPlaceMarks[i].balloonContent.join('')
 },
 {
   iconLayout: 'default#image',
   iconImageHref: '/Chocco/images/misc/map-marker.png',
   iconImageSize: [46,57],
   iconImageOffset:[-23, -57]
 });
 
 }

 var clusterer = new ymaps.Clusterer({
   clusterIcons: [
     {
       href: '/Chocco/images/misc/map-marker.png',
       size: [46,57],
       offset: [-23,-57]
     }
   ],
   clusterIconContentLayout: null
 });

 map.geoObjects.add(clusterer);
 clusterer.add(geoObjects);
}