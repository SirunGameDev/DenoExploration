import { Coordinate } from "../Model/Coordinate.ts";
//import { Piece } from "../Model/Piece.ts";

export interface IPiece {
    //#color: string;
    directions : string[];
    //new (color: string, position: Coordinate) : Piece;
    //constructor(color: string, position: Coordinate) : Piece;

    //(color: string, position: Coordinate) : Piece;
}

export interface IPieceConstructor {
     new (color: string, position: Coordinate) : IPiece;
     //(color: string, position: Coordinate) : IPiece;
}