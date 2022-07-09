// Capturando elementos del DOM
const contenedorLI = document.getElementById("contenedorLineaIntegral");

//Funciones
//Al cargar la pagina
document.addEventListener("DOMContentLoaded", () => {
  getProductLineaIntegral()
    .then((data) => {
      mostrarProductos(data);
    })
    .catch((err) => console.log(err));
});

//Conseguir los productos de la linea integral
const getProductLineaIntegral = async () => {
  const response = await fetch("../data/linea-integral.json");
  const data = await response.json();

  return data;
};

//Mostrar los productos en el DOM
const mostrarProductos = (productos) => {
  productos.forEach((producto) => {
    const { nombre, imagen, descripcion } = producto;
    contenedorLI.innerHTML += `
      <div class="col">
        <div class="card h-100 rounded-2xl mb-2">
          <h5 class="card-title p-3 text-purple font-extrabold">${nombre}</h5>
          <div class="card-img">
            <img src="../assets/productos/integral/${imagen}"  alt="${nombre}">
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
const formularioLI = document.getElementById("formLineaIntegral")

const btnReset = document.getElementById("btnReset")
// prevenir eventos por defecto en el formulario
formularioLI.addEventListener('click',(event) => {
  event.preventDefault()
})

// Al darle click al boton borrar vaciamos el input y llenamoso el contenedorLC
btnReset.addEventListener('click', () => {
  inputBusqueda.value = ""
  getProductLineaIntegral()
    .then((data) => {
      filtrarPorNombre(data);
    })
    .catch((err) => console.log(err));
})


// Filtrar cuando se de enter
inputBusqueda.addEventListener('input'||'click', async () => {
  getProductLineaIntegral()
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
    contenedorLI.innerHTML = "";
    mostrarProductos(filtered)
  }else {
    contenedorLI.innerHTML = `<p>No se encontró el producto</p>`;
  }
}