// Capturando elementos del DOM
const contenedorLC = document.getElementById("contenedorLineaClasica");

//Funciones
//Al cargar la pagina
document.addEventListener("DOMContentLoaded", () => {
  getProductLineaClasica()
    .then((data) => {
      mostrarProductos(data);
    })
    .catch((err) => console.log(err));
});

//Conseguir los productos de la linea clasica
const getProductLineaClasica = async () => {
  const response = await fetch("../data/linea-clasica.json");
  const data = await response.json();
  
  return data;
};


//Mostrar los productos en el DOM
const mostrarProductos = (productos) => {
  productos.forEach((producto) => {
    const { nombre, imagen, descripcion } = producto;
    contenedorLC.innerHTML += `
      <div class="col">
        <div class="card h-100 rounded-2xl mb-2">
          <h5 class="card-title p-3 text-purple font-extrabold">${nombre}</h5>
          <div class="card-img">
            <img src="../assets/productos/clásica/${imagen}"  alt="${nombre}">
          </div>
          <div class="card-body">
            <p class="card-text card-description">${descripcion}</p>  
          </div>    
        </div>    
      </div>    
      `;
  });
};


// input de busqueda
const inputBusqueda = document.getElementById("inputSearch");
// boton de busqueda
const btnBusqueda = document.getElementById("btnBusqueda");
// formulario
const formularioLC = document.getElementById("formLineaClasica")

const btnReset = document.getElementById("btnReset")
// prevenir eventos por defecto en el formulario
formularioLC.addEventListener('click',(event) => {
  event.preventDefault()
})

// Al darle click al boton borrar vaciamos el input y llenamoso el contenedorLC
btnReset.addEventListener('click', () => {
  inputBusqueda.value = ""
  getProductLineaClasica()
    .then((data) => {
      filtrarPorNombre(data);
    })
    .catch((err) => console.log(err));
})


// Filtrar cuando se de enter
inputBusqueda.addEventListener('input'||'click', async () => {
  getProductLineaClasica()
  .then((data) => {
    filtrarPorNombre(data);
  })
  .catch((err) => console.log(err));
})


//Filtrar productos atravez de la busqueda
const filtrarPorNombre = async(productos) => {
  let loQueQuieroBuscar = inputBusqueda.value;
  let searched = loQueQuieroBuscar.toLowerCase()
  let filtered = productos.filter(e => e.nombre.toLowerCase().includes(searched))

  if (filtered.length > 0) {
    contenedorLC.innerHTML = "";
    mostrarProductos(filtered)
  }else {
    contenedorLC.innerHTML = `<p>¡Lo sentimos! No hemos encontrado ningún resultado para tu búsqueda...</p>`;
  }
}