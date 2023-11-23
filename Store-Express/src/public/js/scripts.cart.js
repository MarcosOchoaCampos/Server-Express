const btnCart = document.querySelector(".container-cart-icon");
const containerCartProducts = document.querySelector(".container-cart-products");
const rowProduct = document.querySelector(".row-product")
const cartEmpty = document.querySelector(".cart-empty")
const cartTotal = document.querySelector(".cart-total")
//infoCart.recordset[].propietity

btnCart.addEventListener("click", () => {
  
  containerCartProducts.classList.toggle("hidden-cart");
  //limpiamos todo dentro de nuestro arreglo del carrito
  rowProduct.innerHTML = ""

  console.log("infoCart: ", infoCart)

  if(infoCart.recordset == 0){
    console.log("Carro vacio")
    cartTotal.style.display = "none"
  }else{
    showHTML();
    cartEmpty.style.display = "none"
  }
});

const showHTML = () => {

  let sumaTotal  = 0

  infoCart.recordset.forEach((product) => {

    const containerProduct = document.createElement("div");
    containerProduct.classList.add("cart-product");

    containerProduct.innerHTML = ` 
    
      <div class="info-cart-product">
        <span class="cantidad-producto-carrito">${product.quantity}</span>
        <p class="titulo-producto-carrito">${product.playera}</p>
        <span class="precio-producto-carrito">$${product.total}</span>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="icon-close"
      >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
      </svg>`;

      rowProduct.append(containerProduct)

      sumaTotal += parseFloat(product.total)
  });
  
  cartTotal.innerHTML = `
  <h3>Total:</h3>
  <span class="total-pagar">$${sumaTotal}</span>`
};

/* async function fetchDataAndRenderTemplate() {
  try {
    const response = await fetch("http://localhost:3000/playeras");
    if (!response.ok) {
      throw new Error("Error en la solicitud");
    }

    const data = await response.json();
    console.log("Datos recibidos:", data);

  } catch (error) {
    console.error("Error al obtener datos:", error);
  }
}
 */
