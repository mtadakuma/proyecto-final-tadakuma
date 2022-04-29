import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/index.jsx';
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">

      {/* <NavBar /> */}
      {/* <ItemListContainer /> */}  
      {/* Comentado para dejar visible sólo ItemDetailContainer */}
      
    
      <NavBar />
      <ItemDetailContainer/>
{/*       <Routes>
        <Route path='/' element={<ItemListContainer /> }/>
        <Route path='/catalogo' element={<ItemListContainer />} />
        <Route path='/detalle' element={<ItemDetailContainer /> }/>
      </Routes> */}
      

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
