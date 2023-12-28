const CarDetails = ({brand, km, color}) => {
  return (
    <div>
        <h1>Detalhes do carro:</h1>
        <ul>
            <li>Marca: {brand}</li>
            <li>Quilometragem: {km}km(s) rodados</li>
            <li>Cor: {color}</li>
        </ul>
    </div>
  )
}

export default CarDetails