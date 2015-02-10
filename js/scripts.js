var pigLatin = function(word) {
  var vowels = ["a", "e", "i", "o", "u"];
  var letters = word.split("");
  if (vowels.indexOf(word[0]) !== -1) {
    return word + "ay";
  } else {
    return (word.slice(1) + word.slice(0,1) + "ay");
  }
};
