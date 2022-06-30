const lineaClasica =[
    {
        id: 01,
        nombre:"Lemon pie",
        imagen: "lemonPie.jpg",
        descripcion:"Masa sablée, suave crema de limón y merengue italiano."
    },
    {
        id: 02,
        nombre:"Tarta frutal",
        imagen: "tartaFrutal.jpg",
        descripcion: "Masa sablée, crema pastelera, frutas de estación y crema chantilly."
    },
    {
        id: 03,
        nombre:"Tarta de peras y chocolate",
        imagen: "tartaPerasChocolate.jpg",
        descripcion:"Masa sablée, peras en almíbar y crema de chocolate."
    },
    {
        id: 04,
        nombre:"Pastafrola",
        imagen: "pastafrola.jpg",
        descripcion: "Masa sablée, dulce de batata o membrillo, enrejado de masa. Opcional: Dulce de leche."
    },
    {
        id: 05,
        nombre:"Torta brownie",
        imagen: "tortaBrownie.jpg",
        descripcion:"Base de brownie, mucho dulce de leche y merengue italiano con chips de chocolate semiamargo."
    },
    {
        id: 6,
        nombre:"Mesas dulces",
        imagen: "tortaDecorada.jpg",
        descripcion: "Tortas personalizadas para eventos sociales."
    },
    {
        id: 7,
        nombre:"Cookies decoradas",
        imagen: "cookiesDecoradas.jpg",
        descripcion:"Masa sablée, sabor y motivo a elección. Decoradas con glasé real."
    },
    {
        id: 8,
        nombre:"Masas secas decoradas - mixtas",
        imagen: "masasSecas.jpg",
        descripcion: "Masa sablée de vainilla, chocolate, con chocolate semiamargo, crocante de mani, frutos secos, cerezas, dulce de leche, coco rallado."
    },
    {
        id: 9,
        nombre:"Alfajor santafesino",
        imagen: "alfajorSantafecino.jpg",
        descripcion:"Triple capa de masa, con mucho dulce de leche y glaseado con un toque de limón."
    },
    {
        id: 10,
        nombre:"Rosca rellena con crema pastelera",
        imagen: "roscaRellena.jpg",
        descripcion: "Masa esponjosa con toque de almendras. Rellena de chocolate o dulce de leche. Crema pastelera y cerezas."
    },
    {
        id: 11,
        nombre:"Pan dulse y Stollen (Pan dulce alemán)",
        imagen: "stollen.jpg",
        descripcion:"Especialidades para Navidad y fin de año personalizables."
    },
    {
        id: 12,
        nombre:"Torta Porter (Irlandesa)",
        imagen: "tortaPorter.jpg",
        descripcion: "Masa especiada, cerveza Porter, pasas rubias, morenas y cerezas."
    },
    {
        id: 13,
        nombre:"Torta de chocolate y cerveza negra (Irlandesa)",
        imagen: "tortaChocolateCervezaNegra.jpg",
        descripcion:"Masa con cacao, crema, cerveza Stout y cubierta de crema batida con queso crema y azúcar. Opcional: crocante de maní."
    },
    {
        id: 14,
        nombre:"Scones frutados (Irlandeses)",
        imagen: "sconesFrutados.jpg",
        descripcion: "Dulces, con buttermilk, pasas y cerezas."
    },
    {
        id: 15,
        nombre:"Tarta toffee",
        imagen: "noPhoto.jpg",
        descripcion:"Masa sablée, dulce de leche especial, cobertura de chocolate semiamargo."
    },
    {
        id: 16,
        nombre:"Tarta de coco y dulce de leche",
        imagen: "noPhoto.jpg",
        descripcion: "Masa sablée, dulce de leche, cobertura de coco y azúcar."
    },
    {
        id: 17,
        nombre:"Brownie",
        imagen: "noPhoto.jpg",
        descripcion:"Masa húmeda con chocolate semiamargo y nueces (opcional)."
    }
]

const container = document.getElementById("contenedor");

forEach((lineaClasica, indice)=>{
    let card=document.createElement("div")
    card.classList.add("card","col-sm-12", "col-lg-3", "col-md-3" )
    let html= `<img src="${lineaClasica.imagen}" class="card-img-top" alt="${lineaClasica.nombre}">
    <div class="card-body">
      <h5 class="card-title">${lineaClasica.nombre}</h5>
      <p class="card-text">Stock disponible: ${lineaClasica.stock}</p>
      <a href="#cart" class="btn btn-primary" onClick = "agregarReserva(${indice})">Seleccionar</a>
    </div>`;
    card.innerHTML = html;
    contenedor.appendChild(card);
});
