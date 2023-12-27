import FirstComponent from './components/FirstComponent.jsx'
import TemplateExpressions from './components/TemplateExpression.jsx'
import MyComponent from './components/MyComponent.jsx'
import MyEvent from './components/Events.jsx'

import './App.css'

function App() {

  return (
    <div>
      <h1>Hello World</h1>
      <FirstComponent/>
      <TemplateExpressions/>
      <MyComponent/>
      <MyEvent/>
    </div>
  )
}

export default App
