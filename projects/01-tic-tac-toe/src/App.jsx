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

const WINNER_COMBOS = [
  [0,1,2],
  [3,4,6],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]


function App() {
/* Creamos un estado, para ello necesitamos el hook de useState*/
/* Queremos que el tablero se renderice cada vez que hay un cambio de estado */
const [board, setBoard] = useState(Array(9).fill(null))

const [turn, setTurn] = useState(TURNS.X) // creamos otro estado para saber quien tiene el turno.

const [winner, setWinner] = useState(null) // null es que no hay ganador, false es que hay un empate, true que hay ganador


const checkWinner = (boardToCheck) => {
  //revisamos todas las combinaciones ganadoras para ver si ganó X o O
  for(const combo of WINNER_COMBOS){
    const [a,b,c] = combo
    if(
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ){
      return boardToCheck[a]
    }
  }
  return null
}




const updateBoard = (index) =>{

  /*No actualizamos esta posición si ya tiene algo */
if(board[index] || winner) return
// Actualizar el tablero
  const newBoard =[...board]
  newBoard[index] = turn
  setBoard(newBoard)
//cambiar el turno
  const newTurn = turn === TURNS.X ? TURNS.O :TURNS.X
  setTurn(newTurn)
  //revisas si hay ganador
  const newWinner = checkWinner(newBoard)
  if(newWinner){
    setWinner(newWinner)
  } //TODO: check if game is over


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
