import { Piece } from "./Piece.ts";

export class Queen extends Piece {
    constructor(color, position) {
        super(color, position);
        this.setSymbol("Qu");
        this.setName("Queen");
    }
}