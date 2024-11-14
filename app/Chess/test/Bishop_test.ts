import { assertEquals } from "@std/assert";
import { Bishop } from "../Model/Bishop.ts";
import { Coordinate } from "../Model/Coordinate.ts";
import { GameBoard } from "../Model/GameBoard.ts";

Deno.test(function constructorTest() {
    const BishopObject = new Bishop ("white", new Coordinate(0, 0));

    assertEquals("Bishop", BishopObject.getName());
});

Deno.test(function getterTests() {
    const BishopObject = new Bishop ("white", new Coordinate(0, 0));
    
    assertEquals(BishopObject.getColor(), "white");
});

Deno.test(function moveTest() {
    const emptyBoard = GameBoard.initEmptyBoard();
    const GameBoardObject = new GameBoard(emptyBoard);
    const BishopObject = new Bishop ("white", GameBoardObject.getBoard()[0]);
    GameBoardObject.getBoard()[0].setFilling(BishopObject);
    assertEquals("Bi", GameBoardObject.getBoard()[0].getFilling());
    assertEquals("E ", GameBoardObject.getBoard()[63].getFilling());

    BishopObject.move(GameBoardObject, GameBoardObject.getBoard()[63]);

    assertEquals("Bi", GameBoardObject.getBoard()[63].getFilling());
    assertEquals("E ", GameBoardObject.getBoard()[0].getFilling());

    BishopObject.move(GameBoardObject, GameBoardObject.getBoard()[62]);

    assertEquals("Bi", GameBoardObject.getBoard()[63].getFilling());
    assertEquals("E ", GameBoardObject.getBoard()[62].getFilling());
    assertEquals("E ", GameBoardObject.getBoard()[0].getFilling());

    BishopObject.move(GameBoardObject, GameBoardObject.getBoard()[63]);
    assertEquals("Bi", GameBoardObject.getBoard()[63].getFilling());

});

Deno.test(function shadowcalculationTest() {
    const GameBoardObject = new GameBoard();
    const StartingBoard = GameBoardObject.getBoard();

    const TestBishop = StartingBoard[2].getPiece();
    const TestStartPoint = StartingBoard[2];
    const TestTarget = StartingBoard[16];
    TestBishop.move(GameBoardObject, TestTarget);
    assertEquals(TestBishop.getName(), "Bishop");

    
    assertEquals(TestBishop.getPosition(), TestStartPoint);

    assertEquals("Bi", GameBoardObject.getBoard()[2].getFilling());
});