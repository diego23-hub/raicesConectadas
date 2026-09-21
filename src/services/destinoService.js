const destinos = [
  {
    id: 1,
    idCategoria: 2,
    nombre: "SAN FÉLIX",
    tipo: "PATRIMONIAL",
    descripcion: "Un destino popular para el parapente con vistas panorámicas increíbles del Valle de Aburrá.",
  },
  {
    id: 2,
    idCategoria: 7,
    nombre: "SANTA FE DE ANTIOQUIA",
    tipo: "PATRIMONIAL",
    descripcion: "Ciudad colonial conocida por su arquitectura de la época republicana, calles empedradas y el famoso Puente de Occidente.",
  },
  {
    id: 3,
    idCategoria: 1,
    nombre: "VILLA DE LEYVA",
    tipo: "PATRIMONIAL",
    descripcion: "Famoso por su inmensa plaza principal empedrada, edificios coloniales bien preservados y su cercanía a yacimientos fósiles.",
  },
  {
    id: 4,
    idCategoria: 6,
    nombre: "BARICHARA",
    tipo: "PATRIMONIAL",
    descripcion: "Considerado uno de los pueblos más lindos de Colombia, destaca por sus construcciones en piedra labrada y sus talleres artesanales.",
  },
  {
    id: 5,
    idCategoria: 6,
    nombre: "MOMPOX",
    tipo: "PATRIMONIAL",
    descripcion: "Isla fluvial rodeada por el río Magdalena, joya arquitectónica colonial y cuna de la filigrana en oro y plata.",
  },
  {
    id: 6,
    idCategoria: 4,
    nombre: "JERICÓ",
    tipo: "PATRIMONIAL",
    descripcion: "Pueblo de arraigo religioso y cafetero, famoso por la fabricación del carriel antioqueño y el santuario de la Madre Laura.",
  },
];
export const obtenerDestinos = () => destinos;
export const obtenerDestinoPorId = (id) => destinos.find((d) => d.id === id);