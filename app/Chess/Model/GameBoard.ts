import { Coordinate } from "./Coordinate.ts";

import { Rook } from "./Rook.ts";
import { Pawn } from "./Pawn.ts";
export class GameBoard {
    #board;

    constructor(board = null) {
        if (board == null) {
            this.#board = this.getStartingBoard();
        }
        else {
            this.#board = board;
        }
         
    }

    getBoard() {
        return this.#board;
    }

    static initEmptyBoard () {
        let board = {};
        let counter = 0;
        for (let j = 0; j < 8; j++) {
            for (let i = 0; i < 8; i++) {
                board[counter] = new Coordinate(j, i);
                counter++;
            }
        }
        return board;
    }
    getEmptyBoard () {
        return GameBoard.initEmptyBoard();
    }
    getStartingBoard() {
        let board = GameBoard.initEmptyBoard();

        // fill white pawns
        for (let i = 8; i < 16; i++) {
            let coord = board[i];
            coord.setFilling(new Pawn ("white", coord));
            board[i] = coord;
        }

        return board
    }
    printBoardtoConsole(board = this.#board) {
        for (let square in board) {
            let coord = board[square];
            console.log(square+":"+coord.getFilling()+" on "+coord.getHorizontal()+" "+coord.getVertical());
        }
    }
}

const arrayRange = (start : number, stop : number, step : number) =>
    Array.from(
    { length: (stop - start) / step + 1 },
    (value, index) => start + index * step
    );

let testboard = new GameBoard();
testboard.printBoardtoConsole();

let testPawn = new Pawn("white", new Coordinate(1,1));

console.log(testPawn.getSymbol())