import Dado from "./Dado";
import { useState } from "react";

function App() {

  function generarValor() {
    return Math.trunc(Math.random() * 6) + 1
  }

  function tirar() {
    setNumero1(generarValor())
    setNumero2(generarValor())
    setNumero3(generarValor())
  }

  const [numero1, setNumero1] = useState(generarValor())
  const [numero2, setNumero2] = useState(generarValor())
  const [numero3, setNumero3] = useState(generarValor())
  return (
    <div>
      <hr />
      <Dado valor={numero1} />
      <hr />
      <Dado valor={numero2} />
      <hr />
      <Dado valor={numero3} />
      <hr />
      <center><button onClick={tirar}>Tirar</button></center>
    </div>
  );
}

export default App;