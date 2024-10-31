import { Piece } from "./Piece.ts";
import { Coordinate } from "./Coordinate.ts";
import { GameBoard} from "./GameBoard.ts"; 
export class Pawn extends Piece {
    constructor(color : string, position : Coordinate) {
        super(color, position);
        this.setSymbol("P ");
        this.setName("Pawn");
        this.setDirections(["vertical"]);
        this.setMaximalMovment(2);
    }

    override getPossibleMoves(GameBoard : GameBoard) : Coordinate[] {
        let result = super.getPossibleMoves(GameBoard);

        result = this.filterBackwards(result);

        return result;
    }
    override move (GameBoard : GameBoard, newC : Coordinate) : GameBoard {
        let gbobject = super.move(GameBoard, newC);
        if(this.getPosition().comment == newC.comment) {
            this.setMaximalMovment(1);
        }
        return gbobject;
    }
    filterBackwards(result : Coordinate[]) : Coordinate[] {
        let wert = this.getPosition().horizontal;
        if (this.getColor() == "white") {
            result = result.filter(square => square.horizontal > wert);
        }
        if (this.getColor() == "black") {
            result = result.filter(square => square.horizontal < wert);
        }
        return result;
    }
}