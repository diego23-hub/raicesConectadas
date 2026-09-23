import { useEffect, useState} from 'react';
import CardPaquete from './CardPaquete';
import {obtenerPaquetes} from '../../services/paqueteService'


function ListaPaquetes ({alSeleccionarPaquete}){
    const [paquetes, setPaquetes] = useState([]);
    const [mensaje, setMensaje] = useState("");

const consultarPaquetes = async () => {
        try {
            const datos = await obtenerPaquetes();
            setPaquetes(datos);
        }catch (error){
            console.error(error);
            setMensaje('Error consultando los paquetes')
        }
    };
    useEffect(() => {
        consultarPaquetes();
    }, []);
    return (
      <div className="lista-paquetes">
        <h2>Paquetes Turisticos</h2>


        {mensaje && <p className="mensaje">{mensaje}</p>}


        <div className="grid-paquetes">
          {paquetes.map((paquetes) => (
            <CardPaquete
              key={paquetes.id}
              paquetes={paquetes}
              alSeleccionar={alSeleccionarPaquete}
            />
          ))}
        </div>
      </div>
  );
}


export default ListaPaquetes;
