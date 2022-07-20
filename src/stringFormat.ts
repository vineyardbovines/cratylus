export enum TextCasing {
  capitalize,
  upper,
  lower,
  title,
  sentence,
}

const titleRegex: RegExp = /\w\S*/g;
const sentenceRegex: RegExp = /(^\w{1}|\.\s*\w{1})/gi;

function capitalizeString(str: string): string {
  return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
}

/**
 * stringFormat - format a string to a given text casing
 *
 * @param value - string value to format
 * @param format - text casing style to format to
 */
export function stringFormat(value: string, format: TextCasing): string {
  switch (format) {
    case TextCasing.capitalize:
      return capitalizeString(value);
    case TextCasing.upper:
      return value.toUpperCase();
    case TextCasing.lower:
      return value.toLowerCase();
    case TextCasing.title:
      return value.replace(titleRegex, capitalizeString);
    case TextCasing.sentence:
      return value.replace(sentenceRegex, (str) => str.toUpperCase());
    default:
      return value;
  }
}
