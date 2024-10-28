import { assertEquals } from "@std/assert";
import { Piece } from "../Model/Piece.ts";
import { Coordinate } from "../Model/Coordinate.ts";
import { GameBoard } from "../Model/GameBoard.ts";
Deno.test(function testNextto() {
    let GameBoardObject = new GameBoard();
    let Object = GameBoardObject.getBoard()[0]; // a1
    
    let Nd4 = GameBoardObject.getBoard()[27]; // d4

    let Ne4 = GameBoardObject.getBoard()[28]; // e4
    let Ne3 = GameBoardObject.getBoard()[20]; // e3

    let Nd3 = GameBoardObject.getBoard()[19]; // d3

    let Nc3 = GameBoardObject.getBoard()[18]; // c3
    let Nc4 = GameBoardObject.getBoard()[26]; // c4

    let Nc5 = GameBoardObject.getBoard()[34]; // c5

    let Nd5 = GameBoardObject.getBoard()[35]; // d5

    let Ne5 = GameBoardObject.getBoard()[36]; // e5

    let Nd4_2 = GameBoardObject.getBoard()[27]; // d4


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

    assertEquals(true, Nd4.checkNexttoIt(Ne4));
    assertEquals(true, Nd4.checkNexttoIt(Ne3));
    assertEquals(true, Nd4.checkNexttoIt(Nd3));
    assertEquals(true, Nd4.checkNexttoIt(Nc3));
    assertEquals(true, Nd4.checkNexttoIt(Nc4));
    assertEquals(true, Nd4.checkNexttoIt(Nc5));
    assertEquals(true, Nd4.checkNexttoIt(Nd5));
    assertEquals(true, Nd4.checkNexttoIt(Ne5));

    assertEquals(false, Nd4.checkNexttoIt(Nd4_2));

});

Deno.test(function checkDiagonalRelation() {
    let GameBoardObject = new GameBoard();
    let Nd4 = GameBoardObject.getBoard()[27]; // d4
    let Ne4 = GameBoardObject.getBoard()[28]; // e4
    let Ne3 = GameBoardObject.getBoard()[20]; // e3
    let Nd3 = GameBoardObject.getBoard()[19]; // d3
    let Nc3 = GameBoardObject.getBoard()[18]; // c3
    let Nc4 = GameBoardObject.getBoard()[26]; // c4
    let Nc5 = GameBoardObject.getBoard()[34]; // c5
    let Nd5 = GameBoardObject.getBoard()[35]; // d5
    let Ne5 = GameBoardObject.getBoard()[36]; // e5
    let Nd4_2 = GameBoardObject.getBoard()[27]; // d4
    let SH8 = GameBoardObject.getBoard()[63];
    let SH7 = GameBoardObject.getBoard()[62];
    assertEquals(false, Nd4.checkDiagonalRelation(Nd4));
    assertEquals(false, Nd4.checkDiagonalRelation(Ne4));
    assertEquals(true, Nd4.checkDiagonalRelation(Ne3));
    assertEquals(false, Nd4.checkDiagonalRelation(Nd3));
    assertEquals(true, Nd4.checkDiagonalRelation(Nc3));
    assertEquals(false, Nd4.checkDiagonalRelation(Nc4));
    assertEquals(true, Nd4.checkDiagonalRelation(Nc5));
    assertEquals(false, Nd4.checkDiagonalRelation(Nd5));
    assertEquals(true, Nd4.checkDiagonalRelation(Ne5));
    assertEquals(false, Nd4.checkDiagonalRelation(Nd4_2));
    assertEquals(true, Nd4.checkDiagonalRelation(SH8));
    assertEquals(false, Nd4.checkDiagonalRelation(SH7));

});

Deno.test(function getOutGoingFieldTest() {
    let GameBoardObject = new GameBoard();
    let Nd4 = GameBoardObject.getBoard()[27]; // d4
    let Ne4 = GameBoardObject.getBoard()[28]; // e4
    let Ne3 = GameBoardObject.getBoard()[20]; // e3
    let Nd3 = GameBoardObject.getBoard()[19]; // d3
    let Nc3 = GameBoardObject.getBoard()[18]; // c3
    let Nc4 = GameBoardObject.getBoard()[26]; // c4
    let Nc5 = GameBoardObject.getBoard()[34]; // c5
    let Nd5 = GameBoardObject.getBoard()[35]; // d5
    let Ne5 = GameBoardObject.getBoard()[36]; // e5
    let Nd4_2 = GameBoardObject.getBoard()[27]; // d4
    // to do after helper Function has Tests
    assertEquals(Ne4.comment, Nd4.getOutGoingField(Nc4).comment);
});