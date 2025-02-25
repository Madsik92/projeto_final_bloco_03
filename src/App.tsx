import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home"
import ListarCategorias from "./components/categorias/listacategorias/ListarCategorias";
import FormCategoria from "./components/categorias/formcategorias/FormCategoria";
import DeletarCategoria from "./components/categorias/deletecategorias/DeletarCategoria";

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/> 
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/categorias" element={<ListarCategorias />} />
            <Route path="/cadastrarcategoria" element={<FormCategoria />} />
            <Route path="/editarcategoria/:id" element={<FormCategoria />} />
            <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
          </Routes>
        </div>
        
      <Footer />
    </BrowserRouter>
      
    </>

  );
}

export default App