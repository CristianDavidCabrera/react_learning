import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



const TURNS = {
  X: 'x',
  O:'o'
}



const Square = ({children, isSelected, updateBoard, index}) => {
  
  const className = `square ${isSelected ? 'is-selected':''}`
  
  return (
    <div className={className}>
      {children}
    </div>
  )
}



function App() {
/* Creamos un estado, para ello necesitamos el hook de useState*/
/* Queremos que el tablero se renderice cada vez que hay un cambio de estado */
const [board, setBoard] = useState(Array(9).fill(null))

const [turn, setTurn] = useState(TURNS.X) // creamos otro estado para saber quien tiene el turno.

  return (
    <main className='board'>
      <h1>Tic tac toe</h1>
      <section className='game'>
        {
          board.map((_, index) => {
            return (
              <Square
                key={index}
                index={index}
              >
                  
              </Square>
            )
            
        })
        }
      </section>

      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>
    </main>
  )
}

export default App
