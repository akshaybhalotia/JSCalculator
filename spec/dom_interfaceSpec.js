describe("A DOM interface", function () {

  beforeEach(function() {
    input_checker = new InputChecker();
    dom_interface = new DOMInterface(input_checker);
  });

  it("returns true if all fields are valid", function() {
    jasmine.getFixtures().set('<input id="operand1" value="6"></input><input id="operand2" value="2"></input><input id="operator" value="+"></input>');
    expect(dom_interface.checkFields("operand1")).toBe(true);
    expect(dom_interface.checkFields("operand2")).toBe(true);
    expect(dom_interface.checkFields("operator")).toBe(true);
  });

  it("sets border to default if currently changed field is valid", function() {
    jasmine.getFixtures().set('<input id="operand1" value="6"></input><input id="operand2" value="2"></input><input id="operator" value="+"></input>');
    dom_interface.checkFields("operand1");
    expect(document.getElementById('operand1').style.cssText).toBe('border: 1px solid rgb(221, 221, 221);');
  });

  it("returns false if any field is invalid", function() {
    jasmine.getFixtures().set('<input id="operand1" value="6"></input><input id="operand2" value="a"></input><input id="operator" value="+"></input>');
    expect(dom_interface.checkFields("operand1")).toBe(false);
  });

  it("returns false if any field is empty", function() {
    jasmine.getFixtures().set('<input id="operand1" value="6"></input><input id="operand2" value=""></input><input id="operator" value="+"></input>');
    expect(dom_interface.checkFields("operand2")).toBe(false);
  });

  it("sets border to highlighted if currently changed field is invalid", function() {
    jasmine.getFixtures().set('<input id="operand1" value="6"></input><input id="operand2" value="2"></input><input id="operator" value="log"></input>');
    dom_interface.checkFields("operator");
    expect(document.getElementById('operator').style.cssText).toBe('border: 2px solid rgb(176, 23, 50);');
  });

  it("does not highlight border for other invalid fields", function() {
    jasmine.getFixtures().set('<input id="operand1" value="a"></input><input id="operand2" value="2"></input><input id="operator" value="log"></input>');
    dom_interface.checkFields("operator");
    expect(document.getElementById('operand1').style.cssText).toBe('');
  });
});
