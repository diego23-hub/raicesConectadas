// esta es la capa que habla directamente con el back para proveedores
const URL_API = 'http://localhost:3001/proveedores';
// dicha url apunta al json server

// GET, trae a todos los proveedores
export const obtenerProveedores = async () => {
  const respuesta = await fetch(URL_API);

  if (!respuesta.ok) {
    throw new Error('Error consultando proveedores');
  }

  return await respuesta.json();
};

// POST, para registrar un nuevo proveedor
export const crearProveedor = async (proveedor) => {
  const respuesta = await fetch(URL_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(proveedor)
  });

  if (!respuesta.ok) {
    throw new Error('Error creando el proveedor');
  }

  return await respuesta.json();
};

// PUT, actualiza a un proveedor existente por su id
export const actualizarProveedor = async (id, proveedor) => {
  const respuesta = await fetch(`${URL_API}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(proveedor)
  });

  if (!respuesta.ok) {
    throw new Error('Error actualizando el proveedor');
  }

  return await respuesta.json();
};

// DELETE, elimina a un proveedor por su id
export const eliminarProveedor = async (id) => {
  const respuesta = await fetch(`${URL_API}/${id}`, {
    method: 'DELETE'
  });

  if (!respuesta.ok) {
    throw new Error('Error eliminando el proveedor');
  }

  return true;
};