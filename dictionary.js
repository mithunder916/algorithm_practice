// Given an alphabetical array of dictionary entries and a word to search for, find that word's definition (if it exists). This array of dictionary entries will be formatted like so:

let example = [
  'definition - A statement of the exact meaning of a word, especially in a dictionary',
  'inane - Lacking sense or meaning; silly',
  'word - A single distinct meaningful element of speech or writing, used with others (or sometimes alone) to form a sentence and typically shown with a space on either side when written or printed'
];

// hashTable solution - Time: O(n) first time, O(1) afterwards if we cache the hashTable, Space: O(n)
const wordFinder = (dictionary, word) => {
  let hashTable = {};
  dictionary.forEach(entry => {
    let splitEntry = entry.split('-');
    hashTable[splitEntry[0]] = splitEntry[1];
  });
  if (hashTable[word + ' ']) return hashTable[word + ' '];
  else return 'no definition found';
}

// The optimized binary search solution, O(log n) time and O(1) space*:
function definitionOf (word, dict) {
  let prevLeft = 0;
  let prevRight = dict.length - 1;
  let index;
  while (index !== prevLeft && index !== prevRight) {
    const index = prevLeft + Math.floor((prevRight - prevLeft) / 2);
    if (dict[index].startsWith(word + ' - ')) {
      return dict[index].slice(word.length + 3); // "subtract" the word itself (plus the ' - ' part)
    }
    if (word < dict[index]) {
      prevRight = index - 1;
    } else {
      prevLeft = index + 1;
    }
  }
}
