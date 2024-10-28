import { assertEquals } from "@std/assert";
import { Piece } from "../Model/Piece.ts";
import { Coordinate } from "../Model/Coordinate.ts";
import { GameBoard } from "../Model/GameBoard.ts";
Deno.test(function testNextto() {
    let GameBoardObject = new GameBoard();
    let Object = GameBoardObject.getBoard()[0]; // a1
    
    let N0 = GameBoardObject.getBoard()[27]; // d4

    let N1 = GameBoardObject.getBoard()[28]; // e4
    let N2 = GameBoardObject.getBoard()[20]; // e3

    let N3 = GameBoardObject.getBoard()[19]; // d3

    let N4 = GameBoardObject.getBoard()[18]; // c3
    let N5 = GameBoardObject.getBoard()[26]; // c4

    let N6 = GameBoardObject.getBoard()[34]; // c5

    let N7 = GameBoardObject.getBoard()[35]; // d5

    let N8 = GameBoardObject.getBoard()[36]; // e5

    let N9 = GameBoardObject.getBoard()[27]; // d4


    let NexttoHorizontal = GameBoardObject.getBoard()[1]; //b1
    let NexttoVertical = GameBoardObject.getBoard()[8]; //a2
    let NexttoDiagonal = GameBoardObject.getBoard()[9]; // b2
    let NeartoFar = GameBoardObject.getBoard()[16]; // a3
    let toFar = GameBoardObject.getBoard()[63]; // h8

    assertEquals(false, Object.checkNexttoIt(Object));
    assertEquals(true, Object.checkNexttoIt(NexttoHorizontal));
    assertEquals(true, Object.checkNexttoIt(NexttoVertical));
    assertEquals(true, Object.checkNexttoIt(NexttoDiagonal));

    assertEquals(false, Object.checkNexttoIt(NeartoFar));
    assertEquals(false, Object.checkNexttoIt(toFar));

    assertEquals(true, N0.checkNexttoIt(N1));
    assertEquals(true, N0.checkNexttoIt(N2));
    assertEquals(true, N0.checkNexttoIt(N3));
    assertEquals(true, N0.checkNexttoIt(N4));
    assertEquals(true, N0.checkNexttoIt(N5));
    assertEquals(true, N0.checkNexttoIt(N6));
    assertEquals(true, N0.checkNexttoIt(N7));
    assertEquals(true, N0.checkNexttoIt(N8));

    assertEquals(false, N0.checkNexttoIt(N9));





});