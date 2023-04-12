import './App.css';

function retornarAleatorio() {
  return Math.trunc(Math.random() * 10);
}

function App() {
  const siglo = 21
  const buscadores = ['http://www.google.com',
  'http://www.bing.com',
  'http://www.yahoo.com']
  const persona = {
    nombre: 'Tomas',
    edad: 18
  }
  return (
    <div>
      <h1>Formato JSX</h1>
      <hr />
      <h3>Variable siglo</h3>
      <p>Estamos en el siglo {siglo}</p>
      <hr />
      <h3>Acceso a un objeto</h3>
      <p>{persona.nombre} tiene {persona.edad} años</p>
      <hr />
      <h3>Llamada a un método</h3>
      <p>Un valor aleatorio llamando a un método. {retornarAleatorio()}</p>
      <hr />
      <h3>Calculo inmediato de expresiones</h3>
      3 + 3 = {3 + 3}
      <hr />
      <h3>Otros formatos JSX</h3>
      <hr />
      <div>
      <a href={buscadores[0]}>Google</a><br />
      <a href={buscadores[1]}>Bing</a><br />
      <a href={buscadores[2]}>Yahoo</a><br />
    </div>
    <hr />
    </div>
  );
}

export default App;