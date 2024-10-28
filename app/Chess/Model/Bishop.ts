import { Piece } from "./Piece.ts";
import { Coordinate } from "./Coordinate.ts";
export class Bishop extends Piece {
    constructor(color : string, position : Coordinate) {
        super(color, position);
        this.setSymbol("Bi");
        this.setName("Bishop");
    }
}