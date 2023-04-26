//Funciones para cargar los productos en el html

const cargarBurgers = async () => {
  const contenedor = document.getElementById("container-burgers");
  const div = document.createElement("div");
  div.classList.add("row");
  div.innerHTML += `
  <div>
    <h3 class="tituloTipo">Clasicas</h3>
  </div>
`;
  const clasicas = await controladorProductosClasicas();

  clasicas.forEach((producto) => {
    div.innerHTML += `
      <article class="articulo col-sm-12 col-md-6 col-lg-4">
      <div class="producto">
        <div class="imgProducto">
          <img src=${producto.img} class="img-fluid rounded-start" alt="img ${producto.tipo}" />
          <div class="boton">
            <button type="submit" class="btn-primary agregar" id=${producto.id} name=${producto.tipo}>Agregar</button>
          </div>
        </div>
        <div class="dataProducto">
          <h4 class="producto-titulo">${producto.nombre}</h4>
          <p class="producto-text">
            ${producto.desc}
          </p>
          <p class="precio">${producto.precio}$</p>
        </div>
      </div>
    </article>
    `;
    contenedor.appendChild(div);
  });

  div.innerHTML += `
      <div>
        <h3 class="tituloTipo">Especiales</h3>
      </div>
    `;

  const especiales = await controladorProductosEspeciales();
  especiales.forEach((producto) => {
    div.innerHTML += `
            <article class="articulo col-sm-12 col-md-6 col-lg-4">
            <div class="producto">
              <div class="imgProducto">
                <img src=${producto.img} class="img-fluid rounded-start" alt=img ${producto.tipo} />
                <div class="boton">
                  <button type="submit" class="btn-primary agregar" id=${producto.id} name=${producto.tipo}>Agregar</button>
                </div>
              </div>
              <div class="dataProducto">
                <h4 class="producto-titulo">${producto.nombre}</h4>
                <p class="producto-text">
                  ${producto.desc}
                </p>
                <p class="precio">${producto.precio}$</p>
              </div>
            </div>
          </article>
          `;
    contenedor.appendChild(div);
  });
};

const cargarBebidas = async () => {
  const contenedor = document.getElementById("container-bebidas");
  const div = document.createElement("div");
  div.classList.add("row");

  const bebidas = await controladorProductosBebidas();
  bebidas.forEach((producto) => {
    div.innerHTML += `
              <article class="articulo col-sm-12 col-md-6 col-lg-4">
              <div class="producto">
                <div class="imgProducto">
                  <img src=${producto.img} class="img-fluid rounded-start" alt="img ${producto.tipo}" />
                  <div class="boton">
                    <button type="submit" class="btn-primary agregar" id=${producto.id} name=${producto.tipo}>Agregar</button>
                  </div>
                </div>
                <div class="dataProducto">
                  <h4 class="producto-titulo">${producto.nombre}</h4>
                  <p class="producto-text">
                  ${producto.desc}
                  </p>
                  <p class="precio">${producto.precio}$</p>
                </div>
              </div>
            </article>
            `;
    contenedor.appendChild(div);
  });
};

const cargarSalsas = async () => {
  const contenedor = document.getElementById("container-salsas");
  const div = document.createElement("div");
  div.classList.add("row");

  const salsas = await controladorProductosSalsas();
  salsas.forEach((producto) => {
    div.innerHTML += `
        <article class="articulo col-sm-12 col-md-6 col-lg-4">
        <div class="producto">
          <div class="imgProducto">
            <img src=${producto.img} class="img-fluid rounded-start" alt=img ${producto.tipo} />
            <div class="boton">
              <button type="submit" class="btn-primary agregar" id=${producto.id} name=${producto.tipo}>Agregar</button>
            </div>
          </div>
          <div class="dataProducto">
            <h4 class="producto-titulo">${producto.nombre}</h4>
            <p class="producto-text">
            ${producto.desc}
            </p>
            <p class="precio">${producto.precio}</p>
          </div>
        </div>
      </article>
      `;

    contenedor.appendChild(div);
  });
};
