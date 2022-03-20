// Creo el Array de Productos
const productos = [
    { id: 0, categoria: 'Calzado', nombre: 'Alpargatas Animal Print', precio: 2200, stock: 20, img: "/assets/images/calzado/alpargatas__animal__01.jpg"},
    { id: 1, categoria: 'Calzado', nombre: 'Alpargatas Azul', precio: 1750, stock: 10, img: "/assets/images/calzado/alpargatas__azules__01.jpg"},
    { id: 2, categoria: 'Cuchillos', nombre: 'Cuchillo Criollo', precio: 1400, stock: 5, img: "/assets/images/cuchillos/cuchillos__01.jpg"},
    { id: 3, categoria: 'Cuchillos', nombre: 'Cuhillo La Mission', precio: 800, stock: 20, img: "/assets/images/cuchillos/cuchillos__02.jpg"},
    { id: 4, categoria: 'Bolsos', nombre: 'Chuna Autobag', precio: 2200, stock: 0, img: "/assets/images/mate/verticales/autobag__chuna__01.jpg"},
    { id: 5, categoria: 'Bolsos', nombre: 'Bolso Matero Chuna Amarillo', precio: 2200, stock: 0, img: "/assets/images/mate/verticales/bolso__chuna__amarillo.jpg"},
    { id: 6, categoria: 'Mates', nombre: 'Mates Chuna', precio: 2200, stock: 15, img: "/assets/images/mate/verticales/mates__chuna__01.jpg"},
    { id: 7, categoria: 'Mates', nombre: 'Mates Jarrito', precio: 2000, stock: 20, img: "/assets/images/mate/verticales/mates__jarrito__06.jpg"},
    { id: 8, categoria: 'Accesorios Calzado', nombre: 'Plantillas Corderito', precio: 200, stock: 60, img: "/assets/images/plantillas/plantillas__01.jpg"},
    { id: 9, categoria: 'Accesorios Calzado', nombre: 'Plantillas Ortopedicas', precio: 220, stock: 80, img: "/assets/images/plantillas/plantillas__03.jpg"},
    ];

const divProductos = document.querySelector('.productos')

// GENERO CARDS EN BASE AL ARRAY PRODUCTOS //
function agregarProductos(array,div){
  productos.forEach(element =>{
      let card = document.createElement('div')
      card.className = 'card'
      card.style = "width: 18rem;"
      console.log(card)
      card.innerHTML = `
      <img class="card-img-top" src="${element.img}" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">${element.nombre}</h5>
                <p class="card-text">${element.precio}</p>
                <a href="#" class="btn btn-primary">Comprar</a>
              </div>`
  
      divProductos.appendChild(card)
  })
}

agregarProductos()

// BUSCADOR DE PRODUCTOS //
const buscaProductos = document.querySelector('#buscaProductos');
const boton = document.querySelector('#boton');
const resultado = document.querySelector('#resultado')

const filtrar = ()=>{
  resultado.innerHTML = '';

  const texto = buscaProductos.value.toLowerCase();

  for (let producto of productos){
    let nombre = producto.nombre.toLowerCase();
    if(nombre.indexOf(texto) !== -1){
      resultado.innerHTML +=`
      <li>${producto.nombre} - $${producto.precio}</li>
      `
    }
  }
  if(resultado.innerHTML === ''){
    resultado.innerHTML += `
    <li>Producto No Encontrado</li>
    `
  }
}

boton.addEventListener('click', filtrar)
buscaProductos.addEventListener('keyup', filtrar)

