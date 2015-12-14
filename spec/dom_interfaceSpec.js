describe("A DOM interface", function () {
  
  beforeEach(function() {
    input_checker = new InputChecker();
    dom_interface = new DOMInterface(input_checker);
  });

  it("returns true if all fields are valid", function() {
    jasmine.getFixtures().set('<input type="text" id="operand1" value="6"></input><input type="text" id="operand2" value="2"></input><input type="text" id="operator" value="+"></input>');
    spyOn(input_checker, "checkOperator").and.returnValue(true);
    spyOn(input_checker, "checkNumber").and.returnValue(true);
    expect(dom_interface.checkFields("operand1")).toBe(true);
  });

  it("returns true if all fields are valid", function() {
    jasmine.getFixtures().set('<input type="text" id="operand1" value="6"></input><input type="text" id="operand2" value="2"></input><input type="text" id="operator" value="+"></input>');
    spyOn(input_checker, "checkOperator").and.returnValue(true);
    spyOn(input_checker, "checkNumber").and.returnValue(true);
    expect(dom_interface.checkFields("operator")).toBe(true);
  });

  it("returns false if any field is invalid", function() {
    jasmine.getFixtures().set('<input type="text" id="operand1" value="6"></input><input type="text" id="operand2" value="a"></input><input type="text" id="operator" value="+"></input>');
    spyOn(input_checker, "checkOperator").and.returnValue(true);
    spyOn(input_checker, "checkNumber").and.returnValue(false);
    expect(dom_interface.checkFields("operand2")).toBe(false);
  });
});
