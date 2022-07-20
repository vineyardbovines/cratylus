# cratylus

Language processing tools. These can be used alongside i18n setups (like [i18next](https://www.i18next.com)) or on their own.

> _Cratylus_ is a dialog by Plato that debates the arbitrariness of language.

## Usage

Install the package with the package manager of your choice.

```bash
// or yarn or pnpm
npm install @gretzky/cratylus
```

## Levenshtein Distance

The [Levenshtein distance](https://en.wikipedia.org/wiki/Levenshtein_distance) is the minimum number of single-character edits required to change one word into another.

### `levenshtein(a: string, b: string, calcRatio: boolean): number`

Returns the levenshtein distance calculation iteratively over 2 matrix rows.

```ts
levenshtein("crack", "whack") // 2
levenshtein("8675309", "1234567") // 6
```

## Plurality

There are 2 enums and 2 functions for using plurals based off of the Arabic language set of 5 potential plural forms:

- None = 0
- One = 1
- Two = 2,
- Few = 3-5
- Many = 5-99
- Other = 100+

### `PluralForm` and `PluralGuard`

Each enum is keyed by the 5 plural forms. 

`PluralForm` returns the string name of the plural (e.g. `none = none`).

`PluralGuard` returns an arbitrary number that represents the plural (e.g. `few = 3`). This is more useful if you just need to determine the plural form and the actual number doesn't matter.

### `getPluralForm(count: number): PluralForm`

Returns the string type of the plural based on the passed number.

```ts
getPluralForm(0) // "none"
getPluralForm(1) // "one"
getPluralForm(2) // "two"
getPluralForm(4) // "few"
getPluralForm(15) // "many"
getPluralForm(66) // "many"
getPluralForm(369) // "other"
```

## Sentence

### `buildSentencePrimitive(stringArr: string[]): string`

Returns a sentence built from an array of strings. Any punctuation in the array is adhered to, but if there's no end punctuation a period is added. Correct sentence casing is also added.

Consider an array to be 1 sentence.

```ts
const s1 = ["this", "is", "a", "sentence"]
const s2 = ["this is", "a sentence"]
const s3 = ["tHiS iS", "a SeNtEnCe"]
const s4 = ["this is", "a sentence", "!"]
const s5 = ["this", "is", "a sentence", "?"]

buildSentence(s1) // "This is a sentence."
buildSentence(s2) // "This is a sentence."
buildSentence(s3) // "This is a sentence."
buildSentence(s4) // "This is a sentence!"
buildSentence(s5) // "This is a sentence?"
```

## String Formatting

### `TextCasing`

Enum that represents 5 different ways of casing a string.

```ts
// capitalizes the first letter of a string, regardless of whether or not it has other words
TextCasing.capitalize // e.g. Foo bar
// uppercases a string
TextCasing.upper // e.g. FOO BAR
// lowercases a string
TextCasing.lower // e.g. foo bar
// title cases a string, capitalizing the first letter of each individual word in the string
TextCasing.title // e.g. Foo Bar
// sentence cases a string - very similar to capitalize but the regex is adjusted slightly
TextCasing.sentence // e.g. Foo bar
```

### `stringFormat(value: string, format: TextCasing): string`

Returns a string formatted to a given text casing.

```ts
const str = "never gonna give you up"

stringFormat(str, TextCasing.capitalize) // "Never gonna give you up"
stringFormat(str, TextCasing.sentence) // "Never gonna give you up"
stringFormat(str, TextCasing.title) // "Never Gonna Give You Up"
stringFormat(str, TextCasing.lower) // "never gonna give you up"
stringFormat(str, TextCasing.upper) // "NEVER GONNA GIVE YOU UP"
```