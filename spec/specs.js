describe('pigLatin', function() {
  it('adds ay to the end of words that start with a vowel', function() {
    expect(pigLatin("apple")).to.equal("appleay")
  });

  it('moves consecutive consonants to the end of word and adds ay to it', function() {
    expect(pigLatin("toy")).to.equal("oytay")
  });
});
