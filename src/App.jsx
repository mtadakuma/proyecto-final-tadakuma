import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/index.jsx';
import ItemListContainer from './components/ItemListContainer'
/* import Input from './components/Input/index'
import Button2 from './components/Button/Button2' */
import ItemCount from './components/ItemCount'

function App() {
/* 
  const extraerValor = (valorInput) => { 
    return console.log(valorInput);
  }

  const leer = (inputValue) => console.log(inputValue);
  const extraerClave = (dameTuClave) => console.log(dameTuClave);
  const obj = {
    curso: 'reactJS',
    comision: '31150',
    dias: 'Martes y Jueves',
    hora: 'De 19:00 a 21:00'
  }
 */
  const onAdd = (totalCount) => { 
    console.log(`La cantidad final es ${totalCount}`);
  }

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer texto='Futuro contenedor de items para comprar'>
        <ItemCount stock={5} initial={1} onAdd={onAdd}/>
        <ItemCount stock={6} initial={4} onAdd={onAdd}/>
      </ItemListContainer>
      {/* <Input handleExtraer={extraerValor} />
      <Button2 texto='Boton' color='red'  onRead={leer} /> 
      <Button2 texto='Boton2' color='blue'  lista={[1,2,3,4]} /> 
      <Button2 texto='Boton3' color='grey'  objeto={obj} /> 
      <Button2 texto='Boton4' color='brown'> <p>Este es el children del boton 4</p> </Button2>
      <Button2  color='green'> <p>Esto es un children</p> </Button2>
      */}
      
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
