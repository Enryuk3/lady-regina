//Conseguir los productos de la linea clasica
const getProductLineaClasica = async () => {
  const response = await fetch("../data/linea-clasica.json");
  const data = await response.json();
  
  return data;
};