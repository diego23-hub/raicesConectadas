function CardPaquetes ({paquete,alReservar}){
    const precioFormateado = paquete.precio.toLocaleString('es-CO');
    return (
        <div className="card-paquetes">
            <h3>{paquete.nombre}</h3>
            <span className="tipo-paquetes">{paquete.tipo}</span>
            <p>{paquete.descripcion}</p>
            <span className="precio-paquetes">${precioFormateado}</span>
            {alReservar && (
        <button onClick={() => alReservar (paquete)}>Reservar</button>
        )}
        </div>
    );
}


export default CardPaquetes;