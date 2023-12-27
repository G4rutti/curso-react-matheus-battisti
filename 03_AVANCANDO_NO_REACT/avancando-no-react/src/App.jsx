import './App.css'

import Neymar from './assets/neymar02.jpg'

function App() {
  return (
    <div>
      <div>
        {/* Imagem em public*/}
        <img src="/neymar01.jpg" alt="neymar" />
      </div>
      <div>
        {/* Imagem em asset*/}
        <img src={Neymar} alt="neymar" />
      </div>
    </div>
    
  )
}

export default App
