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
        return !(Canditate.comment == this.comment);
        let horizontal = Canditate.horizontal == this.horizontal;
        let vertical = Canditate.vertical == this.vertical;
        let diagonal = false;
    }
}