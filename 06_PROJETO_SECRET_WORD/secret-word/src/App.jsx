// Components
import StartScreen from './components/StartScreen.jsx'
import Game from './components/Game.jsx'
import GameOver from './components/GameOver.jsx'
// CSS
import './App.css'
// React
import {useCallback, useEffect, useState} from 'react'
// Data
import {wordsList} from './data/words.jsx'

const stages = [
  {id: 1, name: "start"},
  {id: 2, name: "game"},
  {id: 3, name: "end"},
]


function App() {
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
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters, normalizedLetter
      ])
    }else{
      setWrongLetters((setWrongLetters) => [
        ...setWrongLetters, normalizedLetter
      ])

      setGuesses((actualGuesses) => actualGuesses - 1)
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
    }
  }, [guesses])

  // Checagem de vitória
  useEffect(() => {
    const uniqueLetters = [... new Set(letters)] // Deixa uma palavra com letras repetidas com uma letra só

    // condição de vitória
    if(guessedLetters.length === uniqueLetters.length){
      setScore((actualScore) => actualScore += 100)
      startGame()
    }
  }, [guessedLetters, letters, startGame]) // Monitorando letters e start game só por viadagem

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
    </div>
  )
}

export default App
