import './App.css'
import FirstForm from './components/FirstForm'
import FormState from './components/FormState'
import FormSelect from './components/FormSelect'

function App() {
 

  return (
  <div className="App">
    <h1>Trabalhando com Formulários</h1>
      <FirstForm/>
      <br />
      <FormState/>
      <br />
      <FormSelect/>

  </div>
  )
}

export default App