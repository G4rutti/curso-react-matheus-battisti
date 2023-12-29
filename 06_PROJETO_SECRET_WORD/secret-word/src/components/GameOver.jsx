import "./GameOver.css"

const GameOver = ({resetGame, score}) => {
  return (
    <div className="endGame">
      <h1>Fim de jogo</h1>
      <h2>Sua pontuação foi: <span>{score}</span></h2>
        <button onClick={resetGame}>Clique aqui!</button>
    </div>
  )
}

export default GameOver