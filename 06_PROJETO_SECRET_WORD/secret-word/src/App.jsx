// Components
import StartScreen from './components/StartScreen.jsx'
import Game from './components/Game.jsx'
import GameOver from './components/GameOver.jsx'
import GotTheWord from "./components/GotTheWord.jsx"
// CSS
import './App.css'
// React
import {useCallback, useEffect, useState} from 'react'
// Data
import {wordsList} from './data/words.jsx'
// Packges externos
import useSound from 'use-sound'
import acertou from './assets/sounds/resposta-correta-efeito-sonoro.mp3'
import errou from './assets/sounds/som-de-resposta-errada.mp3'
import derrota from './assets/sounds/title.mp3'
import abertura from './assets/sounds/abertura.mp3'



const stages = [
  {id: 1, name: "start"},
  {id: 2, name: "game"},
  {id: 3, name: "end"},
  {id: 4, name: "acertou"},
]


function App() {

  // Sons:
  const [acertouResposta] = useSound(acertou, {interrupt: true});
  const [errouResposta] = useSound(errou, {interrupt: true})
  const [perdeu] = useSound(derrota, {interrupt: true})
  const [aberturaJogo] = useSound(abertura, {interrupt: true})

  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)

  // Variáveis das palavras:
  const [pickedWord, setPickedWord] = useState("")
  const [pickedCategory, setPickedCategory] = useState("")
  const [letters, setLetters] = useState([])

  const [guessedLetters, setGuessedLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [guesses, setGuesses] = useState(3)
  const [score, setScore] = useState(0)


  // funções para escolher:
  const pickWordAndCategory = useCallback(() => {
    // Categoria
    const categories = Object.keys(words) // Serve para pegar a chave do dicionário ex: corpo.
    const category = categories[Math.floor(Math.random() * Object.keys(words).length)] // escolhe uma categoria aleatória com base no tamanho da lista

    // Palavra
    const word = words[category][Math.floor(Math.random() * words[category].length)] // escolhe uma palavra aleatória com base no tamanho da lista da categoria
    
    return {word, category}
  }, [words])

  // Alternando estágios do jogo:
  const startGame = useCallback(() => {
    clearAllStates()
    const {word, category} = pickWordAndCategory()

    // Dividir as letras da palavra em um array:
    let wordLetter = word.split('')
    wordLetter = wordLetter.map((l) => l.toLowerCase())

    // Setando os states
    setPickedWord(word)
    setPickedCategory(category)
    setLetters(wordLetter)

    setGameStage(stages[1].name)
  }, [pickWordAndCategory])

  const resetGame = () => {
    setScore(0)
    setGuesses(3)
    setGameStage(stages[0].name)
  }

  // Process the letter input
  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toLowerCase()

    // Ver se a letra já foi utilizada:
    if(guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)){
      return
    }

    // Inserir letra ou remover chance:
    if(letters.includes(normalizedLetter)){
      acertouResposta()
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters, normalizedLetter
      ])
    }else{
      setWrongLetters((setWrongLetters) => [
        ...setWrongLetters, normalizedLetter
        
      ])

      setGuesses((actualGuesses) => actualGuesses - 1)
      if(guesses > 1){
        errouResposta()
      }
    }

    console.log(guessedLetters)
    console.log(wrongLetters)
    console.log(letter)
    // setGameStage(stages[2].name)
  }

  const clearAllStates = () => {
      setGuessedLetters([])
      setWrongLetters([])
  }
    

  // Checagm de derrota
  useEffect(() => {
    if(guesses <= 0){
      // resetar todos os estados:
      clearAllStates()
      setGameStage(stages[2].name)
      perdeu()
    }
  }, [guesses])

  // Checagem de vitória
  const checkVictoryCondition = useCallback(() => {
    const uniqueLetters = [...new Set(letters)];
    if (guessedLetters.length === uniqueLetters.length) {
      setScore((actualScore) => actualScore += 100)
      setGameStage(stages[3].name);
      
    } 
  }, [guessedLetters, letters, startGame]);
  
  // Checagem de vitória
  useEffect(() => {
    if (gameStage === stages[1].name) {
      checkVictoryCondition();
    }
  }, [checkVictoryCondition, gameStage, stages]);




  return (
    <div className='App'>
      {gameStage === "start" && <StartScreen startGame={startGame}/>}
      {gameStage === "game" && <Game 
      verifyLetter={verifyLetter}
      pickedWord={pickedWord}
      pickedCategory={pickedCategory}
      wordLetter={letters}
      guessedLetters={guessedLetters}
      wrongLetters={wrongLetters}
      guesses={guesses}
      score={score}
      />}
      {gameStage === "end" && <GameOver resetGame={resetGame} score={score}/>}
      {gameStage === "acertou" && <GotTheWord pickedWord={pickedWord} score={score} guesses={guesses} startGame={startGame}/>}
    </div>
  )
}

export default App