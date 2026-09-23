const URL_API = 'http://localhost:3001/paquetes';


const paquetesIniciales = [
 
  { id: 1, nombre: "Aguadas, Caldas", precio: 950000, descripcion: "Cuna del pasillo colombiano y tierra de la cultura cafetera, famosa por la calidez de su gente y la tejeduría artesanal del icónico sombrero aguadeño. Vive una experiencia de 3 días y 2 noches entre fincas cafeteras, talleres interactivos con maestras artesanas y catas de café premium." },
  { id: 2, nombre: "Barichara, Santander", precio: 1200000, descripcion: "Considerado el pueblo más lindo de Colombia, destaca por sus calles empedradas, su arquitectura colonial impecable y su ancestral técnica de construcción en tapia pisada. Disfruta de 3 días y 2 noches de desconexión total en hotel boutique, caminata ecológica por el Camino Real a Guane y taller de tallado en piedra." },
  { id: 3, nombre: "Ciénaga, Magdalena", precio: 1100000, descripcion: "Capital del realismo mágico, un destino costero impregnado de historia bananera, arquitectura caribeña y leyendas folclóricas que inspiraron a Gabriel García Márquez. Vive 3 días y 2 noches descubriendo la arquitectura bananera y recorriendo en lancha los pueblos palafitos de la Ciénaga Grande." },
  { id: 4, nombre: "Jardín, Antioquia", precio: 1100000, descripcion: "Tesoro del suroeste antioqueño que conserva intacta la arquitectura de la colonización paisa, con balcones coloridos y una plaza vibrante. Incluye pasadía de aventura y tradición con transporte desde Medellín, cabalgata, caminata ecológica y visita a la Cueva del Esplendor." },
  { id: 5, nombre: "Guadalajara de Buga, Valle del Cauca", precio: 490000, descripcion: "Uno de los centros religiosos más importantes del país, hogar de la Basílica del Señor de los Milagros y un centro histórico colonial muy bien conservado. Disfruta de 2 días y 1 noche con visita guiada a la basílica, museos religiosos y cata de dulces en hacienda azucarera." },
  { id: 6, nombre: "Jericó, Antioquia", precio: 680000, descripcion: "Pueblo de paisajes montañosos espectaculares, famoso por ser la cuna de la Madre Laura y por la fabricación artesanal del tradicional carriel antioqueño. Vive un fin de semana con visita guiada al santuario, taller con maestro guarnielero y parapente sobre el cañón del río Cauca." },
  { id: 7, nombre: "Monguí, Boyacá", precio: 780000, descripcion: "Famoso por sus calles de piedra y arquitectura franciscana, reconocido mundialmente por la fabricación artesanal de balones cosidos a mano. Disfruta de 3 días y 2 noches con subida al páramo y taller para crear tu propio balón de fútbol." },
  { id: 8, nombre: "Honda, Tolima", precio: 850000, descripcion: "Conocida como la ciudad de los puentes, fue el principal puerto fluvial de la colonia y conserva una arquitectura andaluza única a orillas del río Magdalena. Vive 3 días y 2 noches recorriendo puentes históricos, calles coloniales y paseos en canoa con pescadores locales." },
  { id: 9, nombre: "Playa de Belén, Norte de Santander", precio: 820000, descripcion: "Un oasis de paz con fachadas blancas y zócalos rojizos, puerta de entrada al impresionante paisaje del Parque Nacional Natural Los Estoraques. Vive 3 días y 2 noches explorando gigantescas formaciones rocosas y disfrutando de la tranquilidad del pueblo." },
  { id: 10, nombre: "San Juan Girón, Santander", precio: 550000, descripcion: "Monumento nacional caracterizado por calles empedradas, paredes blancas y puentes de calicanto que transportan a la época colonial. Ideal para un plan romántico de fin de semana con cena privada, recorrido de mitos y leyendas y ruta del dulce tradicional." },
  { id: 11, nombre: "Santa Cruz de Mompox, Bolívar", precio: 1650000, descripcion: "Isla flotante sobre el río Magdalena suspendida en el tiempo, famosa por su música, historia libertaria y la sofisticada técnica artesanal de filigrana en oro y plata. Vive una experiencia exclusiva de 4 días y 3 noches con taller de joyería y atardecer en bote por el río." },
  { id: 12, nombre: "Santa Fe de Antioquia, Antioquia", precio: 180000, descripcion: "Antigua capital del departamento y joya arquitectónica colonial de clima cálido, custodiada por el histórico Puente de Occidente. Disfruta de un pasadía premium con recorrido histórico, almuerzo típico y tarde de descanso en hostería con piscina." },
  { id: 13, nombre: "Salamina, Caldas", precio: 950000, descripcion: "Conocida como la Ciudad Luz de Caldas, destaca por su arquitectura de colonización y sus espectaculares trabajos de madera tallada. Vive 3 días y 2 noches explorando el pueblo y viajando en Jeep Willys hacia el Valle de la Samaria para admirar las palmas de cera." },
  { id: 14, nombre: "El Socorro, Santander", precio: 790000, descripcion: "Cuna de la Revolución de los Comuneros y de la Independencia de Colombia, llena de monumentos históricos e iglesias imponentes. Vive 3 días y 2 noches entre historia, senderismo y catación en haciendas de café orgánico." },
  { id: 15, nombre: "Guaduas, Cundinamarca", precio: 420000, descripcion: "Parte fundamental de la Ruta Mutis y lugar de nacimiento de Policarpa Salavarrieta, con casas de teja de barro y cercanía al histórico Camino Real. Ideal para una escapada de fin de semana desde Bogotá con visitas culturales y miradores naturales." },
  { id: 16, nombre: "Santa Cruz de Lorica, Córdoba", precio: 920000, descripcion: "Conocida como la Ciudad Antigua y Señorial, mezcla arquitectura republicana y caribeña con influencia sirio-libanesa. Vive 3 días y 2 noches de turismo gastronómico, aprendizaje de tejido en caña flecha y sabores de cocina árabe-caribeña." },
  { id: 17, nombre: "Pore, Casanare", precio: 1450000, descripcion: "Único Pueblo Patrimonio de los Llanos Orientales, famoso por sus ruinas jesuitas y su importancia histórica en la campaña libertadora. Vive 3 días y 2 noches de aventura extrema con safari llanero y recorridos por paisajes naturales únicos." }




];


async function sembrarPaquetes() {
  for (const paquetes of paquetesIniciales) {
    const respuesta = await fetch(URL_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(paquetes)
    });


    const creado = await respuesta.json();
    console.log('Creado:', creado.nombre, '- id:', creado.id);
  }


  console.log('¡Listo! paquetes sembrados en db.json');
}


sembrarPaquetes();
