import { useState } from 'react'
import './App.css'
import confetti from 'canvas-confetti'
import { Square } from './components/Square.jsx'
import { TURNS } from './constants.js'
import { checkWinnerFrom } from './logic/board.js'
import { WinnerModal} from './components/WinnerModal.jsx'


function App() {
  /* Creamos un estado, para ello necesitamos el hook de useState*/
  /* Queremos que el tablero se renderice cada vez que hay un cambio de estado */
  const [board, setBoard] = useState(Array(9).fill(null))

  const [turn, setTurn] = useState(TURNS.X) // creamos otro estado para saber quien tiene el turno.

  const [winner, setWinner] = useState(null) // null es que no hay ganador, false es que hay un empate, true que hay ganador

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  const checkEndGame = (newBoard)=> {
  //revisamos si hay empate si no existen espacios vacíos en el tablero

    return newBoard.every((square)=> square !== null)
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
      const newWinner = checkWinnerFrom(newBoard)
      if(newWinner){
        setWinner(newWinner)
        confetti()
      }else if(checkEndGame(newBoard)){
        setWinner(false)
      }
  }

  return (
    <main className='board'>
      <h1>Tic tac toe</h1>
      <section className='game'>
        {
          board.map((square, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                  {square}
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
      <WinnerModal resetGame={resetGame} winner={winner}></WinnerModal>

    </main>
  )
}

export default App
