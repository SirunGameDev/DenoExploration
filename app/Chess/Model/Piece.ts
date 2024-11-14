import { Coordinate } from "./Coordinate.ts";
import { GameBoard } from "./GameBoard.ts"; 
import { IPiece} from "../Interfaces/IPiece.ts";
export class Piece implements IPiece{
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
    /*new (color: string, position: Coordinate) : Piece {
        return this;
    }*/
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
        const possibleDirection = this.getDirections();
        const max = this.getMaximalMovment();
        let goals : Coordinate[] = [];
        const coord = this.getPosition();
        //const color = this.#color;
        const Board = GameBoard.getBoard();
        for (const direction of possibleDirection) {
            let directionArray = Board.filter((square) => 
                    (square != coord) 
                    && (coord.relationChecker(direction, square)) 
                    && (coord.calculateDistance(direction, square) <= max) 
                    // && ["E", "E ", "e"].includes(square.getFilling())
                );
            directionArray = this.calculateShadowCase(directionArray, coord);
            goals = [...new Set([...goals, ...directionArray])];
        }
        // todo remove goals behind friendly figures and how to take possition of enemys. knight and pawn special stuff
        return goals;
    }
    calculateShadowCase(array : Coordinate[], StartingPoint : Coordinate) : Coordinate[] {
        let banned : Coordinate[] = [];
        for(const square of array) {
            let tobann: Coordinate[] = [];
            // if empty field, not check is needed
            if(["E", "E ", "e"].includes(square.getFilling())){
                continue;
            }
            // if blocked by own color, then filter sqaure itself and all following
            if(square.getPiece().getColor() == this.#color){
                banned.push(square);
                tobann = this.markFollowingFieldsasBanned(array, StartingPoint, square );
            }
            // if blocked by enemy color, then filter all following
            if(square.getPiece().getColor() != this.#color){                
                tobann = this.markFollowingFieldsasBanned(array, StartingPoint, square );
            }
            banned =  [...new Set([...banned, ...tobann])];
        }
        return array.filter(element => !banned.includes(element));
    }
    markFollowingFieldsasBanned(array : Coordinate[], startPoint : Coordinate, filterPoint : Coordinate) {
        const marker = [];
        const set = [];
        let blSwitch = true;
        for(let i = 0; i < array.length; i++) {
            if(array[i] == filterPoint) {
                blSwitch = !blSwitch;
                continue;
            }
            if(blSwitch) {
                marker.push(array[i]);
            }
            else {
                set.push(array[i]);
            }
        }
        const returnArray = this.arrayChooser(set, marker, startPoint);
        return returnArray;
    }
    arrayChooser(array1 : Coordinate[], array2 : Coordinate[], startPoint : Coordinate) : Coordinate[] {
        const possible = array1.filter(element => element.checkNexttoIt(startPoint));
        const possible2 = array2.filter(element => element.checkNexttoIt(startPoint));
        if(possible.length > 0){
            return array2;
        }
        if(possible2.length > 0){
            return array1;
        }
        else {
            return new Array(0);
        }
    }
    compareCoords(First : Coordinate, Second : Coordinate){
        const verticaldiff = First.vertical - Second.vertical;
        const horizontaldiff = First.horizontal - Second.horizontal;

        return [verticaldiff, horizontaldiff];
    }
    move (GameBoard : GameBoard, newC : Coordinate) : GameBoard {
        const old = this.getPosition();
        const board = GameBoard.getBoard();
        const oldIndex = board.findIndex(square => old.vertical == square.vertical && old.horizontal == square.horizontal);
        const newIndex = board.findIndex(square => newC.vertical == square.vertical && newC.horizontal == square.horizontal);

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