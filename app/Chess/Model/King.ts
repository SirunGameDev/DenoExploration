import { Piece } from "./Piece.ts";
import { Coordinate } from "./Coordinate.ts";
export class King extends Piece {
    constructor(color : string, position : Coordinate){
        super(color, position);
        this.setSymbol("Ki");
        this.setName("King");
        this.setDirections(["diagonal", "vertical", "horizontal"]);
        this.setMaximalMovment(1); // or 7?
    }
}