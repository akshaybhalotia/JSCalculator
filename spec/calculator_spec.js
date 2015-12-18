describe("A calculator", function() {

  var calculator;
  beforeEach(function() {
    calculator = new Calculator();
  });

  describe("executes answers for correct input", function() {

    it("for power operation", function() {
      expect(calculator.execute(6, 2, '^')).toBe(36);
    });

    it("for division", function() {
      expect(calculator.execute(6, 2, '/')).toBe(3);
    });

    it("for multiplication", function() {
      expect(calculator.execute(6, 2, '*')).toBe(12);
    });

    it("for addition", function() {
      expect(calculator.execute(6, 2, '+')).toBe(8);
    });

    it("for subtraction", function() {
      expect(calculator.execute(6, 2, '-')).toBe(4);
    });
    
    
  });

  it("gives error on incorrect operation", function() {
    expect(calculator.execute(4, 2, 'invalid_input')).toBe('Invalid operator');
  });
});