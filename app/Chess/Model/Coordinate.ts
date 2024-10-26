import { Piece } from "./Piece.ts";

export class Coordinate {
    #horizont : number;
    #vertical : number;
    #filling: Piece | string;
    constructor (horizontal, vertical, filling = "") {
        this.#filling = filling;
        this.#horizont = horizontal;
        this.#vertical = vertical;
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
}