import { useState } from 'react';
import ListaDestino from "./components/destinos/ListaDestinos";
import FormularioLogin from './components/clientes/FormularioLogin';
import FormularioRegistro from './components/clientes/FormularioRegistro';
import './App.css';
import ListaPaquetes from './components/paquetes/ListaPaquetes';
import FormularioReserva from './components/reservas/FormularioReserva';
//import ListaProveedores from './components/proveedores/ListaProveedores';


function App() {
  const [vista, setVista] = useState('inicio');
  const [clienteActivo, setClienteActivo] = useState(null);
  const [paqueteSeleccionado, setPaqueteSeleccionado] = useState(null);

  return (
    <>
      <section id="busqueda">
        <nav className='navbar'>
          <div className='logo'>Raíces conectadas</div>
          <ul className='nav-links'>
            <li><a href='#inicio' onClick={() => setVista('inicio')}>Inicio</a></li>
            <li><a href='#login' onClick={() => setVista('login')}>Inicio de sesión</a></li>
            <li><a href='#registro' onClick={() => setVista('registro')}>Registro de usuarios</a></li>
            <li><a href='#destinos' onClick={() => setVista('destinos')}>Destinos</a></li>
            <li><a href='#paquetes' onClick={() => setVista('paquetes')}>Paquetes</a></li>
            <li><a href='#eventos' onClick={() => setVista('eventos')}>Eventos</a></li>
            <li><a href='#reservas' onClick={() => setVista('reservas')}>Haz una reserva</a></li>
            {/*<li><a href='#proveedores' onClick={() => setVista('proveedores')}>Conoce los proveedores</a></li>*/}
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

        {vista === 'login' && <FormularioLogin />}

        {vista === 'destinos' && <ListaDestino />}

        {vista === 'paquetes' && <ListaPaquetes />}

        {vista === 'eventos' && (
          <div>
            <h2>Eventos</h2>
            <p>Próximamente...</p>
          </div>
        )}
        {vista === 'reservas' && (clienteActivo && paqueteSeleccionado ? (
          <FormularioReserva
            clienteActivo={clienteActivo}
            paquete={paqueteSeleccionado}
            alReservar={() => setVista('inicio')}
            />
        ):(
          <p> Debes iniciar sesión y elegir un paquete antes de reservar.</p>
        )
        )}

        {/*{vista === 'proveedores' && <ListaProveedores />} */}
      </main>
    </>
  );
}
export default App;
