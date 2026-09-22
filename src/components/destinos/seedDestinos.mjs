const URL_API = 'http://localhost:3001/destinos';

const destinosIniciales = [
    {
    nombre: "SAN FÉLIX",
    tipo: "PATRIMONIAL",
    descripcion: "Un destino popular para el parapente con vistas panorámicas increíbles del Valle de Aburrá."
  },
  {
    nombre: "SANTA FE DE ANTIOQUIA",
    tipo: "PATRIMONIAL",
    descripcion: "Ciudad colonial conocida por su arquitectura de la época republicana, calles empedradas y el famoso Puente de Occidente."
  },
  {
    nombre: "VILLA DE LEYVA",
    tipo: "PATRIMONIAL",
    descripcion: "Famoso por su inmensa plaza principal empedrada, edificios coloniales bien preservados y su cercanía a yacimientos fósiles."
  },
  {

    nombre: "BARICHARA",
    tipo: "PATRIMONIAL",
    descripcion: "Considerado uno de los pueblos más lindos de Colombia, destaca por sus construcciones en piedra labrada y sus talleres artesanales."
  },
  {

    nombre: "MOMPOX",
    tipo: "PATRIMONIAL",
    descripcion: "Isla fluvial rodeada por el río Magdalena, joya arquitectónica colonial y cuna de la filigrana en oro y plata."
  },
  {
    nombre: "JERICÓ",
    tipo: "PATRIMONIAL",
    descripcion: "Pueblo de arraigo religioso y cafetero, famoso por la fabricación del carriel antioqueño y el santuario de la Madre Laura."
  }

];

async function sembrarDestinos() {
  for (const destino of destinosIniciales) {
    const respuesta = await fetch(URL_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(destino)
    });

    const creado = await respuesta.json();
    console.log('Creado:', creado.nombre, '- id:', creado.id);
  }

  console.log('¡Listo! Destinos sembrados en db.json');
}

sembrarDestinos();