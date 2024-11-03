import { assertEquals } from "@std/assert";
import { King } from "../Model/King.ts";
import { Coordinate } from "../Model/Coordinate.ts";
import { GameBoard } from "../Model/GameBoard.ts";

Deno.test(function constructorTest() {
    let KingObject = new King ("white", new Coordinate(0, 0));

    assertEquals("King", KingObject.getName());
});

Deno.test(function getterTests() {
    let KingObject = new King ("white", new Coordinate(0, 0));
    
    assertEquals(KingObject.getColor(), "white");
});

Deno.test(function moveTest() {
    let emptyBoard = GameBoard.initEmptyBoard();
    let GameBoardObject = new GameBoard(emptyBoard);
    let KingObject = new King ("white", GameBoardObject.getBoard()[0]);
    GameBoardObject.getBoard()[0].setFilling(KingObject);
    assertEquals("Ki", GameBoardObject.getBoard()[0].getFilling());
    assertEquals("E ", GameBoardObject.getBoard()[63].getFilling());

    KingObject.move(GameBoardObject, GameBoardObject.getBoard()[63]);

    assertEquals("E ", GameBoardObject.getBoard()[63].getFilling());
    assertEquals("Ki", GameBoardObject.getBoard()[0].getFilling());

    KingObject.move(GameBoardObject, GameBoardObject.getBoard()[1]);

    assertEquals("Ki", GameBoardObject.getBoard()[1].getFilling());
    assertEquals("E ", GameBoardObject.getBoard()[0].getFilling());

    KingObject.move(GameBoardObject, GameBoardObject.getBoard()[8]);

    assertEquals("Ki", GameBoardObject.getBoard()[8].getFilling());
    assertEquals("E ", GameBoardObject.getBoard()[1].getFilling());
});