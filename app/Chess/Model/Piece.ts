import { Coordinate } from "./Coordinate.ts";
import { GameBoard} from "./GameBoard.ts"; 

export class Piece {
    #name: string = "";
    #color: string = "";
    #position: Coordinate;
    #symbol: string = "";
    
    directions = [
        "horizontal",
        "vertical",
        "diagonal"
    ]
    maxMovement = 1;

    constructor(color: string, position: Coordinate) {
        this.#color = color;
        this.#position = position;
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

    setPosition (position: Coordinate){
        this.#position = position;
    }

    getSymbol() : string {
        return this.#symbol;
    }

    setSymbol(symbol: string) {
        this.#symbol = symbol;
    }

    getDirections() {
        return this.directions;
    }
    getMaximalMovment() {
        return this.maxMovement;
    }

    getPossibleMove(GameBoard : GameBoard) {
        let possibleDirection = this.getDirections();
        let max = this.getMaximalMovment();
        let goals = [];
        let coord = this.getPosition();
    }
}