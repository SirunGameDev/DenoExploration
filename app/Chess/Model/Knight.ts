import { Piece } from "./Piece";

export class Knight extends Piece {
    constructor(color, position) {
        super(color, position);
        this.setSymbol("Kn");
        this.setName("Knight");
    }
}