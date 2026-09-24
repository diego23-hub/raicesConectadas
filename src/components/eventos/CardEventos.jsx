// src/components/eventos/CardEvento.jsx

function CardEvento({ evento }) {
  return (
    <div className="card-evento">
      <h3>{evento.nombre}</h3>
      <span className="tipo-evento">{evento.tipoEvento}</span>
      <p>{evento.descripcion}</p>
      <p className="fechas-evento">
        {evento.fechaInicio} - {evento.fechaFin}
      </p>
    </div>
  );
}

export default CardEvento;