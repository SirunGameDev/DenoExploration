import { assertEquals } from "@std/assert";
import { Bishop } from "../Model/Bishop.ts";
import { Coordinate } from "../Model/Coordinate.ts";
import { GameBoard } from "../Model/GameBoard.ts";

Deno.test(function constructorTest() {
    let BishopObject = new Bishop ("white", new Coordinate(0, 0));

    assertEquals("Bishop", BishopObject.getName());
});

Deno.test(function getterTests() {
    let BishopObject = new Bishop ("white", new Coordinate(0, 0));
    
    assertEquals(BishopObject.getColor(), "white");
});

Deno.test(function moveTest() {
    let emptyBoard = GameBoard.initEmptyBoard();
    let GameBoardObject = new GameBoard(emptyBoard);
    let BishopObject = new Bishop ("white", GameBoardObject.getBoard()[0]);
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