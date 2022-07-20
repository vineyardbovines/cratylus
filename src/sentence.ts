const sentenceRegex: RegExp = /(^\w{1}|\.\s*\w{1})/gi;
const endPunctuation: string[] = [".", "!", "?"];

/**
 * buildSentence - create a string sentence with punctuation from an array of strings if the string array has no punctuation, periods will be added between each string entry. if it has puncutuated it will be adhered to.
 *
 * @param stringArr - the array to sentencize...sentencecenize...make a sentence with
 *
 * @example
 * ["this is", "a sentence"] -> this is a sentence.
 * ["this", "is a", "sentence", "."] -> this is a sentence.
 */
export function buildSentence(stringArr: string[]): string {
  const filteredPunctuation = endPunctuation.find((punct) =>
    stringArr.includes(punct)
  );

  const withPunctuation = filteredPunctuation
    ? stringArr
      .join(" ")
      .replace(` ${filteredPunctuation}`, filteredPunctuation)
    : [...stringArr, "."].join(" ").replace(" .", ".");

  return withPunctuation
    .toLowerCase()
    .replace(sentenceRegex, (str) => str.toUpperCase());
}
