const URL_API = 'http://localhost:3001/paquetes';


export const obtenerPaquetes = async () => {
    const respuesta = await fetch(URL_API);


    if (!respuesta.ok){
        throw new Error ('Error consultando paquetes');
    }
    return await respuesta.json();
};
