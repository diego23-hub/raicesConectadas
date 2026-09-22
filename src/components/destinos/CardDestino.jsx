function CardDestino ({destino}){
    return (
        <div className="card-destino">
            <h3>{destino.nombre}</h3>
            <span className="tipo-destino">{destino.tipo}</span>
            <p>{destino.descripcion}</p>
        </div>
    );
}

export default CardDestino;