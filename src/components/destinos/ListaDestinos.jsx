import { useEffect, useState} from 'react';
import CardDestino from './CardDestino'; 
import { obtenerDestinos } from '../../services/destinoService';

function ListaDestino (){
    const [destinos, setDestinos] = useState([]);
    const [mensaje, setMensaje] = useState("");

    const consultarDestino = async () => {
        try {
            const datos = await obtenerDestinos();
            setDestinos(datos);
        }catch (error){
            console.error(error);
            setMensaje('Error consultando los destinos')
        }
    };
    useEffect(() => {
        consultarDestino();

    }, []);
    return (
    <div className="lista-destinos">
      <h2>Destinos disponibles</h2>

      {mensaje && <p className="mensaje">{mensaje}</p>}

      <div className="grid-destinos">
        {destinos.map((destino) => (
          <CardDestino
            key={destino.id}
            destino={destino}
          />
        ))}
      </div>
    </div>
  );
}

export default ListaDestino;