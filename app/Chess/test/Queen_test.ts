import { assertEquals } from "@std/assert";
import { Queen } from "../Model/Queen.ts";
import { Coordinate } from "../Model/Coordinate.ts";
import { GameBoard } from "../Model/GameBoard.ts";

Deno.test(function constructorTest() {
    let QueenObject = new Queen ("white", new Coordinate(0, 0));

    assertEquals("Queen", QueenObject.getName());
});

Deno.test(function getterTests() {
    let QueenObject = new Queen ("white", new Coordinate(0, 0));
    
    assertEquals(QueenObject.getColor(), "white");
});

Deno.test(function moveTest() {
    let emptyBoard = GameBoard.initEmptyBoard();
    let GameBoardObject = new GameBoard(emptyBoard);
    let QueenObject = new Queen ("white", GameBoardObject.getBoard()[0]);
    GameBoardObject.getBoard()[0].setFilling(QueenObject);
    assertEquals("Qu", GameBoardObject.getBoard()[0].getFilling());
    assertEquals("E ", GameBoardObject.getBoard()[63].getFilling());

    QueenObject.move(GameBoardObject, GameBoardObject.getBoard()[63]);

    assertEquals("Qu", GameBoardObject.getBoard()[63].getFilling());
    assertEquals("E ", GameBoardObject.getBoard()[0].getFilling());

    QueenObject.move(GameBoardObject, GameBoardObject.getBoard()[62]);

    assertEquals("E ", GameBoardObject.getBoard()[63].getFilling());
    assertEquals("Qu", GameBoardObject.getBoard()[62].getFilling());
    assertEquals("E ", GameBoardObject.getBoard()[0].getFilling());

});