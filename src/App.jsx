import { useState } from 'react'

import './App.css'

function App() {
  const [vista, setVista] = useState('inicio');

  return (
    <>
      <section id="center">
        <nav className='navbar'>
          <div className='logo'> Raíces conectadas</div>
          <ul className='nav-links'>
            <li><a href='#inicio' onClick={() => setVista('inicio')}>Inicio</a></li>
            <li><a href='#login' onClick={() => setVista('login')}>Registro de usuario</a></li>
            <li><a href='#destinos' onClick={() => setVista('destinos')}>Destinos</a></li>
            <li><a href='#eventos' onClick={() => setVista('eventos')}>Eventos</a></li>
          </ul>
        </nav>
      </section>

      <main className='content'>
        {vista === 'inicio' && (
          <div>
            <h2> Bienvenid@ a Raíces conectadas</h2>
            <p>Descubre los bellos pueblos patrimoniales colombianos</p>
          </div>
        )}

        {vista === 'login' && (
          <div>
            <h2> ¿Ya tienes una cuenta?</h2>
            <p>Aquí irá tu formulario de registro.</p>
          </div>
        )}

        {vista === 'destinos' && (
          <div>
            <h2> ¿Ya sabes a dónde será tu próximo destino? </h2>
            <p>Anímate y conoce estos bellos pueblos</p>
          </div>
        )}
      </main>
    </>
  )
}

export default App
