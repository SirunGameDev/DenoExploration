import { Piece } from "./Piece.ts";
import { Coordinate } from "./Coordinate.ts";
export class Rook extends Piece {
    constructor(color : string, position : Coordinate){
        super(color, position);
        this.setSymbol("Ro");
        this.setName("Rook");
    }
}