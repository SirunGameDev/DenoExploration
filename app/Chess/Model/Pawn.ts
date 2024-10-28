import { Piece } from "./Piece.ts";
import { Coordinate } from "./Coordinate.ts";
export class Pawn extends Piece {
    constructor(color : string, position : Coordinate) {
        super(color, position);
        this.setSymbol("P ");
        this.setName("Pawn");
    }
}