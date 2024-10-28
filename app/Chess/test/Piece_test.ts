import { assertEquals } from "@std/assert";
import { Piece } from "../Model/Piece.ts";
import { Coordinate } from "../Model/Coordinate.ts";

Deno.test(function constructorTest() {
    let pieceObj = new Piece("w", new Coordinate(0,0,"", "", ""));
    assertEquals (pieceObj.getColor(), "w");
});
