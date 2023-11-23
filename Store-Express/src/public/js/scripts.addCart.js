const productsList = document.querySelector(".contenedor");

let allPraducts = []

productsList.addEventListener("click", (e) => {
  if (e.target.classList.contains("formulario__submit")) {

      const product = document.querySelector(".contenedor")
  
      const infoProduct = {
        talla: "",
        quantity: 1,
        title: product.querySelector("#title").textContent,
        price: product.querySelector("#price").textContent
      }
  }

  console.log(allPraducts)

});
