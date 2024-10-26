import { Piece } from "./Piece.ts";

export class Knight extends Piece {
    constructor(color, position) {
        super(color, position);
        this.setSymbol("Kn");
        this.setName("Knight");
    }
}