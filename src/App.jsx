import { useState } from 'react';
import ListaDestino from './components/destinos/ListaDestinos';
import ListaPaquetes from './components/paquetes/ListaPaquetes';
import FormularioLogin from './components/clientes/FormularioLogin';
import FormularioRegistro from './components/clientes/FormularioRegistro';
import FormularioReserva from './components/reservas/FormularioReserva';
import ListaReservas from './components/reservas/ListaReservas';
import ListaProveedores from './components/proveedores/ListaProveedores';
import './App.css';

function App() {
  const [vista, setVista] = useState('inicio');
  const [clienteActivo, setClienteActivo] = useState(null);
  const [paqueteElegido, setPaqueteElegido] = useState(null); 

  const manejarInicioSesion = (cliente) => {
    setClienteActivo(cliente);
    setVista('inicio');
  };

  const cerrarSesion = () => {
    setClienteActivo(null);
    setVista('inicio');
  };

  const iniciarReserva = (paquete) => {
    if (!clienteActivo) {
      setVista('login');
      return;
    }
    setPaqueteElegido(paquete);
    setVista('reservar');
  };

  const terminarReserva = () => {
    setPaqueteElegido(null);
    setVista('reserva'); 
  };

  return (
    <>
      <section id="center">
        <nav className='navbar'>
          <div className='logo'>Raíces conectadas</div>
          <ul className='nav-links'>
            <li><a href='#inicio' onClick={() => setVista('inicio')}>Inicio</a></li>

            {!clienteActivo && (
              <>
                <li><a href='#login' onClick={() => setVista('login')}>Inicio de sesión</a></li>
                <li><a href='#registro' onClick={() => setVista('registro')}>Registro de usuarios</a></li>
              </>
            )}

            {clienteActivo && (
              <>
                <li><a href='#reserva' onClick={() => setVista('reserva')}>Mis reservas</a></li>
                <li><a href='#' onClick={cerrarSesion}>Cerrar sesión ({clienteActivo.nombres})</a></li>
              </>
            )}

            <li><a href='#destinos' onClick={() => setVista('destinos')}>Destinos</a></li>
            <li><a href='#paquetes' onClick={() => setVista('paquetes')}>Paquetes</a></li>
            <li><a href='#proveedores' onClick={() => setVista('proveedores')}>Proveedores</a></li>
          </ul>
        </nav>
      </section>

      <main className='content'>
        {vista === 'inicio' && (
          <div>
            <h2>Bienvenid@ a Raíces conectadas</h2>
            <p>Descubre los bellos pueblos patrimoniales colombianos</p>
          </div>
        )}

        {vista === 'registro' && <FormularioRegistro />}

        {vista === 'login' && (
          <FormularioLogin alIniciarSesion={manejarInicioSesion} />
        )}

        {vista === 'destinos' && <ListaDestino />}

        {vista === 'paquetes' && <ListaPaquetes alReservar={iniciarReserva} />}

        {vista === 'reservar' && paqueteElegido && (
          <FormularioReserva
            clienteActivo={clienteActivo}
            paquete={paqueteElegido}
            alReservar={terminarReserva}
          />
        )}

        {vista === 'reserva' && clienteActivo && (
          <ListaReservas clienteActivo={clienteActivo} />
        )}

        {vista === 'proveedores' && <ListaProveedores />}
      </main>
    </>
  );
}

export default App;