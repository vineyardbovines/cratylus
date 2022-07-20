import { stringFormat, TextCasing } from "../src/stringFormat.ts";
import { assertEquals } from "https://deno.land/std@0.113.0/testing/asserts.ts";

Deno.test("Probably formats the string", () => {
  const str = "never gonna give you up";

  assertEquals(
    stringFormat(str, TextCasing.capitalize),
    "Never gonna give you up",
  );

  assertEquals(
    stringFormat(str, TextCasing.sentence),
    "Never gonna give you up",
  );

  assertEquals(
    stringFormat(str, TextCasing.title),
    "Never Gonna Give You Up",
  );

  assertEquals(
    stringFormat(str, TextCasing.lower),
    "never gonna give you up",
  );

  assertEquals(
    stringFormat(str, TextCasing.upper),
    "NEVER GONNA GIVE YOU UP",
  );
});
