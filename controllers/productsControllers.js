const controladorProductosClasicas = async () => {
  const resp = await fetch("../data/clasicas.json");
  const data = await resp.json();

  return data;
};

const controladorProductosEspeciales = async () => {
  const resp = await fetch("../data/especiales.json");
  const data = await resp.json();

  return data;
};

const controladorProductosBebidas = async () => {
  const resp = await fetch("../data/bebidas.json");
  const data = await resp.json();

  return data;
};

const controladorProductosSalsas = async () => {
  const resp = await fetch("../data/salsas.json");
  const data = await resp.json();

  return data;
};
