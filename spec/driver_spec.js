describe("Driver script", function() {

  describe("#isEmpty", function() {
    it("checks if the value is empty or nil", function() {
      expect(isEmpty('')).toBeTruthy;
      expect(isEmpty('a')).toBeFalsy;
    });
  });

  describe("#deleteResult", function() {
    it("deletes the value of result", function() {
      jasmine.getFixtures().fixturesPath = 'base/spec/';
      loadFixtures('fixtures.html');
      result = document.getElementById('result');
      result.value = 10;

      deleteResult();

      expect(result.value).toBe('');
    });
  });

  describe("#highlightToggler", function() {
    it("highlight toggler highlights the fields it receives and removes the highlight from all other fields", function() {
      jasmine.getFixtures().fixturesPath = 'base/spec/';
      loadFixtures('fixtures.html');
      document.getElementById('operand2').classList.add('highlighted');

      highlightToggler(['operand1']);

      expect(document.getElementById('operand1').classList.contains('highlighted')).toBe(true);
      expect(document.getElementById('operand2').classList.contains('highlighted')).toBe(false);
      expect(document.getElementById('operator').classList.contains('highlighted')).toBe(false);
    });
  });

  describe("instantiates the", function() {

    it("calculator", function() {
      expect(calculator).toBeDefined();
    });

    it("validator", function() {
      expect(validator).toBeDefined();
    });

    it("dom_editor", function() {
      expect(dom_editor).toBeDefined();
    });

    it("fieldList", function() {
      expect(fieldList).toEqual(['operand1', 'operand2', 'operator']);
    });
  });

  describe("#nonEmptyFields", function() {
    beforeEach(function() {
      jasmine.getFixtures().fixturesPath = 'base/spec/';
      loadFixtures('fixtures.html');
    });

    it("gives empty object if all fields are empty", function() {
      expect(nonEmptyFields()).toEqual({});
    });

    it("gives an object with all non-empty fields and their values", function() {
      document.getElementById('operand1').value = 'some_value';
      document.getElementById('operator').value = 'some_other_value';

      expect(nonEmptyFields()).toEqual({'operand1': 'some_value', 'operator': 'some_other_value'});
    });
  });

  describe("#emptyFields", function() {
    beforeEach(function() {
      jasmine.getFixtures().fixturesPath = 'base/spec/';
      loadFixtures('fixtures.html');
    });

    it("gives empty object if all fields are empty", function() {
      expect(emptyFields()).toEqual(fieldList);
    });

    it("gives an object with all non-empty fields and their values", function() {
      document.getElementById('operand1').value = 'some_value';
      document.getElementById('operator').value = 'some_other_value';

      expect(emptyFields()).toEqual(['operand2']);
    });
  });

  describe("#validate", function() {

    beforeEach(function() {
      jasmine.getFixtures().fixturesPath = 'base/spec/';
      loadFixtures('fixtures.html');
    });

    it("does not call validator if all fields are empty", function() {
      spyOn(window, 'nonEmptyFields').and.returnValue({});
      spyOn(validator, 'validateFields');

      validate();

      expect(validator.validateFields).not.toHaveBeenCalled();
    });

    it("does not delete result if number of non-empty fields is 3", function() {
      var some_data = {'operand1': 'some_value', 'operand2': 'some_value', 'operator': 'some_value'};
      spyOn(window, 'nonEmptyFields').and.returnValue(some_data);
      spyOn(validator, 'validateFields').and.returnValue(Object.keys(some_data));
      spyOn(window, 'deleteResult');

      validate();

      expect(deleteResult).not.toHaveBeenCalled();
    });

    describe("if any field has values", function() {

      var some_data;
      beforeEach(function() {
        some_data = {'operand1': 'some_value'};
        spyOn(window, 'nonEmptyFields').and.returnValue(some_data);
        spyOn(validator, 'validateFields').and.returnValue(Object.keys(some_data));
      });

      it("calls validator", function() {
        validate();

        expect(validator.validateFields).toHaveBeenCalled();
        expect(validator.validateFields).toHaveBeenCalledWith(some_data);
      });

      it("deletes result if number of non-empty fields is less than 3", function() {
        spyOn(window, 'deleteResult');

        validate();

        expect(deleteResult).toHaveBeenCalled();
      });
    });
  });

  describe("#calculate", function() {

  beforeEach(function() {
    jasmine.getFixtures().fixturesPath = 'base/spec/';
    loadFixtures('fixtures.html');
    spyOn(calculator, 'execute').and.returnValue(5.63);

    calculate();
  });

  it("executes calculation", function() {
    expect(calculator.execute).toHaveBeenCalled();
  });

  it("sets the value of result", function() {
    expect(document.getElementById('result').value).toBe('5.63');
  });
  });

  describe("#trigger", function() {

  beforeEach(function() {
    jasmine.getFixtures().fixturesPath = 'base/spec/';
    loadFixtures('fixtures.html');
    spyOn(window, 'calculate');
    spyOn(window, 'deleteResult');
    spyOn(window, 'highlightToggler');
  });

  it("gets list of invalid fields", function() {
    spyOn(window, 'validate');

    trigger();

    expect(validate).toHaveBeenCalled();
  });

  it("gets list of empty fields", function() {
    spyOn(window, 'emptyFields');

    trigger();

    expect(emptyFields).toHaveBeenCalled();
  });

  it("does nothing if the list of invalid fields is undefined", function() {
    spyOn(window, 'validate').and.returnValue(undefined);
    spyOn(window, 'emptyFields').and.returnValue([]);

    trigger();

    expect(calculate).not.toHaveBeenCalled();
    expect(deleteResult).not.toHaveBeenCalled();
    expect(highlightToggler).not.toHaveBeenCalled();
  });

  it("does nothing if the list of empty fields is undefined", function() {
    spyOn(window, 'validate').and.returnValue([]);
    spyOn(window, 'emptyFields').and.returnValue(undefined);

    trigger();

    expect(calculate).not.toHaveBeenCalled();
    expect(deleteResult).not.toHaveBeenCalled();
    expect(highlightToggler).not.toHaveBeenCalled();
  });

  describe("if the list of invalid fields and the list of empty fields is defined", function() {
    it("calls highlight toggler", function() {
      spyOn(window, 'validate').and.returnValue([]);

      trigger();

      expect(highlightToggler).toHaveBeenCalled();
    });

    it("calls calculate if both the lists are empty", function() {
      spyOn(window, 'validate').and.returnValue([]);
      spyOn(window, 'emptyFields').and.returnValue([]);

      trigger();

      expect(calculate).toHaveBeenCalled();
    });
    it("deletes result if any of the lists is not empty", function() {
      spyOn(window, 'validate').and.returnValue(['some_value']);

      trigger();

      expect(deleteResult).toHaveBeenCalled();
    });
  });
  });
});