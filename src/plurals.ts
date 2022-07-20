// standardize to 5 forms of plurals
// https://www.i18next.com/translation-function/plurals#languages-with-multiple-plurals

export enum PluralForm {
  none = "none",
  one = "one",
  two = "two",
  few = "few",
  many = "many",
  other = "other",
}

export enum PluralGuard {
  none = 0,
  one = 1,
  two = 2,
  few = 3,
  many = 11,
  other = 100,
}

/**
 * getPluralForm - return the string type of the plural based on a number
 *
 * @param count - number to determine pluralization from
 */
export function getPluralForm(count: number): PluralForm {
  if (count === 0) return PluralForm.none;
  if (count === 1) return PluralForm.one;
  if (count === 2) return PluralForm.two;
  if (count >= 3 && count <= 5) return PluralForm.few;
  if (count > 5 && count <= 99) return PluralForm.many;

  return PluralForm.other;
}
