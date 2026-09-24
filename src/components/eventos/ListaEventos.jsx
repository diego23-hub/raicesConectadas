// src/components/eventos/ListaEventos.jsx

import { useEffect, useState } from 'react';
import CardEvento from './CardEventos';
import { obtenerEventos } from '../../services/eventoService';

function ListaEventos() {
  const [eventos, setEventos] = useState([]);
  const [mensaje, setMensaje] = useState('');

  const consultarEventos = async () => {
    try {
      const datos = await obtenerEventos();
      setEventos(datos);
    } catch (error) {
      console.error(error);
      setMensaje('Error consultando los eventos');
    }
  };

  useEffect(() => {
    consultarEventos();
  }, []);

  return (
    <div className="lista-eventos">
      <h2>Eventos disponibles</h2>

      {mensaje && <p className="mensaje">{mensaje}</p>}

      <div className="grid-eventos">
        {eventos.map((evento) => (
          <CardEvento key={evento.id} evento={evento} />
        ))}
      </div>
    </div>
  );
}

export default ListaEventos;