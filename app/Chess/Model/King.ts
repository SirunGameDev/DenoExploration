import { Piece } from "./Piece.ts";

export class King extends Piece {
    constructor(color, position) {
        super(color, position);
        this.setSymbol("Ki");
        this.setName("King");
    }
}