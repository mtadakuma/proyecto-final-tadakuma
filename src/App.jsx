import './App.css';
import NavBar from './components/NavBar/index.jsx';
import ItemListContainer from '../src/pages/ItemListContainer'
import ItemDetailContainer from '../src/pages/ItemDetailContainer';
import Cart from '../src/pages/Cart';
import Checkout from '../src/pages/Checkout';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/index.jsx';
function App() {
  return (
    <div className="App">
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer /> }/>
          <Route path='/catalogo/:categoryId' element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout/> }/>
      </Routes> 
      <Footer/>
    </div>
  );
}

export default App;
