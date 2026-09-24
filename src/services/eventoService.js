
const URL_API = 'http://localhost:3001/eventos';

export const obtenerEventos = async () => {
  const respuesta = await fetch(URL_API);

  if (!respuesta.ok) {
    throw new Error('Error consultando eventos');
  }

  return await respuesta.json();
};