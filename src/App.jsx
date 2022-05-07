import './App.css';
import NavBar from './components/NavBar/index.jsx';
import ItemListContainer from '../src/pages/ItemListContainer'
import ItemDetailContainer from '../src/pages/ItemDetailContainer';
import Cart from '../src/pages/Cart';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer /> }/>
          <Route path='/catalogo/:categoryId' element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart/> }/>
        </Routes> 
    </div>
  );
}

export default App;
