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
            <p class="card-text">${descripcion}</p>  
          </div>    
        </div>    
      </div>    
      `;
  });
};