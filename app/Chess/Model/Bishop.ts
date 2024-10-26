import { Piece } from "./Piece";

export class Bishop extends Piece {
    constructor(color, position) {
        super(color, position);
        this.setSymbol("Bi");
        this.setName("Bishop");
    }
}