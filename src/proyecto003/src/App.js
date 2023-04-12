import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <center><div>
      <hr />
      <form onSubmit={presion}>
        <p>Ingrese primer valor:
          <input type="number" name="valor1" />
        </p>
        <hr />
        <p>Ingrese segundo valor:
          <input type="number" name="valor2" />
        </p>
        <hr />
        <p>
          <input type="submit" value="Sumar" />
        </p>
      </form>
      <hr />
    </div>
    </center>
  );
}

function presion(e) {
  e.preventDefault();
  const v1=parseInt(e.target.valor1.value, 10);
  const v2=parseInt(e.target.valor2.value, 10);
  const suma=v1+v2;
  alert('La suma es: '+suma);
}

export default App;