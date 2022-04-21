import { useState, useEffect } from 'react'
import Doll from "./components/Doll";
import Palabras from "./components/Palabras/Palabras";
import Teclado from "./components/Teclado/Teclado";
import NewGame from './components/NewGame';


import './App.scss'

function App() {
  document.body.style = 'background: #A9CEF4'
  const [letrasProbadas, setLetrasProbadas] = useState([])
  const [letraClick, setLetraClick] = useState(null)
  const [fallos, setFallos] = useState(0)
  const words = ['CASA', 'MONEDA', 'CARACOL', 'PINO', 'AVELLANA', 'JAVASCRIPT', 'BOTELLA', 'TAXI', 'MADRID', 'ADIVINANZA']
  const [arrayPalabra, setArrayPalabra] = useState([])
  const [win, setWin] = useState(false)



  const winner = () => {
    return arrayPalabra.every(elem => elem.encript == false)
  }

  useEffect(() => {
    if (winner() == true) {
      setWin(true)
    }
  }, [arrayPalabra])





  return (
    <div className="app text-center mb-5">
      <NewGame
        words={words}
        setLetrasProbadas={setLetrasProbadas}
        setFallos={setFallos}
        setArrayPalabra={setArrayPalabra}
        setWin={setWin}
      />

      <div className='app-container-1'>
        <div><Doll setFallos={setFallos} fallos={fallos} /></div>
        <div className='mt-5 app-container-1-div-2'>
          <Palabras
            setFallos={setFallos}
            fallos={fallos}
            letraClick={letraClick}
            setArrayPalabra={setArrayPalabra}
            arrayPalabra={arrayPalabra}
            win={win}
            setWin={setWin} />
        </div>
      </div>


      <Teclado
        letrasProbadas={letrasProbadas}
        setLetrasProbadas={setLetrasProbadas}
        setLetraClick={setLetraClick}
        letraClick={letraClick}
        fallos={fallos}
        arrayPalabra={arrayPalabra}
        win={win}
      />
    </div>
  );
}

export default App;
