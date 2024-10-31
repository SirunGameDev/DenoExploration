import { assertEquals } from "@std/assert";
import { Piece } from "../Model/Piece.ts";
import { Coordinate } from "../Model/Coordinate.ts";
import { GameBoard } from "../Model/GameBoard.ts";

Deno.test ( function constructorTest () {
        let GameBoardObject = new GameBoard();

        assertEquals(GameBoardObject.getBoard()[0].comment, "a1" );
    }
);

