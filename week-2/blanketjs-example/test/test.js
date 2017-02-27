function calculatorAdd(a, b) {
    return a + b;
}


describe('Calculator addition function', function() {
    it('should return sum of input', function() {
        calculatorAdd(1, 1).should.equal(2);
        // calculatorAdd(5, 6).should.equal(11);
    });
});
