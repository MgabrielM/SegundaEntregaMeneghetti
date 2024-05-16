import "./css/style.css"
import './components/header/NavBar'
import { NavBar } from "./components/header/NavBar"
import { ItemListContainer } from "./components/ItemListContainer"
import { Header } from "./components/header/Header"

function App() {

  return (
    <>
      <Header />
      <ItemListContainer />
    </>
  )
}

export default App
