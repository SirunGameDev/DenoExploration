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
            let directionArray = Board.filter((square) => 
                    (square != coord) 
                    && (coord.relationChecker(direction, square)) 
                    && (coord.calculateDistance(direction, square) <= max) 
                    // && ["E", "E ", "e"].includes(square.getFilling())
                );
            directionArray = this.calculateShadowCase(direction, directionArray, coord);
            goals = [...new Set([...goals, ...directionArray])];
        }
        // todo remove goals behind friendly figures and how to take possition of enemys. knight and pawn special stuff
        return goals;
    }
    calculateShadowCase(direction : string, array : Coordinate[], coord : Coordinate) : Coordinate[] {
        let banned = new Array();
        for(let square of array) {
            // if empty field, not check is needed
            if(["E", "E ", "e"].includes(square.getFilling())){
                continue;
            }
            // if blocked by own color, then filter sqaure itself and all following
            if(square.getPiece().getColor() == this.#color){
                console.log(JSON.stringify(coord));
                console.log("ownColor in way "+JSON.stringify(square));
                console.log(this.compareCoords(coord, square));
                
                banned.push(square);
                
            }
            // if blocked by enemy color, then filter all following
            if(square.getPiece().getColor() != this.#color){
                console.log("enemy in way");
            }
        }
        return array.filter(element => !banned.includes(element));
    }
    markFollowingFieldsasBanned(direction : string, array : Coordinate[], coord : Coordinate) {
        switch (direction) {
            case "diagonal":
                
                break;
            case "horizontal":
                
                break;

            case "vertical":
                
                break;
            default:
                throw new Error("direction not matching");
                
                break;
        }
    }
    compareCoords(First : Coordinate, Second : Coordinate){
        let verticaldiff = First.vertical - Second.vertical;
        let horizontaldiff = First.horizontal - Second.horizontal;

        return [verticaldiff, horizontaldiff];
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