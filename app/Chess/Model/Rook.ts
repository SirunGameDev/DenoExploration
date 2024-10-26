import { Piece } from "./Piece.ts";

export class Rook extends Piece {
    constructor(color, position) {
        super(color, position);
        this.setSymbol("Ro");
        this.setName("Rook");
    }
}