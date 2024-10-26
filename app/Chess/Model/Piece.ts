import { Coordinate } from "./Coordinate.ts";
export class Piece {
    #name: string = "";
    #color: string = "";
    #position: Coordinate;
    #symbol: string = "";
    
    constructor(color, position) {
        this.setColor(color);
        this.setPosition(position);
    }
    getName() : string {
        return this.#name;
    }

    setName(name: string) {
        this.#name = name;
    }

    getColor() : string {
        return this.#color;
    }

    setColor(color: string) {
        this.#color = color;
    }

    getPosition() {
        return this.#position;
    }

    setPosition (position) {
        this.#position = position;
    }

    getSymbol() : string {
        return this.#symbol;
    }

    setSymbol(symbol: string) {
        this.#symbol = symbol;
    }

    
}