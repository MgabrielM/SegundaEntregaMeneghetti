import "./css/style.css"
import './components/header/NavBar'
import { ItemListContainer } from "./components/ItemListContainer"
import { Header } from "./components/header/Header"
import { Footer } from "./components/footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Hero} from "./components/Hero"
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { NotFound } from "./components/NotFound";

function App() {

  const valorCarrito = 2;

  return (
      <BrowserRouter>      
        <Header valorModificado={valorCarrito}/>
        <Routes>          
          <Route path="/"  element={
            <>
              <Hero />
              <ItemListContainer />            
            </>
          }></Route>
          <Route path="/category/:categoryId"  element={<ItemListContainer />}></Route>          
          <Route path="/item/:itemId" element={<ItemDetailContainer/>}></Route>
          <Route path="/*" element={<NotFound/>}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
  )
}

export default App
