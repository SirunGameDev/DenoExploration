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
    assertEquals(false, Nc3.checkDiagonalRelation(Nd5));
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
    assertEquals(Nd3.comment, Nd4.getOutGoingField(Nd5).comment);
    assertEquals(Ne5.comment, Nd4.getOutGoingField(Nc3).comment);
    assertEquals(Nc5.comment, Nd4.getOutGoingField(Ne3).comment);
    assertEquals(Nd5.comment, Nd4.getOutGoingField(Nd3).comment);
});

Deno.test(function relationCheckerTest() {
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
    let Na1 = GameBoardObject.getBoard()[0];
    let Nh8 = GameBoardObject.getBoard()[63];


    assertEquals(true, Nd4.relationChecker("horizontal", Nc4));
    assertEquals(false, Nd4.relationChecker("horizontal", Nc3));
    assertEquals(false, Nd4.relationChecker("horizontal", Nc3));

    assertEquals(true, Nd4.relationChecker("diagonal", Nc3));
    assertEquals(false, Nd4.relationChecker("diagonal", Nc4));

    assertEquals(true, Nd4.relationChecker("vertical", Nd5));
    assertEquals(false, Nd4.relationChecker("vertical", Nc4));

    assertEquals(true, Na1.relationChecker("diagonal", Nh8));
    assertEquals(false, Na1.relationChecker("horizontal", Nh8));
    assertEquals(false, Na1.relationChecker("vertical", Nh8));

});

Deno.test(function calculateDistanceTest() {
    let GameBoardObject = new GameBoard();
    let Na1 = GameBoardObject.getBoard()[0];
    let Na2 = GameBoardObject.getBoard()[1];

    let Nh8 = GameBoardObject.getBoard()[63];

    assertEquals(7, Na1.calculateDistance("diagonal", Nh8));
    assertEquals(7, Na1.calculateDistance("horizontal", Nh8));
    assertEquals(7, Na1.calculateDistance("vertical", Nh8));

    assertEquals(7, Nh8.calculateDistance("diagonal", Na1));
    assertEquals(7, Nh8.calculateDistance("horizontal", Na1));
    assertEquals(7, Nh8.calculateDistance("vertical", Na1));

    assertEquals(0, Na1.calculateDistance("vertical", Na2));
    assertEquals(1, Na1.calculateDistance("horizontal", Na2));
    assertEquals(1, Na1.calculateDistance("diagonal", Na2));



});