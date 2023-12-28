import styles from "./CarInfos.module.css"

const CarInfos = ({marca, modelo, cor, preco}) => {
  return (
    <div className={styles.cardCars}>
        <h2>{modelo}</h2>
        <ul>
            <li>{marca}</li>
            <li>{cor}</li>
            <li>{preco}</li>
        </ul>
    </div>
  )
}

export default CarInfos