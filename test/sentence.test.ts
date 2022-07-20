import { buildSentence } from "../src/sentence.ts";
import { assertEquals } from "https://deno.land/std@0.113.0/testing/asserts.ts";

Deno.test("Builds sentences appropriately", () => {
  assertEquals(
    buildSentence(["this", "is", "a", "sentence"]),
    "This is a sentence.",
  );

  assertEquals(
    buildSentence(["this is", "a sentence"]),
    "This is a sentence.",
  );

  assertEquals(
    buildSentence(["tHiS iS", "a SeNtEnCe"]),
    "This is a sentence.",
  );

  assertEquals(
    buildSentence(["this is", "a sentence", "!"]),
    "This is a sentence!",
  );

  assertEquals(
    buildSentence(["this", "is", "a sentence", "?"]),
    "This is a sentence?",
  );
});
