import './App.css';
import Header from './componentes/Header';
import Home from './componentes/Home';
import Productos from './componentes/Productos';
import About from './componentes/About';
import Formulario from './componentes/Formulario';
import Footer from './componentes/Footer';
import { Routes, Route } from 'react-router-dom'
import {ProductosContext, ProductosProvider} from './context/productosContext'
import Ingresar from './componentes/Ingresar';

console.log(ProductosContext);


function App() {

//const todasCategorias = ['Todas',...new Set(articulos.map(articulo => articulo.categoria))];


//const [categorias, setCategorias] = useState(todasCategorias)
//const [articles, setArticles] = useState(articulos)

  return (
     
      <div className="App">
        <ProductosProvider> 
          <Header />
           <Routes>
            <Route>
              <Route path='/' element={ <Home />} />
              <Route path='/productos' element={<Productos />} />
              <Route path='/about' element={<About />} />
              <Route path='/contacto' element={<Formulario />} />
              <Route path='/ingresar' element={<Ingresar />} />
            </Route>
            
          </Routes>  
        
          
          <Footer />
          
        </ProductosProvider>

      </div>
    
    
  );
}

export default App;
