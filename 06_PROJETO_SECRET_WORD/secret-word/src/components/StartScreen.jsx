import "./StartScreen.css"

import useSound from 'use-sound'
import abertura from '../assets/sounds/abertura.mp3'

const StartScreen = ({startGame}) => {
  const [aberturaJogo] = useSound(abertura, {interrupt: true});
  aberturaJogo()
  return (
    <div className="start">
        <h1>Secret Word</h1>
        <p>Clique no botão abaixo para começar a jogar</p>
        <button className="btn" onClick={startGame}>Jogar!</button>
    </div>
  )
}

export default StartScreen