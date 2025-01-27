import './App.css'
import './Chess.css'
// @deno-types="@types/react"
import { useState } from 'react'
// @ts-expect-error Unable to infer type at the moment
import reactLogo from './assets/react.svg'
import {GameBoard} from '../../Chess/Model/GameBoard.ts'
import ChessGame from './ChessGame.tsx'
function App() {
  const [count, setCount] = useState(0)
  const [ChessGameActive, setChessGameActive] = useState(false);
  const [StartChessGamePending, setStartChessGamePending] = useState(true);
  const [EndChessGame, setEndChessGame] = useState(false);
  const [GameBoardState, setGameBoardState] = useState({});
  function startChessGame() {
    let GameBoardObj = new GameBoard();
    setGameBoardState(GameBoardObj);
    setStartChessGamePending(false);
    setChessGameActive(true);

  }
  function ChessGameField({StartChessGamePending, ChessGameActive, EndChessGame}) {
    return (
      <>
      <div>
      {StartChessGamePending ? (
        <button onClick={startChessGame}>Neues Spiel</button>
        ) : ( 
        <div>Viel Spaß</div>
        )}

      {ChessGameActive ? (
        <ChessGame
        GameBoardObjData = {GameBoardState}
        setGameBoardState = {setGameBoardState} />
      ) :  (
          <></>
      )}  
    </div>
  </>)
  }

  return (
    <>
      <h1>ChessBoard</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div><ChessGameField
                        StartChessGamePending = {StartChessGamePending}
                        ChessGameActive = {ChessGameActive}
                        EndChessGame = {EndChessGame}
                        /> </div>

    </>
  )
}

export default App
