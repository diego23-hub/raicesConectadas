import { useState } from 'react';
import ListaDestino from './components/destinos/ListaDestinos';
import ListaPaquetes from './components/paquetes/ListaPaquetes';
import FormularioLogin from './components/clientes/FormularioLogin';
import FormularioRegistro from './components/clientes/FormularioRegistro';
import ListaProveedores from './components/proveedores/ListaProveedores';

import './App.css';


function App() {
  const [vista, setVista] = useState('inicio');

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
          <FormularioLogin
            alIniciarSesion={(cliente) => {
              setClienteActivo(cliente);
              setVista('inicio');
            }}
          />
        )}

        {vista === 'destinos' && <ListaDestino />}

        {vista === 'paquetes' && (
          <ListaPaquetes
            alSeleccionarPaquete={(paquete) => {
              setPaqueteSeleccionado(paquete);
              setVista('reservas');
            }}
          />
        )}
        
        {vista === 'eventos' && (
          <div>
            <h2>Eventos</h2>
            <p>Próximamente...</p>
          </div>
        )}

        {vista === 'proveedores' && <FormularioProveedor />}

      </main>
    </>
  );
}

export default App;