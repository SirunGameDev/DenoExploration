import { Coordinate } from "./Coordinate.ts";

import { Rook } from "./Rook.ts";
import { Pawn } from "./Pawn.ts";
import { Bishop } from "./Bishop.ts";
import { King } from "./King.ts";
import { Queen } from "./Queen.ts";
import { Knight } from "./Knight.ts";

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
        let strings = ["a", "b", "c", "d", "e", "f", "g", "h"];
        for (let j = 0; j < 8; j++) {
            for (let i = 0; i < 8; i++) {
                board[counter] = new Coordinate(j, i, "", strings[i]+(j+1) );
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

        // fill black pawns
        for (let i = 48; i < 56; i++) {
            let coord = board[i];
            coord.setFilling(new Pawn ("black", coord));
            board[i] = coord;
        }

        board = this.helperToPlacePieces(board, 0, "white", Rook);
        board = this.helperToPlacePieces(board, 7, "white", Rook);

        board = this.helperToPlacePieces(board, 1, "white", Knight);
        board = this.helperToPlacePieces(board, 6, "white", Knight);

        board = this.helperToPlacePieces(board, 5, "white", Bishop);
        board = this.helperToPlacePieces(board, 2, "white", Bishop);

        board = this.helperToPlacePieces(board, 4, "white", King);
        board = this.helperToPlacePieces(board, 3, "white", Queen);

        // black
        board = this.helperToPlacePieces(board, 56, "black", Rook);
        board = this.helperToPlacePieces(board, 63, "black", Rook);

        board = this.helperToPlacePieces(board, 57, "black", Knight);
        board = this.helperToPlacePieces(board, 62, "black", Knight);

        board = this.helperToPlacePieces(board, 58, "black", Bishop);
        board = this.helperToPlacePieces(board, 61, "black", Bishop);

        board = this.helperToPlacePieces(board, 60, "black", King);
        board = this.helperToPlacePieces(board, 59, "black", Queen);

        return board;
    }
    helperToPlacePieces(board, index, color, piece) {
        let coord = board[index];
        let pieceObj = new piece(color, coord);
        coord.setFilling(pieceObj);
        board[index] = coord;

        return board;
    }
    printBoardtoConsole(board = this.#board) {
        for (let square in board) {
            let coord = board[square];
            console.log(square+":"+coord.getFilling()+" on "+coord.getHorizontal()+" "+coord.getVertical()+" "+coord.comment);
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