import { useState } from 'react';
import { crearProveedor } from '../../services/proveedorService';

const proveedorInicial = {
  nombre: '',
  correo: '',
  telefono: '',
  tipo_servicio: ''
};

function FormularioProveedor({ alRegistrar }) {
  const [proveedor, setProveedor] = useState(proveedorInicial);
  const [mensaje, setMensaje] = useState('');

  const manejarCambio = (evento) => {
    setProveedor({
      ...proveedor,
      [evento.target.name]: evento.target.value
    });
  };

  const guardarProveedor = async (evento) => {
    evento.preventDefault();

    try {
      await crearProveedor(proveedor);
      setMensaje('Proveedor registrado correctamente');
      setProveedor(proveedorInicial);

      if (alRegistrar) alRegistrar();
    } catch (error) {
      console.error(error);
      setMensaje('Error registrando el proveedor');
    }
  };

  return (
    <form onSubmit={guardarProveedor}>
      <input
        type="text"
        name="nombre"
        placeholder="Nombre o Razón Social"
        value={proveedor.nombre}
        onChange={manejarCambio}
        required
      />
      <input
        type="email"
        name="correo"
        placeholder="Correo electrónico"
        value={proveedor.correo}
        onChange={manejarCambio}
        required
      />
      <input
        type="text"
        name="telefono"
        placeholder="Teléfono"
        value={proveedor.telefono}
        onChange={manejarCambio}
        required
      />
      <input
        type="text"
        name="tipo_servicio"
        placeholder="Tipo de servicio (ej. Transporte, Hospedaje)"
        value={proveedor.tipo_servicio}
        onChange={manejarCambio}
        required
      />

      <button type="submit">Registrar Proveedor</button>

      {mensaje && <p className="mensaje">{mensaje}</p>}
    </form>
  );
}

export default FormularioProveedor;