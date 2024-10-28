import { Piece } from "./Piece.ts";
import { Coordinate } from "./Coordinate.ts";
export class Knight extends Piece {
    constructor(color : string, position : Coordinate) {
        super(color, position);
        this.setSymbol("Kn");
        this.setName("Knight");
    }
}