describe('pigLatin', function() {
  it('adds ay to the end of words that start with a vowel', function() {
    expect(pigLatin("apple")).to.equal("appleay")
  });
});
