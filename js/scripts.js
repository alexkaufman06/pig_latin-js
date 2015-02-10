var pigLatin = function(word) {
  var vowels = ["a", "e", "i", "o", "u"]
  if (vowels.indexOf(word[0]) !== -1) {
    return word.concat("ay");
  }
};
