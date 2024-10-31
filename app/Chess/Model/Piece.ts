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
    setDirections(directions : string[]) {
        this.directions = directions;
    }
    setMaximalMovment(max : number) {
        this.maxMovement = max;
    }
    getPossibleMoves(GameBoard : GameBoard) : Coordinate[] {
        let possibleDirection = this.getDirections();
        let max = this.getMaximalMovment();
        let goals = new Array();
        let coord = this.getPosition();
        let color = this.#color;
        let Board = GameBoard.getBoard();
        for (let direction of possibleDirection) {
            let directionArray = Board.filter((square) => (square != coord) && (coord.relationChecker(direction, square)) && (coord.calculateDistance(direction, square) <= max) && ["E", "E ", "e"].includes(square.getFilling()));
            goals = [...new Set([...goals, ...directionArray])];
        }
        // todo remove goals behind friendly figures and how to take possition of enemys. knight and pawn special stuff
        return goals;
    }

    move (GameBoard : GameBoard, newC : Coordinate) : GameBoard {
        let old = this.getPosition();
        let board = GameBoard.getBoard();
        let oldIndex = board.findIndex(square => old.vertical == square.vertical && old.horizontal == square.horizontal);
        let newIndex = board.findIndex(square => newC.vertical == square.vertical && newC.horizontal == square.horizontal);

        if(this.getPossibleMoves(GameBoard).includes(newC)){
            this.setPosition(newC);
            newC.setFilling(this);
            old.setFilling("E ");
        }
        board[oldIndex] = old;
        board[newIndex] = newC;

        GameBoard.setBoard(board);
        return GameBoard;
    }
}