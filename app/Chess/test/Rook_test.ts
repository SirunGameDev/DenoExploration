import { assertEquals } from "@std/assert";
import { Rook } from "../Model/Rook.ts";
import { Coordinate } from "../Model/Coordinate.ts";
import { GameBoard } from "../Model/GameBoard.ts";

Deno.test(function constructorTest() {
    let RookObject = new Rook ("white", new Coordinate(0, 0));

    assertEquals("Rook", RookObject.getName());
});

Deno.test(function getterTests() {
    let RookObject = new Rook ("white", new Coordinate(0, 0));
    
    assertEquals(RookObject.getColor(), "white");
});

Deno.test(function moveTest() {
    let emptyBoard = GameBoard.initEmptyBoard();
    let GameBoardObject = new GameBoard(emptyBoard);
    let RookObject = new Rook ("white", GameBoardObject.getBoard()[0]);
    GameBoardObject.getBoard()[0].setFilling(RookObject);
    assertEquals("Ro", GameBoardObject.getBoard()[0].getFilling());
    assertEquals("E ", GameBoardObject.getBoard()[63].getFilling());

    RookObject.move(GameBoardObject, GameBoardObject.getBoard()[63]);

    assertEquals("E ", GameBoardObject.getBoard()[63].getFilling());
    assertEquals("Ro", GameBoardObject.getBoard()[0].getFilling());

    RookObject.move(GameBoardObject, GameBoardObject.getBoard()[56]);

    assertEquals("E ", GameBoardObject.getBoard()[63].getFilling());
    assertEquals("Ro", GameBoardObject.getBoard()[56].getFilling());
    assertEquals("E ", GameBoardObject.getBoard()[0].getFilling());

});