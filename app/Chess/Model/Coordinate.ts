import { Piece } from "./Piece.ts";

export class Coordinate {
    #horizont : number;
    #vertical : number;
    #filling: Piece | string;
    comment : string;
    color: string;
    constructor (horizontal : number, vertical : number, filling = "E", comment : string = "", color = "w") {
        this.#filling = filling;
        this.#horizont = horizontal;
        this.#vertical = vertical;
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
        return this.#horizont;
    }
    getVertical () {
        return this.#vertical;
    }

    getPiece() : Piece | false {
        if (typeof this.#filling == "string") {
            return false;
        }
        return this.#filling;
    }

    getComment() : string {
        return this.comment;
    }
}