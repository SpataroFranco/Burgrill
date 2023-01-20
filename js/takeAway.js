document.addEventListener("DOMContentLoaded", () => {
  cargarBurgers();
  cargarBebidas();
  cargarSalsas();
  cargarCarrito();
  
});

const cargarCarrito = () =>{
  if (localStorage.getItem("carrito")) {
    carrito = obtenerCarritoStorage();
    actualizarCarrito(carrito);
    actualizarTotalCarrito(carrito);
  }
}
