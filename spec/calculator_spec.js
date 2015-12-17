describe("A calculator", function() {

  var calc;
  beforeEach(function() {
    calc = Calculator();
  });

  describe("calculates answers for correct input", function() {

    it("for power operation", function() {
      expect(calc.calculate(6, 2, '^')).toBe(36);
    });

    it("for division", function() {
      expect(calc.calculate(6, 2, '/')).toBe(3);
    });

    it("for multiplication", function() {
      expect(calc.calculate(6, 2, '*')).toBe(12);
    });

    it("for addition", function() {
      expect(calc.calculate(6, 2, '+')).toBe(8);
    });

    it("for subtraction", function() {
      expect(calc.calculate(6, 2, '-')).toBe(4);
    });
    
    
  });

  it("gives error on incorrect operation", function() {
    expect(calc.calculate(4, 2, 'invalid_input')).toBe('Invalid operator');
  });
});