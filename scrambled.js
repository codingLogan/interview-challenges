/*
You are running a classroom and suspect that some of your students are passing around the answers to multiple choice questions disguised as random strings.

Your task is to write a function that, given a list of words and a string, finds and returns the word in the list that is scrambled up inside the string, if any exists. There will be at most one matching word. The letters don't need to be contiguous.

Example:
words = ['cat', 'baby', 'dog', 'bird', 'car', 'ax']
string1 = 'tcabnihjs'
find_embedded_word(words, string1) -> cat

string2 = 'tbcanihjs'
find_embedded_word(words, string2) -> cat

string3 = 'baykkjl'
find_embedded_word(words, string3) -> None / null

string4 = 'bbabylkkj'
find_embedded_word(words, string4) -> baby

string5 = 'ccc'
find_embedded_word(words, string5) -> None / null

string6 = 'breadmaking'
find_embedded_word(words, string6) -> bird

W = number of words in `words`
L = maximal string length of each word

*/
const words = ["cat", "baby", "dog", "bird", "car", "ax"];
const string1 = "tcabnihjs";
const string2 = "tbcanihjs";
const string3 = "baykkjl";
const string4 = "bbabylkkj";
const string5 = "ccc";
const string6 = "breadmaking";


function findEmbeddedWords(words, scrambledWord) {
  // Loop through
  for (const word of words) {
    // We have a word, lets see if it all exists in the scrambled letters
    console.log("searching for ", word)
    
    // find characters and store where to start the search next
    /*
      {
        a: 1,
        b: 0
      }
    */
    const usedIndexes = {}

    // Loop through each character of real word, like "cat"
    for ( let i = 0; i < word.length; i++ ) {
      // See if scrambled letter is available in the scrambled one
      const previousSearchIndex = usedIndexes[word[i]] || null;
      const index = scrambledWord.indexOf(word[i], previousSearchIndex)
      
      // Letter wasn't found, can't be this word
      if (index === -1) {
        console.log("abort: ", word)
        break;
      }
      
      // Optimize the next search
      usedIndexes[word[i]] = index + 1;
      
//       console.log("found letter: ", word[i])
      
      // Found all letters of the word
      if ( i === word.length - 1 ) {
        return word
      }
    }
  }
  
  return "None"
}

const tests = [
  string1, string2, string3, string4, string5, string6
]
tests.forEach(test => {
  console.log("");
  console.log("Answer: ", findEmbeddedWords(words, test))
})
