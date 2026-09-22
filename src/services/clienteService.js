// src/services/clienteService.js

const URL_API = 'http://localhost:3001/clientes';

// GET - traer todos los clientes
export const obtenerClientes = async () => {
  const respuesta = await fetch(URL_API);

  if (!respuesta.ok) {
    throw new Error('Error consultando clientes');
  }

  return await respuesta.json();
};

// GET - buscar un cliente por correo (lo usamos para el login)
// json-server permite filtrar con query params: ?correo=valor
export const buscarClientePorCorreo = async (correo) => {
  const respuesta = await fetch(`${URL_API}?correo=${correo}`);

  if (!respuesta.ok) {
    throw new Error('Error buscando el cliente');
  }

  const clientes = await respuesta.json();

  // json-server siempre devuelve un arreglo, aunque encuentre uno solo
  // si no encontró nada, devolvemos null
  return clientes.length > 0 ? clientes[0] : null;
};

// POST - registrar un nuevo cliente
export const crearCliente = async (cliente) => {
  const respuesta = await fetch(URL_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(cliente)
  });

  if (!respuesta.ok) {
    throw new Error('Error creando el cliente');
  }

  return await respuesta.json();
};

// PUT - actualizar un cliente existente
export const actualizarCliente = async (id, cliente) => {
  const respuesta = await fetch(`${URL_API}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(cliente)
  });

  if (!respuesta.ok) {
    throw new Error('Error actualizando el cliente');
  }

  return await respuesta.json();
};

// DELETE - eliminar un cliente
export const eliminarCliente = async (id) => {
  const respuesta = await fetch(`${URL_API}/${id}`, {
    method: 'DELETE'
  });

  if (!respuesta.ok) {
    throw new Error('Error eliminando el cliente');
  }

  return true;
};