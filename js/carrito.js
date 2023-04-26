const productoBurger = document.getElementById("container-burgers");
const productoBebidas = document.getElementById("container-bebidas");
const productoSalsas = document.getElementById("container-salsas");

let carrito = [];

productoBurger.addEventListener("click", (e) => {
  e.target.classList.contains("agregar") &&
    validarProductoEnCarrito(e.target.id, e.target.name);
});

productoBebidas.addEventListener("click", (e) => {
  e.target.classList.contains("agregar") &&
    validarProductoEnCarrito(e.target.id, e.target.name);
});

productoSalsas.addEventListener("click", (e) => {
  e.target.classList.contains("agregar") &&
    validarProductoEnCarrito(e.target.id, e.target.name);
});

//Funcion que busca el producto en el stock y lo agrega al carrito o aumenta su cantidad en caso de ya estar en el
const validarProductoEnCarrito = (productoId, productoTipo) => {
  const productoRepetido = carrito.find(
    (producto) => producto.id == productoId
  );
  if (!productoRepetido) {
    if (productoTipo === "hamburguesaClasica") {
      fetch("../data/clasicas.json")
        .then((resp) => resp.json())
        .then((data) => {
          const producto = data.find((producto) => producto.id == productoId);
          carrito.push(producto);
          pintarProductoCarrito(producto);
          actualizarTotalCarrito(carrito);
        });
    } else if (productoTipo === "hamburguesaEspecial") {
      fetch("../data/especiales.json")
        .then((resp) => resp.json())
        .then((data) => {
          const producto = data.find((producto) => producto.id == productoId);
          carrito.push(producto);
          pintarProductoCarrito(producto);
          actualizarTotalCarrito(carrito);
        });
    } else if (productoTipo === "bebida") {
      fetch("../data/bebidas.json")
        .then((resp) => resp.json())
        .then((data) => {
          const producto = data.find((producto) => producto.id == productoId);
          carrito.push(producto);
          pintarProductoCarrito(producto);
          actualizarTotalCarrito(carrito);
        });
    } else {
      fetch("../data/salsas.json")
        .then((resp) => resp.json())
        .then((data) => {
          const producto = data.find((producto) => producto.id == productoId);
          carrito.push(producto);
          pintarProductoCarrito(producto);
          actualizarTotalCarrito(carrito);
        });
    }
  } else {
    productoRepetido.cantidad++;
    const cantidadProducto = document.getElementById(
      `cantidad${productoRepetido.id}`
    );
    cantidadProducto.innerText = `Cantidad: ${productoRepetido.cantidad}`;
    actualizarTotalCarrito(carrito);
  }
};

//Funcion que muestra el producto en el carrito
const pintarProductoCarrito = (producto) => {
  const contenedor = document.getElementById("carrito-contenedor");
  const div = document.createElement("div");
  div.classList.add("productoEnCarrito");
  div.innerHTML = `
    <p>${producto.nombre} </p>
    <p> Precio: ${producto.precio}$ </p>
    <p id="cantidad${producto.id}"> Cantidad: ${producto.cantidad} </p>
    <button class="btn waves-effect waves-light boton-eliminar" value="${producto.id}">X</button>
`;
  contenedor.appendChild(div);
};

//Funcion que actualiza el total del carrito
const actualizarTotalCarrito = (carrito) => {
  const totalCantidad = carrito.reduce((acc, item) => acc + item.cantidad, 0);
  const totalCompra = carrito.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0
  );

  pintarTotalesCarrito(totalCantidad, totalCompra);
  guardarCarritoStorage(carrito);
};

//Funcion que muestra el contador y precio total del carrito
const pintarTotalesCarrito = (totalCantidad, totalCompra) => {
  const contadorCarrito = document.getElementById("contador-carrito");
  const precioTotal = document.getElementById("precioTotal");

  contadorCarrito.innerText = totalCantidad;
  precioTotal.innerText = totalCompra;
};

//Funcion que elimina un producto del carrito
const eliminarProductoCarrito = (productoId) => {
  const productoIndex = carrito.findIndex(
    (producto) => producto.id == productoId
  );
  carrito.splice(productoIndex, 1);
  actualizarCarrito(carrito);
  actualizarTotalCarrito(carrito);
};

//Funcion que actualiza el carrito de compras
const actualizarCarrito = (carrito) => {
  const contenedor = document.getElementById("carrito-contenedor");
  contenedor.innerHTML = "";
  carrito.forEach((producto) => {
    const div = document.createElement("div");
    div.classList.add("productoEnCarrito");
    div.innerHTML = `
    <p>${producto.nombre} </p>
    <p> Precio: ${producto.precio}$ </p>
    <p id="cantidad${producto.id}"> Cantidad:${producto.cantidad} </p>
    <button class="btn waves-effect waves-light boton-eliminar" value="${producto.id}">X</button>
`;
    contenedor.appendChild(div);
  });
};

//Funcion que vacia el carrito de compras
const vaciarCarrito = () => {
  carrito.splice(0, carrito.length);
  actualizarCarrito(carrito);
  actualizarTotalCarrito(carrito);
};

//Funcion para finalizar la compra
const finalizarCompra = () => {
  carrito.length > 0
    ? Swal.fire({
        title: "Compra finalizada",
        text: "Gracias por elegir Burgrill",
        icon: "success",
        confirmButtonText: "Cerrar",
      }) && vaciarCarrito()
    : Swal.fire({
        title: "Su carrito esta vacio",
        text: "Ingrese algun producto para finalizar su compra",
        icon: "error",
        confirmButtonText: "Cerrar",
      });
};

//Funcion que guarda el carrito en el storage
const guardarCarritoStorage = (carrito) => {
  localStorage.setItem("carrito", JSON.stringify(carrito));
};

//Funcion que recupera el carrito del storage
const obtenerCarritoStorage = () => {
  const carrito = JSON.parse(localStorage.getItem("carrito"));
  return carrito;
};
