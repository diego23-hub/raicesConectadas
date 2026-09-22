const URL_API = 'http://localhost:3001/destinos';

export const obtenerDestinos = async () => {
    const respuesta = await fetch(URL_API);

    if (!respuesta.ok){
        throw new Error ('Error consultando destinos');
    }
    return await respuesta.json();
};

