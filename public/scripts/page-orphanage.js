//Desable options zoom map
const options = {
  dragging: false,
  touchZoom:false,
  doubleClickZoom:false,
  scrollWheelZoom:false,
  zoomControl:false
}


//Create map

const map = L.map('mapid',options).setView([-27.2153286,-49.6432469], 15);

//Create and add tilelayer

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//Create icon
const icon = L.icon({
  iconUrl: './public/images/map-marker.svg',
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});



//Create and add marker
//Como o Objeto L. tem a propriedade icon não é necessario passar em L.markerL.marker([-27.2056602, -49.6932565], {icon:icon})
L.marker([-27.2153286,-49.6432469], { icon }).addTo(map)


/* Image Gallery*/

function selectImage(event){
 const button = event.currentTarget
//Remover todas as classes .active
const buttons = document.querySelectorAll(".images button")
buttons.forEach(removeActiveClass)

function removeActiveClass(button){
  button.classList.remove("active")
}
//Selecionar a imagem clicada
const image = button.children[0]
const imageContainer = document.querySelector(".orphanage-details > img")

//Atualizar o container do botão
imageContainer.src = image.src

//Adicionar a classe .active para este botão
button.classList.add('active')

}