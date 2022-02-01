const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// re-worked version of a method I found


function titleCased(){
  return tutorials.map(sentence => {
    // breaks each string in the array into a new array, which contains each word in the sentence
    const words = sentence.split(" ");
    // breaks down each string in that new array, into words
    // each word is capitalized only at the first letter, then the rest of the word body is sliced back on
    const newlyCappedWord = words.map(element => element[0].toUpperCase() + element.slice(1));
    // the newly capitalized words are rejoined back into a string, to undo our original split()
    return newlyCappedWord.join(" ")
})}