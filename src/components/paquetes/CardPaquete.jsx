function CardPaquetes ({paquetes}){
    const precioFormateado = paquetes.precio.toLocaleString('es-CO');
    return (
        <div className="card-paquetes">
            <h3>{paquetes.nombre}</h3>
            <span className="tipo-paquetes">{paquetes.tipo}</span>
            <p>{paquetes.descripcion}</p>
            <span className="precio-paquetes">${precioFormateado}</span>
        </div>
    );
}


export default CardPaquetes;