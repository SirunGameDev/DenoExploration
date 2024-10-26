import { Piece } from "./Piece.ts";

export class Bishop extends Piece {
    constructor(color, position) {
        super(color, position);
        this.setSymbol("Bi");
        this.setName("Bishop");
    }
}