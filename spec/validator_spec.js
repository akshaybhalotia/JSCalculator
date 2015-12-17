describe("A validator", function() {

  var validator;
  beforeEach(function() {
    validator = Validator();
  });

  describe("validates if operand is a number, and", function() {

    it("returns true for numbers", function() {
      expect(validator.validateOperand(4.85)).toBe(true);
    });

    it("returns true for numbers as string", function() {
      expect(validator.validateOperand("4.85")).toBe(true);
    });

    it("returns false for NaN", function() {
      expect(validator.validateOperand(NaN)).toBe(false);
    });

    it("returns false for empty input", function() {
      expect(validator.validateOperand("")).toBe(false);
    });

    it("returns false for other input", function() {
      expect(validator.validateOperand("xyz")).toBe(false);
    });
  });

  describe("validates if operator is supported, and", function() {

    it("returns true for valid operator", function() {
      expect(validator.validateOperator("+")).toBe(true);
    });

    it("returns false for empty input", function() {
      expect(validator.validateOperator("")).toBe(false);
    });

    it("returns false for other input", function() {
      expect(validator.validateOperator("xyz")).toBe(false);
    });
  });

  describe("validates an input object map, and", function() {

    var sample_input;
    beforeEach(function() {
      sample_input = {
        'operand1': 6,
        'operand2': 2,
        'operator': '/'
      };
    });

    it("returns an array of invalid fields", function() {
      sample_input.operand2 = 'a';

      expect(validator.validateFields(sample_input)).toEqual(['operand2']);
    });

    it("returns empty array if all fields are valid", function() {
      expect(validator.validateFields(sample_input)).toEqual([]);
    });
  });
});
