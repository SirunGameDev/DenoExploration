import { Piece } from "./Piece.ts";

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