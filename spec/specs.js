describe('pigLatin', function() {
  it('adds ay to the end of words that start with a vowel', function() {
    expect(pigLatin("apple")).to.equal("appleay")
  });

  it('moves consecutive consonants to the end of word and adds ay to it', function() {
    expect(pigLatin("toy")).to.equal("oytay")
  });
});

// var wordsVowels = []
// letters.each() |letter|
//   vowels.indexOf(letter) !== -1
//     wordsVowels.push(letter)
//   end
// end
// word.slice(word.indexOf(wordsVowels[0])).concat(word[0]).concat("ay")

// return word.slice(1) + word.slice(0,1) + "ay"
