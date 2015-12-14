describe("Go method checks the field from which it was triggered and", function() {

  beforeEach(function() {
    spyOn(window, "check");
  });

  it("triggers check if the value of the field is not empty", function() {
    jasmine.getFixtures().set('<input type="text" id="operand1" value="6"></input><input type="text" id="operand2" value="2"></input><input type="text" id="operator" value="+"></input><input type="text" id="result" value="" disabled></input>');
    go(document.getElementById('operand1'));
    expect(window.check).toHaveBeenCalledWith('operand1');
  });

  describe("if field is empty", function() {
    beforeEach(function() {
      jasmine.getFixtures().set('<input type="text" id="operand1" value=""></input><input type="text" id="operand2" value="2"></input><input type="text" id="operator" value="+"></input><input type="text" id="result" value="8" disabled></input>');
      go(document.getElementById('operand1'));
    });

    it("does not trigger check", function() {
      expect(window.check).not.toHaveBeenCalled();
    });

    it("empties the result field", function() {
      expect(document.getElementById('result').value).toBeFalsy();
    });
  });
});

describe("Check method checks the fields and if the recently changed field", function() {

  describe("makes all the fields valid,", function() {

    beforeEach(function() {
      jasmine.getFixtures().set('<input type="text" id="operand1" value="6"></input><input type="text" id="operand2" value="2"></input><input type="text" id="operator" value="+"></input><input type="text" id="result" value="" disabled></input>');
      spyOn(calc, "calculate").and.callThrough();
      check('operand1');
    });

    it("calls the calculate method", function() {
      expect(calc.calculate).toHaveBeenCalledWith(6, 2, "+");
    });

    it("sets the result field to the result", function() {
      expect(document.getElementById('result').value).toBe('8');
    });
  });

  describe("makes any of the fields invalid,", function() {
    beforeEach(function() {
      jasmine.getFixtures().set('<input type="text" id="operand1" value=""></input><input type="text" id="operand2" value="2"></input><input type="text" id="operator" value="+"></input><input type="text" id="result" value="8" disabled></input>');
      spyOn(dom_interface, "checkFields").and.returnValue(false);
      check('operand1');
    });

    it("empties the result field", function() {
      expect(document.getElementById('result').value).toBeFalsy();
    });
  });
});