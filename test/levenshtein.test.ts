import { levenshtein } from "../src/levenshtein.ts";
import { assertEquals } from "https://deno.land/std@0.113.0/testing/asserts.ts";

Deno.test("Calculates correct distance", () => {
  assertEquals(levenshtein("crack", "whack"), 2);
  assertEquals(levenshtein("8675309", "1234567"), 6);
});
