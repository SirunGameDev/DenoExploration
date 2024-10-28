import { Piece } from "./Piece.ts";
import { Coordinate } from "./Coordinate.ts";
export class Queen extends Piece {
    constructor(color : string, position : Coordinate) {
        super(color, position);
        this.setSymbol("Qu");
        this.setName("Queen");
    }
}