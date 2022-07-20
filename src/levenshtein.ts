/**
 * getDistance - calculate the levenshtein distance between 2 strings iteratively with 2 matrix rows
 *
 * @param a - first string
 * @param b - second string
 * @param calcRatio - whether or not we're calculating the ratio
 *
 * @see https://en.wikipedia.org/wiki/Levenshtein_distance
 */
export function levenshtein(
  a: string,
  b: string,
  calcRatio: boolean = false
): number {
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;

  // swap
  if (a.length > b.length) {
    b = [a, (a = b)][0]; // save some memory with 0(min(a,b))
  }

  let arr0 = new Array(b.length + 1);
  let arr1 = new Array(b.length + 1);

  for (let i = 0; i <= b.length; ++i) {
    arr0[i] = i;
  }

  for (let i = 0; i < a.length; ++i) {
    arr1[i] = i;

    for (let j = 0; j < b.length; ++j) {
      arr1[j + 1] = Math.min(
        // deletion cost
        arr0[j + 1] + 1,
        // insertion cost
        arr1[j] + 1,
        // substitution cost. cost of subtitution for calculating ratio is 2
        arr0[j] + (calcRatio ? 2 : 1) * Number(a[i] !== b[j])
      );
    }

    [arr0, arr1] = [arr1, arr0];
  }

  return arr0[a.length];
}
