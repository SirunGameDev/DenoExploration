import {GameBoard} from '../../Chess/Model/GameBoard.ts'

// @deno-types="@types/react"
import { useState } from 'react'
function ChessGame ( {GameBoardObjData, setGameBoardState}) {
    const [started, setStarted] = useState(0);
    const [activePiece, setactivePiece] = useState(false)
    const GameBoardObj = GameBoardObjData;
    const GameBoardJSON = GameBoardObj.getBoard();
    function markField(field, piece = null) {
        let source = "Green";
        let destiny = "Red";
        let element = event.target;
        if(!element.classList.contains(source) && piece) {
           let greens = document.getElementsByClassName(source);
            for(let i = greens.length-1; i >= 0; i--) {
                //greens[i].click();
                greens[i].classList.remove(source)
            }
           element.classList.add(source);
           setactivePiece(piece);

           let coords = piece.getPossibleMoves(GameBoardObj);
           let reds = document.getElementsByClassName(destiny);
           for(let i = reds.length-1; i >=0; i--) {
               reds[i].classList.remove(destiny);
           }
           for(let coord of coords) {
               let dest = document.getElementById(coord.comment);
               dest.classList.add(destiny);
           }
        }
        else if (element.classList.contains(source)  && piece) {
            element.classList.remove(source);
            setactivePiece(false);
            
            let reds = document.getElementsByClassName(destiny);
            for(let i = reds.length-1; i >=0; i--) {
                reds[i].classList.remove(destiny);
            }
        }
        else if (element.parentElement.classList.contains(destiny)) {
            setGameBoardState(activePiece.move(GameBoardObj, field));
            setactivePiece(false)
        }

      }
    function printFigure(PieceObject, field) {
        if ("E " == PieceObject) {
          return <div key={field.comment} color='null' onClick={() => markField(field)}></div>
        } else {
          let piece = field.getPiece();
          return <div key={field.comment} color={piece.getColor()} onClick={() => markField(field, piece)}>{piece.getSymbol()}</div>
       
        }
 }
    function PrintBoard(GameBoardJSON) {
        const fields = [];
        for (let i = GameBoardJSON.length-1; i >= 0; i--) {
          const field = GameBoardJSON[i];
          fields.push(
            <div key={field.comment} id={field.comment} horizontal={field.horizontal} vertical={field.vertical} color={field.color}>
               {printFigure(field.getFilling(), field)}
            </div>
          )
        }
        return <section className="gamefields">{fields}</section>
    }
    return (
        <>
        <div className="gameboard">      
            {PrintBoard(GameBoardJSON)}
        </div>
        </>
    )
}

export default ChessGame