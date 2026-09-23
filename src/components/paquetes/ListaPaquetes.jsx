
import { useEffect, useState} from 'react';
<<<<<<< HEAD
import CardPaquetes from './CardPaquete';
=======
import CardPaquete from './CardPaquete';
>>>>>>> cdbc94e1c6326fb16378708ac07032392b2579df
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
<<<<<<< HEAD
        {paquetes.map((paquete) => (
=======
        {paquetes.map((paquetes) => (
>>>>>>> cdbc94e1c6326fb16378708ac07032392b2579df
          <CardPaquetes
            key={paquete.id}
            paquete={paquete}
          />
        ))}
      </div>
    </div>
  );
}


export default ListaPaquetes;
