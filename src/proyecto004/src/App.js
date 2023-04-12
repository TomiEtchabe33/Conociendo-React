import { useState } from "react";

function App() {

  function eliminarUltimaFila() {
    if (articulos.length > 0) {
      const temp=Array.from(articulos)
      temp.pop()
      setArticulos(temp)
    }
  }

  function generarAleatorio() {
    const v = Math.trunc(Math.random() * 10);
    setNumero(v)
  }

  const [numero, setNumero] = useState(0);

  const [articulos, setArticulos] = useState([{
    codigo: 1,
    descripcion: 'papas',
    precio: 12.52
  }, {
    codigo: 2,
    descripcion: 'naranjas',
    precio: 21
  }, {
    codigo: 3,
    descripcion: 'peras',
    precio: 18.20
  }]);
  
  return (
    <center><div>
      <hr />
      <div>
      <p>Número aleatorio: {numero}</p>
      <button onClick={generarAleatorio}>Generar número aleatorio</button>
      </div>
      <hr />
      <table border="1">
        <thead><tr><th>Código</th><th>Descripción</th><th>Precio</th></tr></thead>
        <tbody>
          {articulos.map(art => {
            return (
              <tr key={art.codigo}>
                <td>
                  {art.codigo}
                </td>
                <td>
                  {art.descripcion}
                </td>
                <td>
                  {art.precio}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <button onClick={eliminarUltimaFila}>Eliminar última fila</button>
      <hr />
    </div></center>
  );
}

export default App;