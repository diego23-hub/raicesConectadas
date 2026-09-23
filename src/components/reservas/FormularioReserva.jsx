
import { useState } from 'react';
import { crearReserva } from '../../services/reservaService';

function FormularioReserva({ clienteActivo, paquete, alReservar }) {
  const [fecha, setFecha] = useState('');
  const [cantidadPersonas, setCantidadPersonas] = useState(1);
  const [mensaje, setMensaje] = useState('');

  const guardarReserva = async (evento) => {
    evento.preventDefault();

    if (!fecha || cantidadPersonas < 1) {
      setMensaje('Completa la fecha y la cantidad de personas');
      return;
    }

    const nuevaReserva = { 
      idCliente: clienteActivo.id,
      idPaquete: paquete.id,
      fecha,
      cantidadPersonas: Number(cantidadPersonas),
      estado: 'confirmada'
    };

    try {
      await crearReserva(nuevaReserva);
      setMensaje('¡Reserva creada con éxito!');
      setFecha('');
      setCantidadPersonas(1);

      if (alReservar) alReservar(); // avisa al padre para refrescar la lista
    } catch (error) {
      console.error(error);
      setMensaje('Error creando la reserva');
    }
  };

  return (
    <form onSubmit={guardarReserva}>
      <h3>Reservar: {paquete.nombre}</h3>

      <label>
        Fecha del viaje
        <input
          type="date"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
        />
      </label>

      <label>
        Cantidad de personas
        <input
          type="number"
          min="1"
          value={cantidadPersonas}
          onChange={(e) => setCantidadPersonas(e.target.value)}
        />
      </label>

      <button type="submit">Confirmar reserva</button>

      {mensaje && <p className="mensaje">{mensaje}</p>}
    </form>
  );
}

export default FormularioReserva;