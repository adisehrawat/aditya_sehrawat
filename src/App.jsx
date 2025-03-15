
import './css/App.css'
import Background from './components/Background'
import NavBar from './components/NavBar'
import Intro from './components/Intro'

function App() {
  return (
    <>
    <Background></Background>
    <NavBar className="z-50"></NavBar>
    <Intro></Intro>
    </>
  )
}

export default App
