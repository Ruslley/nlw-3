//Create map

const map = L.map('mapid').setView([-27.2056602, -49.6932565], 15);

//Create and add tilelayer

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//Create icon
const icon = L.icon({
  iconUrl: './public/images/map-marker.svg',
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

//Create Popup overlay
const popup = L.popup({
  closeButton: false,
  className: 'map-popup',
  minWidth: 240,
  minHeight: 240,
}).setContent(
  'Lar das meninas <a href="orphanage.html?id=1" class="choose-orphanage"> <img src="./public/images/arrow-white.svg"> </a>',
);

//Create and add marker
//Como o Objeto L. tem a propriedade icon não é necessario passar em L.markerL.marker([-27.2056602, -49.6932565], {icon:icon})
L.marker([-27.2056602, -49.6932565], { icon }).addTo(map).bindPopup(popup);
