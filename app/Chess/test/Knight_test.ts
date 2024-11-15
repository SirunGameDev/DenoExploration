import { assertEquals } from "jsr:@std/assert";
import { Knight } from "../Model/Knight.ts";
import { Coordinate } from "../Model/Coordinate.ts";
import { GameBoard } from "../Model/GameBoard.ts";

Deno.test(function constructorTest() {
    const KnightObject = new Knight ("white", new Coordinate(0, 0));

    assertEquals("Knight", KnightObject.getName());
});

Deno.test(function getterTests() {
    const KnightObject = new Knight ("white", new Coordinate(0, 0));
    
    assertEquals(KnightObject.getColor(), "white");
});

Deno.test(function moveTest() {
    const emptyBoard = GameBoard.initEmptyBoard();
    const GameBoardObject = new GameBoard(emptyBoard);
    const KnightObject = new Knight ("white", GameBoardObject.getBoard()[0]);
    GameBoardObject.getBoard()[0].setFilling(KnightObject);
    assertEquals("Kn", GameBoardObject.getBoard()[0].getFilling());
    assertEquals("E ", GameBoardObject.getBoard()[17].getFilling());

    KnightObject.move(GameBoardObject, GameBoardObject.getBoard()[17]);

    assertEquals("E ", GameBoardObject.getBoard()[0].getFilling());
    assertEquals("Kn", GameBoardObject.getBoard()[17].getFilling());

    KnightObject.move(GameBoardObject, GameBoardObject.getBoard()[2]);

    assertEquals("Kn", GameBoardObject.getBoard()[2].getFilling());
    assertEquals("E ", GameBoardObject.getBoard()[0].getFilling());

    KnightObject.move(GameBoardObject, GameBoardObject.getBoard()[1]);

    assertEquals("Kn", GameBoardObject.getBoard()[2].getFilling());
    assertEquals("E ", GameBoardObject.getBoard()[1].getFilling());


    // testing all 8 
    // 0 : e4
    // NE : horizontal+1, vertical+2, f6
    // EN : horizontal+2, vertical+1, g5
    // ES : horizontal+2, vertical-1, g3
    // SE : horizontal+1, vertical-2, f2
    // SW : horizontal-1, vertical-2, d2
    // WS : horizontal-2, vertical-1, c3
    // WN : horizontal-2, vertical+1, c5
    // NW : horizontal-1, vertical+2, d6 

    const bKne4 = new Knight ("black", GameBoardObject.getBoard()[28]); // 28 = e4
    GameBoardObject.getBoard()[28].setFilling(bKne4);
    assertEquals("e4", GameBoardObject.getBoard()[28].comment);

    assertEquals("Kn", GameBoardObject.getBoard()[28].getFilling());

    bKne4.move(GameBoardObject, GameBoardObject.getBoard()[45]);

    assertEquals("Kn", GameBoardObject.getBoard()[45].getFilling());
    bKne4.move(GameBoardObject, GameBoardObject.getBoard()[28]);
    assertEquals("Kn", GameBoardObject.getBoard()[28].getFilling());

    bKne4.move(GameBoardObject, GameBoardObject.getBoard()[45]);

    assertEquals("Kn", GameBoardObject.getBoard()[45].getFilling());
    bKne4.move(GameBoardObject, GameBoardObject.getBoard()[28]);
    assertEquals("Kn", GameBoardObject.getBoard()[28].getFilling());

    bKne4.move(GameBoardObject, GameBoardObject.getBoard()[22]);

    assertEquals("Kn", GameBoardObject.getBoard()[22].getFilling());
    bKne4.move(GameBoardObject, GameBoardObject.getBoard()[28]);
    assertEquals("Kn", GameBoardObject.getBoard()[28].getFilling());

    bKne4.move(GameBoardObject, GameBoardObject.getBoard()[23]);

    assertEquals("E ", GameBoardObject.getBoard()[23].getFilling());

    // move onto self -> deletes figure?

    bKne4.move(GameBoardObject, GameBoardObject.getBoard()[28]);
    assertEquals("Kn", GameBoardObject.getBoard()[28].getFilling());

    bKne4.move(GameBoardObject, GameBoardObject.getBoard()[14]);

    assertEquals("E ", GameBoardObject.getBoard()[14].getFilling());
    bKne4.move(GameBoardObject, GameBoardObject.getBoard()[28]);
    assertEquals("Kn", GameBoardObject.getBoard()[28].getFilling());

    bKne4.move(GameBoardObject, GameBoardObject.getBoard()[12]);

    assertEquals("E ", GameBoardObject.getBoard()[12].getFilling());
    bKne4.move(GameBoardObject, GameBoardObject.getBoard()[28]);
    assertEquals("Kn", GameBoardObject.getBoard()[28].getFilling());

    bKne4.move(GameBoardObject, GameBoardObject.getBoard()[19]);

    assertEquals("E ", GameBoardObject.getBoard()[19].getFilling());
    bKne4.move(GameBoardObject, GameBoardObject.getBoard()[28]);
    assertEquals("Kn", GameBoardObject.getBoard()[28].getFilling());

    bKne4.move(GameBoardObject, GameBoardObject.getBoard()[35]);

    assertEquals("E ", GameBoardObject.getBoard()[35].getFilling());
    bKne4.move(GameBoardObject, GameBoardObject.getBoard()[28]);
    assertEquals("Kn", GameBoardObject.getBoard()[28].getFilling());

    bKne4.move(GameBoardObject, GameBoardObject.getBoard()[44]);

    assertEquals("E ", GameBoardObject.getBoard()[44].getFilling());
    bKne4.move(GameBoardObject, GameBoardObject.getBoard()[28]);
    assertEquals("Kn", GameBoardObject.getBoard()[28].getFilling());
});