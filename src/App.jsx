import './App.css';
import NavBar from './components/NavBar/index.jsx';
import ItemListContainer from '../src/pages/ItemListContainer'
import ItemDetailContainer from '../src/pages/ItemDetailContainer';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">

      {/* <NavBar /> */}
      {/* <ItemListContainer /> */}  
      {/* Comentado para dejar visible sólo ItemDetailContainer */}
      {/* <ItemDetailContainer/> */}
    
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer /> }/>
        <Route path='/catalogo/:categoryId' element={<ItemListContainer />} />
        <Route path='/item/:id' element={<ItemDetailContainer /> }/>
      </Routes> 
      
    </div>
  );
}

export default App;
