import { assertEquals } from "@std/assert";
import { Piece } from "../Model/Piece.ts";
import { Coordinate } from "../Model/Coordinate.ts";
import { GameBoard } from "../Model/GameBoard.ts"; 
Deno.test(function constructorTest() {
        let pieceObj = new Piece("w", new Coordinate(0,0,"", "", ""));
        assertEquals (pieceObj.getColor(), "w");
    }
);

Deno.test(function getPossibleMovesTest() {
    let GameBoardObject = new GameBoard();

   
    let Pona2 = GameBoardObject.getBoard()[8]; // Pawn on a2
    let Eona3 = GameBoardObject.getBoard()[16]; // Empty on a3
    let Eona4 = GameBoardObject.getBoard()[24]; // Empty on a4
    let Rona1 = GameBoardObject.getBoard()[0];  // Turm on a1
    

    assertEquals("Pawn", Pona2.getPiece().getName());
    assertEquals("white", Pona2.getPiece().getColor());

    assertEquals("Rook", Rona1.getPiece().getName());
    assertEquals("white", Rona1.getPiece().getColor());
    assertEquals("E ", Eona3.getFilling());
    let goals = Pona2.getPiece().getPossibleMoves(GameBoardObject);
    let goalsArray = [goals[0].getComment(), goals[1].getComment()];
     // Pawn needs rework
    assertEquals(["a3", "a4"], goalsArray);


    }
);

Deno.test(function moveTest() {
    let GameBoardObject = new GameBoard();
    let Pona2 = GameBoardObject.getBoard()[8]; // Pawn on a2
    
    let Eona3 = GameBoardObject.getBoard()[16]; // Empty on a3

    let PawnObj = Pona2.getPiece();
    let GameBoardObject2 = PawnObj.move(GameBoardObject, Eona3);
    assertEquals("E ", GameBoardObject2.getBoard()[8].getFilling());
    assertEquals("P ", GameBoardObject2.getBoard()[16].getFilling());
});