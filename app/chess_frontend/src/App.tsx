import './App.css'
import './Chess.css'
// @deno-types="@types/react"
import { useState } from 'react'
// @ts-expect-error Unable to infer type at the moment
import reactLogo from './assets/react.svg'
import {GameBoard} from '../../Chess/Model/GameBoard.ts'
function App() {
  const [count, setCount] = useState(0)
  const GameBoardObj = new GameBoard();
  const GameBoardPrintString = GameBoardObj.printBoardAsString();
  const GameBoardJSON = GameBoardObj.getBoard();
  const GameBoardJSONString = JSON.stringify(GameBoardJSON);
  function printFigure(PieceObject, field) {
    if ("E" == PieceObject) {
      return
    }
    let piece = field.getPiece();
    return <div color={piece.getColor()}>{piece.getSymbol()}</div>
  }
  function PrintBoard(GameBoardJSON) {
    const fields = [];
    for (let i = GameBoardJSON.length-1; i >= 0; i--) {
      const field = GameBoardJSON[i];
      fields.push(
        <div id={field.comment} horizontal={field.horizontal} vertical={field.vertical} color={field.color}>
           {printFigure(field.getFilling(), field)}
        </div>
      )
    }
    return <section>{fields}</section>
  }

  return (
    <>
      <h1>ChessBoard</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

      </div>
      <div className="gameboard">
        Chess-Board:
        {PrintBoard(GameBoardJSON)}
      </div>
    </>
  )
}

export default App
