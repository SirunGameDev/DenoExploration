import { Piece } from "./Piece.ts";
import { GameBoard } from "./GameBoard.ts";
export class Coordinate {
    horizontal : number;
    vertical : number;
    #filling: Piece | string;
    comment : string;
    color: string;
    constructor (horizontal : number, vertical : number, filling = "E", comment : string = "", color = "w") {
        this.#filling = filling;
        this.horizontal = horizontal;
        this.vertical = vertical;
        this.comment = comment;
        this.color = color;
    }

    getFilling() : string {
        if(this.#filling instanceof Piece){
            return this.#filling.getSymbol();
        }
        return this.#filling;
    }

    setFilling(filling : Piece | string) {
        this.#filling = filling;
    }

    getHorizontal() {
        return this.horizontal;
    }
    getVertical () {
        return this.vertical;
    }

    getPiece() : Piece {
        if (typeof this.#filling == "string") {
            return new Piece ("e", this);
        }
        return this.#filling;
    }

    getComment() : string {
        return this.comment;
    }

    getOutGoingField(Ingoing : Coordinate) : Coordinate {
        // to do improve this, switch may undefined that is leading to errors, acually just 
        let GameBoardArray = GameBoard.initEmptyBoard(); 
        let NextToArray = GameBoardArray.filter(Coord => this.checkNexttoIt(Coord));
        let relation = this.getRelationToNext(Ingoing);
        let Outgoing = [Ingoing];
        switch (relation) {
            case "horizontal":
                Outgoing = NextToArray.filter(coord => (coord.comment != Ingoing.comment) && this.checkHorizontalRelation(coord));            
                break;
            case "vertical":
                Outgoing = NextToArray.filter(coord => (coord.comment != Ingoing.comment) && this.checkVerticalRelation(coord));
                break;
            case "diagonal":
                Outgoing = NextToArray.filter(coord => (coord.comment != Ingoing.comment) && this.checkDiagonalRelation(coord));
                break;
            default:
                break;
        }
        return Outgoing[0];
    }
    getRelationToNext(Canditate : Coordinate) : string {
        if(this.checkHorizontalRelation(Canditate)) {
            return "horizontal";
        }
        if(this.checkVerticalRelation(Canditate)) {
            return "vertical";
        }
        if(this.checkDiagonalRelation(Canditate)) {
            return "diagonal";
        }
        return "none";
    }
    checkHorizontalRelation(Canditate : Coordinate) : boolean {
        return this.horizontal == Canditate.horizontal;
    }
    checkVerticalRelation(Canditate : Coordinate) : boolean {
        return this.vertical == Canditate.vertical;
    }
    checkDiagonalRelation(Canditate : Coordinate) : boolean {
        let horizontalDiff = Math.abs(Canditate.horizontal - this.horizontal);
        let verticalDiff = Math.abs(Canditate.vertical - this.vertical);
        if(horizontalDiff == 0) {
            return false;
        }
        if(verticalDiff == 0) {
            return false;
        }
        return horizontalDiff % verticalDiff == 0;
    }
    checkNexttoIt (Canditate : Coordinate) : boolean {
        if (Canditate.comment == this.comment){
            return false;
        }
        
        let horizontal = Canditate.horizontal == this.horizontal;
        if(horizontal) {
            if(Canditate.vertical == this.vertical+1){
                return true;
            }
            if(Canditate.vertical == this.vertical-1){
                return true;
            }
        }

        let vertical = Canditate.vertical == this.vertical;
        if(vertical) {
            if(Canditate.horizontal == this.horizontal+1)
            {
                return true;
            }
            if(Canditate.horizontal == this.horizontal-1){
                return true;
            }
        }
        
        if(Canditate.vertical == this.vertical+1 && Canditate.horizontal == this.horizontal+1) {
            return true;
        }

        if(Canditate.vertical == this.vertical-1 && Canditate.horizontal == this.horizontal+1) {
            return true;
        }

        if(Canditate.vertical == this.vertical-1 && Canditate.horizontal == this.horizontal-1) {
            return true;
        }

        if(Canditate.vertical == this.vertical+1 && Canditate.horizontal == this.horizontal-1) {
            return true;
        }


        return false;
    }
}