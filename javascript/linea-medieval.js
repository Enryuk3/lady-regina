//variables
const contenedorLM =  document.getElementById('contenedorLineaMedieval')

//Funciones

//Al cargar la pagina 
document.addEventListener('DOMContentLoaded', () => {
  getProductLineaMedieval()
  .then((data) => {
    mostrarProductos(data)
  }).catch((err) => {
    console.error(err)
  });
})

//Conseguir los productos de la linea medieval
const getProductLineaMedieval = async () => {
  const response = await fetch("../data/linea-medieval.json");
  const data = await response.json();

  return data;
};

//Mostrar los productos en el DOM
const mostrarProductos = (productos) => {
  productos.forEach((producto) => {
    const { nombre, imagen, descripcion } = producto;
    contenedorLM.innerHTML += `
      <div class="col">
        <div class="card h-100 rounded-2xl mb-2">
          <h5 class="card-title p-3 text-purple font-extrabold">${nombre}</h5>
          <div class="card-img">
            <img src="../assets/productos/medieval/${imagen}"  alt="${nombre}">
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
const formularioLM = document.getElementById("formLineaMedieval")

const btnReset = document.getElementById("btnReset")
// prevenir eventos por defecto en el formulario
formularioLM.addEventListener('click',(event) => {
  event.preventDefault()
})

// Al darle click al boton borrar vaciamos el input y llenamos el contenedorLM
btnReset.addEventListener('click', () => {
  inputBusqueda.value = ""
  getProductLineaMedieval()
    .then((data) => {
      filtrarPorNombre(data);
    })
    .catch((err) => console.log(err));
})

// Filtrar cuando se de enter
inputBusqueda.addEventListener('input'||'click', async () => {
  getProductLineaMedieval()
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
    contenedorLM.innerHTML = "";
    mostrarProductos(filtered)
  }else {
    contenedorLM.innerHTML = `<p>¡Lo sentimos! No hemos encontrado ningún resultado para tu búsqueda.../p>`;
  }
}