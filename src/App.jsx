import "./css/style.css"
import './components/header/NavBar'
import { ItemListContainer } from "./components/ItemListContainer"
import { Header } from "./components/header/Header"

function App() {

  const valorCarrito = 2;

  return (
    <>
      <Header valorModificado={valorCarrito}/>
      <ItemListContainer props={"Acá va a ir el contenido."} />
    </>
  )
}

export default App
