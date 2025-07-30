import BackgroundInput from './components/BackgroundInput.jsx';
import BackgroundText from './components/BackgroundText.jsx';
import ChangeBackground from './components/ChangeBackground.jsx';
import Login from './components/Login.jsx';
import RenderList from './components/RenderList.jsx';
function App() {

  return (
    <>
    <h1>Atividade 05 de fixação</h1>
    <h2>Componente que altera o funndo com useEffect</h2>
      <ChangeBackground />
    <h2>Componente que altera o fundo a medida que o usuário insere o nome ou código hexadecimal das cores no input</h2>
      <BackgroundInput />
    <h2>Componente que altera o fundo a medida que o usuário insere o texto no input</h2>
      <BackgroundText />
    <h2>Componente que implementa tela de Login e envia as informações para o console</h2>
      <Login />
    <h2>Componente que renderiza uma lista de itens</h2>
      <RenderList />
    </>
  )
}

export default App
