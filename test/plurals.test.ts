import { getPluralForm } from "../src/plurals.ts";
import { assertEquals } from "https://deno.land/std@0.113.0/testing/asserts.ts";

Deno.test("Returns correct plural form", () => {
  assertEquals(getPluralForm(0), "none");
  assertEquals(getPluralForm(1), "one");
  assertEquals(getPluralForm(2), "two");
  assertEquals(getPluralForm(4), "few");
  assertEquals(getPluralForm(15), "many");
  assertEquals(getPluralForm(66), "many");
  assertEquals(getPluralForm(369), "other");
});
