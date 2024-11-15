import { Coordinate } from "./Coordinate.ts";

import { Rook } from "./Rook.ts";
import { Pawn } from "./Pawn.ts";
import { Bishop } from "./Bishop.ts";
import { King } from "./King.ts";
import { Queen } from "./Queen.ts";
import { Knight } from "./Knight.ts";
import { Piece } from "./Piece.ts";
//import { IPiece } from "../Interfaces/IPiece.ts";
export class GameBoard {
    #board;

    constructor(board : Coordinate[] = this.getStartingBoard()) {
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

    setBoard(board : Coordinate[]) {
        this.#board = board;
    }

    static initEmptyBoard () : Coordinate[] {
        const board : Coordinate[] = [];
        let counter = 0;
        const strings = ["a", "b", "c", "d", "e", "f", "g", "h"];
        for (let j = 0; j < 8; j++) {
            for (let i = 0; i < 8; i++) {
                let color = "w";
                if ((i + j) % 2 == 0) {
                    color = "b";
                }
                board[counter] = new Coordinate(j, i, "E ", strings[i]+(j+1), color );
                counter++;
            }
        }
        return board;
    }
    getEmptyBoard () : Coordinate[] {
        return GameBoard.initEmptyBoard();
    }
    getStartingBoard() : Coordinate[] {
        let board = GameBoard.initEmptyBoard();

        // fill white pawns
        for (let i = 8; i < 16; i++) {
            board = this.helperToPlacePieces(board, i, "white", Pawn);
        }

        // fill black pawns
        for (let i = 48; i < 56; i++) {
            board = this.helperToPlacePieces(board, i, "black", Pawn);
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
        board = this.helperToPlacePieces(board, 59,  "black", Queen);
        return board;
    }

    //* deno-lint-ignore no-explicit-any
    helperToPlacePieces(board : Coordinate[], index : number, color: string,  piece : typeof Piece) : Coordinate[] {
        const coord = board[index];
        const pieceObj = new piece(color, coord);
        coord.setFilling(pieceObj);
        board[index] = coord;

        return board;
    }
    printBoardtoConsole(board : Coordinate[] = this.#board) {
        for (const square in board) {
            const coord = board[square];
            const colorstring = this.getColorofPiece(coord);

            const string = square+": "+colorstring+coord.getFilling()+" on "+coord.getHorizontal()+" "+coord.getVertical()+" "+coord.comment+coord.color

            console.log(string);
        }
    }
    getColorofPiece (coord : Coordinate) : string {
        let colorstring = "";
        if (coord.getPiece()) {
            colorstring = coord.getPiece().getColor()[0] + " ";
        }
        return colorstring;
    }
    printBoardAsStringBoardtoTerminal(board : Coordinate[] = this.#board) {
        let result = "";
        for( let i = 0; i < 64; i++) {
            const coord = board[i];
            const colorstring = this.getColorofPiece(coord);
            result = colorstring+coord.getFilling()+" "+coord.color+result;
            if ( (i+1) % 8 == 0)
            {
                result = "\n"+result;
            }
            else {
                result = "|"+result;
            }
        }
        // mirrored board 
        console.log(result); 
    }
    filterBoardbyDirection( direction : string, startingcoord: Coordinate, board = this.#board) : Coordinate[] {
        if (direction != "diagonal") {
            return board.filter(coord => coord[direction as keyof Coordinate] == startingcoord[direction as keyof Coordinate] );
        }
        else {
            // to do how diagonal movement can be filterd
            return board.filter(coord => coord.color == startingcoord.color)
            .filter(coord => coord["vertical"] != startingcoord["vertical"])
            .filter(coord => coord["horizontal"] != startingcoord["horizontal"]);
        }

        // todo horse jump ??? 
    }
}

/*let arrayRange = (start : number, stop : number, step : number) =>
    Array.from(
    { length: (stop - start) / step + 1 },
    (value, index) => start + index * step
    );
*/
//let testboard = new GameBoard();
//testboard.printBoardtoConsole();
//testboard.printBoardAsStringBoardtoTerminal();
//let horizontal = testboard.filterBoardbyDirection("horizontal", testboard.getBoard()[0]);
//console.log(horizontal);

//let vertical = testboard.filterBoardbyDirection("vertical", testboard.getBoard()[0]);
//console.log(vertical);

//let diagonal = testboard.filterBoardbyDirection("diagonal", testboard.getBoard()[0]);
//console.log(diagonal);