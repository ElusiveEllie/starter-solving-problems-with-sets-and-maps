/**
 * return a Map of the unique letters and arrays of words that are made up of those letters
 * @param {array} words An array  of words
 */
function sameLetters(words) {
  const results = new Map();

  for (let word of words) {
    word = word.toLowerCase();
    const noDupes = new Set();
    for (let i = 0; i < word.length; i++) {
      noDupes.add(word[i]);
    }
    let allLetters = [...noDupes];
    allLetters = allLetters.sort();
    const letterString = allLetters.join("");
    if (results.get(letterString)) {
      results.get(letterString).push(word);
    } else {
      results.set(letterString, [word]);
    }
  }
  return results;
}

module.exports = sameLetters;
