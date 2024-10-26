import { Piece } from "./Piece";

export class Queen extends Piece {
    constructor(color, position) {
        super(color, position);
        this.setSymbol("Qu");
        this.setName("Queen");
    }
}