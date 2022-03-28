const carrito = [];

const productos = [
    { id: 0, categoria: 'Calzado', nombre: 'Alpargatas Animal Print', precio: 2200, stock: 0, img: "/assets/images/calzado/alpargatas__animal__01.jpg" },
    { id: 1, categoria: 'Calzado', nombre: 'Alpargatas Azul', precio: 1750, stock: 10, img: "/assets/images/calzado/alpargatas__azules__01.jpg" },
    { id: 2, categoria: 'Cuchillos', nombre: 'Cuchillo Criollo', precio: 1400, stock: 5, img: "/assets/images/cuchillos/cuchillos__01.jpg" },
    { id: 3, categoria: 'Cuchillos', nombre: 'Cuchillo La Mission', precio: 800, stock: 20, img: "/assets/images/cuchillos/cuchillos__02.jpg" },
    { id: 4, categoria: 'Bolsos', nombre: 'Chuna Autobag', precio: 2200, stock: 0, img: "/assets/images/mate/verticales/autobag__chuna__01.jpg" },
    { id: 5, categoria: 'Bolsos', nombre: 'Bolso Matero Chuna Amarillo', precio: 2200, stock: 0, img: "/assets/images/mate/verticales/bolso__chuna__amarillo.jpg" },
    { id: 6, categoria: 'Mates', nombre: 'Mates Chuna', precio: 2200, stock: 15, img: "/assets/images/mate/verticales/mates__chuna__01.jpg" },
    { id: 7, categoria: 'Mates', nombre: 'Mates Jarrito', precio: 2000, stock: 20, img: "/assets/images/mate/verticales/mates__jarrito__06.jpg" },
    { id: 8, categoria: 'Accesorios Calzado', nombre: 'Plantillas Corderito', precio: 200, stock: 0, img: "/assets/images/plantillas/plantillas__01.jpg" },
    { id: 9, categoria: 'Accesorios Calzado', nombre: 'Plantillas Ortopedicas', precio: 220, stock: 80, img: "/assets/images/plantillas/plantillas__03.jpg" },
];


// AGREGAR AL CARRITO
const addToCart = (idProducto) => {
    const productoAgregado = productos.find(producto => producto.id === idProducto);
    carrito.push(productoAgregado);
    document.getElementById("cantidad-prod").innerHTML = carrito.length;
    console.log(carrito);
};



generarCards(productos);

function generarCards(productosAMostrar){
    let acumuladorDeCards = ``;
    productosAMostrar.forEach((elementoDelArray) => {
        acumuladorDeCards += `<div class="col mb-5">
        <div class="card h-100">
            <!-- Sale badge-->
            <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">
                ${(elementoDelArray.stock < 1) ? 'Sin Stock' : 'Disponible'}
            </div>
            <!-- Product image-->
            <img class="card-img-top" src="${elementoDelArray.img}" alt="..." />
            <!-- Product details-->
            <div class="card-body p-4">
                <div class="text-center">
                    <!-- Product name-->
                    <h5 class="fw-bolder">${elementoDelArray.nombre}</h5>
                    <!-- Product price-->
                    <span class="text-muted text-decoration-line-through"></span>
                    <input value="1" min="1" id="cantidad-${elementoDelArray.id}" type="number" placeholder="cantidad">
                    $${elementoDelArray.precio}
                </div>
            </div>
            <!-- Product actions-->
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent" >
                <div class="text-center">
                    <button 
                        onclick="addToCart(${elementoDelArray.id})"
                        class="btn btn-outline-dark mt-auto" href="#">
                        Agregar
                    </button>
                </div>
            </div>
        </div>
    </div>`;
    });
    mostrarCards(acumuladorDeCards);
}

function mostrarCards(cards) {
    document.getElementById("listado-productos").innerHTML = cards;
};

// LOGIN //
function userName(event){
    event.target.style.backgroundColor = '#dfc8a5';
    const valorDelInput = event.target.value;
    if(valorDelInput === "") {
        event.target.style.backgroundColor = "#8c140b"
    } else{
        event.target.style.backgroundColor = "dfc8a5"
    }
}
function password(event){
    event.target.style.backgroundColor = '#dfc8a5';
    const valorDelInput = event.target.value;
    if(valorDelInput.length < 8) {
        event.target.style.backgroundColor = "#8c140b"
    } else{
        event.target.style.backgroundColor = "dfc8a5"
    }
}

// BUSCADOR DE PRODUCTOS //
const buscaProductos = document.querySelector('#buscaProductos');
const boton = document.querySelector('#boton');
const resultado = document.querySelector('#resultado')

const filtrar = ()=>{
  resultado.innerHTML = '';

  const texto = buscaProductos.value.toLowerCase();

  for (let elementoDelArray of productos){
    let nombre = elementoDelArray.nombre.toLowerCase();
    if(nombre.indexOf(texto) !== -1){
     resultado.innerHTML +=`
     <ul>
     <li>${elementoDelArray.nombre}</li>
     <li>$${elementoDelArray.precio}</li>
     </ul>`
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