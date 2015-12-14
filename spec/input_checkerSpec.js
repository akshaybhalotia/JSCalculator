describe("An input checker", function() {

  var input_checker;
  beforeEach(function() {
    input_checker = InputChecker();
  });

  describe("checks if input is a number, and", function() {

    it("returns true for number input", function() {
      expect(input_checker.checkNumber(4.85)).toBe(true);
    });

    it("returns true for number as string", function() {
      expect(input_checker.checkNumber("4.85")).toBe(true);
    });

    it("returns false for NaN", function() {
      expect(input_checker.checkNumber(NaN)).toBe(false);
    });

    it("returns false for empty input", function() {
      expect(input_checker.checkNumber("")).toBe(false);
    });

    it("returns false for other input", function() {
      expect(input_checker.checkNumber("xyz")).toBe(false);
    });
  });

  describe("checks if operator is supported, and", function() {

    it("returns true for valid operator", function() {
      expect(input_checker.checkOperator("+")).toBe(true);
    });

    it("returns false for empty input", function() {
      expect(input_checker.checkOperator("")).toBe(false);
    });

    it("returns false for other input", function() {
      expect(input_checker.checkOperator("xyz")).toBe(false);
    });
  });
});
