import { Piece } from "./Piece.ts";
import { Coordinate } from "./Coordinate.ts";
import { GameBoard } from "./GameBoard.ts";
export class Knight extends Piece {
    constructor(color : string, position : Coordinate) {
        super(color, position);
        this.setSymbol("Kn");
        this.setName("Knight");
    }

    override getPossibleMoves(GameBoard : GameBoard) : Coordinate[] {
        let board = GameBoard.getBoard();
        let currentPos = this.getPosition();
        let goals = new Array();
        // manuall breaking down to grasp calculation
        // cases like compass: NorthEast, EastNorth, EastSouth, SE, SW, WS, WN, NW
        // 0 : e4
        // NE : horizontal+1, vertical+2, f6
        // EN : horizontal+2, vertical+1, g5
        // ES : horizontal+2, vertical-1, g3
        // SE : horizontal+1, vertical-2, f2
        // SW : horizontal-1, vertical-2, d2
        // WS : horizontal-2, vertical-1, c3
        // WN : horizontal-2, vertical+1, c5
        // NW : horizontal-1, vertical+2, d6
        let testarray = [
            { horizontal: 1, vertical: 2}, // f6
            { horizontal: 2, vertical: 1}, // g5
            { horizontal: 2, vertical: -1}, //g3
            { horizontal: 1, vertical: -2}, // f2
            { horizontal: -1, vertical: -2}, // d2
            { horizontal: -2, vertical: -1}, // c3
            { horizontal: -2, vertical: 1}, // c5
            { horizontal: -1, vertical: 2}, // d6
        ];
       
        for (let testcase of testarray) {
            let testhorizontal = currentPos.horizontal+testcase.horizontal;
            let testvertical = currentPos.vertical+testcase.vertical;
            // or is working with if better?
            let filterarray = board.filter(square => 
                square.horizontal == testhorizontal 
                && square.vertical == testvertical
            );
            // todo: remove goals with own Color Pieces
            goals = [...new Set([...goals, ...filterarray])];
        }
        return goals;
    }
}