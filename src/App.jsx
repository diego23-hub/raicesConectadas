import { useState } from 'react';
import ListaDestino from "./components/destinos/ListaDestinos";
import FormularioLogin from './components/clientes/FormularioLogin';

import './App.css';
import FormularioRegistro from './components/clientes/FormularioRegistro';

function App() {
  const [vista, setVista] = useState('inicio');

  return (
    <>
      <section id="center">
        <nav className='navbar'>
          <div className='logo'>Raíces conectadas</div>
          <ul className='nav-links'>
            <li><a href='#inicio' onClick={() => setVista('inicio')}>Inicio</a></li>
            <li><a href='#login' onClick={() => setVista('login')}>Inicio de sesión</a></li>
            <li><a href='#registro' onClick={() => setVista('registro')}>Registro de usuarios</a></li>
            <li><a href='#destinos' onClick={() => setVista('destinos')}>Destinos</a></li>
            <li><a href='#paquetes' onClick={() => setVista('paquetes')}>Paquetes</a></li>
            <li><a href='#eventos' onClick={() => setVista('eventos')}>Eventos</a></li>
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
      </main>
    </>
  );

}
export default App;