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

  const handleClick = () => {
    updateBoard(index)
  }

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}



function App() {
/* Creamos un estado, para ello necesitamos el hook de useState*/
/* Queremos que el tablero se renderice cada vez que hay un cambio de estado */
const [board, setBoard] = useState(Array(9).fill(null))

const [turn, setTurn] = useState(TURNS.X) // creamos otro estado para saber quien tiene el turno.

const updateBoard = (index) =>{
  const newBoard =[...board]
  newBoard[index] = turn
  setBoard(newBoard)

  const newTurn = turn === TURNS.X ? TURNS.O :TURNS.X
  setTurn(newTurn)
}

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
                updateBoard={updateBoard}
              >
                  {board[index]}
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
