
import { useEffect, useState} from 'react';
import CardPaquetes from './CardPaquetes';
import {obtenerPaquetes} from '../../services/paqueteService'


function ListaPaquetes (){
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
        {destinos.map((paquetes) => (
          <CardPaquetes
            key={paquetes.id}
            paquetes={paquetes}
          />
        ))}
      </div>
    </div>
  );
}


export default ListaPaquetes;