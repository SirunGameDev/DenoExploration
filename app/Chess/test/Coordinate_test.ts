import { assertEquals } from "@std/assert";
// import { Piece } from "../Model/Piece.ts";
// import { Coordinate } from "../Model/Coordinate.ts";
import { GameBoard } from "../Model/GameBoard.ts";
Deno.test(function testNextto() {
    const GameBoardObject = new GameBoard();
    const Object = GameBoardObject.getBoard()[0]; // a1
    
    const Nd4 = GameBoardObject.getBoard()[27]; // d4

    const Ne4 = GameBoardObject.getBoard()[28]; // e4
    const Ne3 = GameBoardObject.getBoard()[20]; // e3

    const Nd3 = GameBoardObject.getBoard()[19]; // d3

    const Nc3 = GameBoardObject.getBoard()[18]; // c3
    const Nc4 = GameBoardObject.getBoard()[26]; // c4

    const Nc5 = GameBoardObject.getBoard()[34]; // c5

    const Nd5 = GameBoardObject.getBoard()[35]; // d5

    const Ne5 = GameBoardObject.getBoard()[36]; // e5

    const Nd4_2 = GameBoardObject.getBoard()[27]; // d4


    const NexttoHorizontal = GameBoardObject.getBoard()[1]; //b1
    const NexttoVertical = GameBoardObject.getBoard()[8]; //a2
    const NexttoDiagonal = GameBoardObject.getBoard()[9]; // b2
    const NeartoFar = GameBoardObject.getBoard()[16]; // a3
    const toFar = GameBoardObject.getBoard()[63]; // h8

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
    const GameBoardObject = new GameBoard();
    const Nd4 = GameBoardObject.getBoard()[27]; // d4
    const Ne4 = GameBoardObject.getBoard()[28]; // e4
    const Ne3 = GameBoardObject.getBoard()[20]; // e3
    const Nd3 = GameBoardObject.getBoard()[19]; // d3
    const Nc3 = GameBoardObject.getBoard()[18]; // c3
    const Nc4 = GameBoardObject.getBoard()[26]; // c4
    const Nc5 = GameBoardObject.getBoard()[34]; // c5
    const Nd5 = GameBoardObject.getBoard()[35]; // d5
    const Ne5 = GameBoardObject.getBoard()[36]; // e5
    const Nd4_2 = GameBoardObject.getBoard()[27]; // d4
    const SH8 = GameBoardObject.getBoard()[63];
    const SH7 = GameBoardObject.getBoard()[62];
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
    const GameBoardObject = new GameBoard();
    const Nd4 = GameBoardObject.getBoard()[27]; // d4
    const Ne4 = GameBoardObject.getBoard()[28]; // e4
    const Ne3 = GameBoardObject.getBoard()[20]; // e3
    const Nd3 = GameBoardObject.getBoard()[19]; // d3
    const Nc3 = GameBoardObject.getBoard()[18]; // c3
    const Nc4 = GameBoardObject.getBoard()[26]; // c4
    const Nc5 = GameBoardObject.getBoard()[34]; // c5
    const Nd5 = GameBoardObject.getBoard()[35]; // d5
    const Ne5 = GameBoardObject.getBoard()[36]; // e5
    //const Nd4_2 = GameBoardObject.getBoard()[27]; // d4
    // to do after helper Function has Tests
    assertEquals(Ne4.comment, Nd4.getOutGoingField(Nc4).comment);
    assertEquals(Nd3.comment, Nd4.getOutGoingField(Nd5).comment);
    assertEquals(Ne5.comment, Nd4.getOutGoingField(Nc3).comment);
    assertEquals(Nc5.comment, Nd4.getOutGoingField(Ne3).comment);
    assertEquals(Nd5.comment, Nd4.getOutGoingField(Nd3).comment);
});

Deno.test(function relationCheckerTest() {
    const GameBoardObject = new GameBoard();
    const Nd4 = GameBoardObject.getBoard()[27]; // d4
    //const Ne4 = GameBoardObject.getBoard()[28]; // e4
    //const Ne3 = GameBoardObject.getBoard()[20]; // e3
    //const Nd3 = GameBoardObject.getBoard()[19]; // d3
    const Nc3 = GameBoardObject.getBoard()[18]; // c3
    const Nc4 = GameBoardObject.getBoard()[26]; // c4
    //const Nc5 = GameBoardObject.getBoard()[34]; // c5
    const Nd5 = GameBoardObject.getBoard()[35]; // d5
    //const Ne5 = GameBoardObject.getBoard()[36]; // e5
    const Na1 = GameBoardObject.getBoard()[0];
    const Nh8 = GameBoardObject.getBoard()[63];


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
    const GameBoardObject = new GameBoard();
    const Na1 = GameBoardObject.getBoard()[0];
    const Na2 = GameBoardObject.getBoard()[1];

    const Nh8 = GameBoardObject.getBoard()[63];

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