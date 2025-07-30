import './App.css'
import ChangeBackground from './components/ChangeBackground'
import NewAccess from './components/NewAccess'
import RenderPosts from './components/RenderPosts'

function App() {
  return (
    <div className="app-container">
      <ChangeBackground />
      <NewAccess />
      <RenderPosts />
    </div>
  )
}

export default App