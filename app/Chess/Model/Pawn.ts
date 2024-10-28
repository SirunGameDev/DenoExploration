import { Piece } from "./Piece.ts";

export class Pawn extends Piece {
    constructor(color, position) {
        super(color, position);
        this.setSymbol("P ");
        this.setName("Pawn");
    }
    getPossibleMovements() {

        return [ 1 , ["straight"], ["enemyStartingPoint"]];
    }


}