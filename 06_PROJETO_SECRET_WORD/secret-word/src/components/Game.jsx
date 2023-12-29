import { useState, useRef } from "react"
import "./Game.css"

const Game = ({
  verifyLetter, 
  pickedWord,
  pickedCategory,
  wordLetter,
  guessedLetters,
  wrongLetters,
  guesses,
  score
}) => {
  const [letter, setLetter] = useState('')
  const letterInputRef = useRef('')

  const handleSubmit = (e) => {
    e.preventDefault()

    verifyLetter(letter)
    setLetter('')
    letterInputRef.current.focus()
  }

  return (
    <div className="game">
      <h1>Adivinhe a palavra: </h1>
      <div className="wordContainer">
        {wordLetter.map((letter, i) => (
          guessedLetters.includes(letter) ? 
          (<span key={i} className='letter'>{letter}</span>) :
          (<span key={i} className='blankSquare'></span>)          
        ))}
      </div>
      <div className="mainStats">
        <div className="statsContainer">
          <div className="positiveStats">
              <p className="points">
                <span>Pontuação: {score}</span>
              </p>
              <h3 className="tip">
                Dica sobre a palavra: <span>{pickedCategory}</span>
              </h3>
          </div>
          <div className="negativeStats">
              <h3>Você ainda tem {guesses} tentativa(s).</h3>
              <div className="wrongLetterContainer">
                <h3>Letras já utilizadas:</h3>
                {wrongLetters.map((letter,i) => (
                  <span key={i}>{letter}, </span>
                ))}
              </div>
          </div>
        </div>
        <div className="letterContainer">
            <h2>Tente advinhar uma letra da palavra:</h2>
            <form onSubmit={handleSubmit}>
              <input type="text" name="letter" maxLength="1" required onChange={(e) => setLetter(e.target.value)} value={letter} ref={letterInputRef}/>
              <button>Jogar</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Game