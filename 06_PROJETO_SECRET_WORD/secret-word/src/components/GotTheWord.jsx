import "./GotTheWord.css"

import fogos from "../assets/img/fogos.gif"
import ganhou from "../assets/sounds/ja-ganhou-tan-tan-tan.mp3"

import useSound from "use-sound"

const GotTheWord = ({pickedWord, score, guesses, startGame}) => {
    const [jaGanhou] = useSound(ganhou)
    jaGanhou()
  return (
    <div className="contents">
        <img src={fogos} alt="fogos de artifício"/>
        <div className="main">
            <h1>Você acertou!</h1>
            <h2>A palavra era: <span>{pickedWord}</span></h2>
            <div className="stats">
                <h2>Seu score agora é de: <span>{score}pts</span></h2>
                <h2>Você ainda tem: <span>{guesses} Tentativas</span></h2>
            </div>
            <button onClick={startGame}>Proxima Fase</button>
        </div>
    </div>
  )
}

export default GotTheWord