import { assertEquals } from "jsr:@std/assert";
import { Pawn } from "../Model/Pawn.ts";
import { Coordinate } from "../Model/Coordinate.ts";
import { GameBoard } from "../Model/GameBoard.ts";

Deno.test(function constructorTest() {
    const PawnObject = new Pawn ("white", new Coordinate(0, 0));

    assertEquals("Pawn", PawnObject.getName());
});

Deno.test(function getterTests() {
    const PawnObject = new Pawn ("white", new Coordinate(0, 0));
    
    assertEquals(PawnObject.getColor(), "white");
});

Deno.test(function moveTest() {
    const emptyBoard = GameBoard.initEmptyBoard();
    const GameBoardObject = new GameBoard(emptyBoard);
    const PawnObject = new Pawn ("white", GameBoardObject.getBoard()[0]);
    GameBoardObject.getBoard()[0].setFilling(PawnObject);
    assertEquals("P ", GameBoardObject.getBoard()[0].getFilling());
    assertEquals("E ", GameBoardObject.getBoard()[63].getFilling());

    PawnObject.move(GameBoardObject, GameBoardObject.getBoard()[63]);

    assertEquals("E ", GameBoardObject.getBoard()[63].getFilling());
    assertEquals("P ", GameBoardObject.getBoard()[0].getFilling());

    PawnObject.move(GameBoardObject, GameBoardObject.getBoard()[1]);

    assertEquals("P ", GameBoardObject.getBoard()[0].getFilling());
    assertEquals("E ", GameBoardObject.getBoard()[1].getFilling());

    PawnObject.move(GameBoardObject, GameBoardObject.getBoard()[16]);

    assertEquals("P ", GameBoardObject.getBoard()[16].getFilling());
    assertEquals("E ", GameBoardObject.getBoard()[1].getFilling());

    //move for 2 fields not working anymore
    PawnObject.move(GameBoardObject, GameBoardObject.getBoard()[32]);

    assertEquals("P ", GameBoardObject.getBoard()[16].getFilling());
    assertEquals("E ", GameBoardObject.getBoard()[32].getFilling());

    PawnObject.move(GameBoardObject, GameBoardObject.getBoard()[24]);

    assertEquals("P ", GameBoardObject.getBoard()[24].getFilling());
    assertEquals("E ", GameBoardObject.getBoard()[32].getFilling());
});