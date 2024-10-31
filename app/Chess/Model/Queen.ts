import { Piece } from "./Piece.ts";
import { Coordinate } from "./Coordinate.ts";
export class Queen extends Piece {
    constructor(color : string, position : Coordinate) {
        super(color, position);
        this.setSymbol("Qu");
        this.setName("Queen");
        this.setDirections(["diagonal", "vertical", "horizontal"]);
        this.setMaximalMovment(8); // or 7?
    }
}