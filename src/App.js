
import './App.css';
import Contador from './components/contador';
import Lista from './components/lista';
import Lista2 from './components/lista2';
import Formulario from './components/formulario';
function App() {
  return (
    <div className="App">
      <Contador/>
      <hr/>
      <Lista/>
      <hr/>
      <Lista2/>
      <hr/>
      <Formulario/>
      <hr/>
    </div>
  );
}

export default App;
