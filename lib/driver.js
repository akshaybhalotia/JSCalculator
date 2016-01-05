var calculator = Calculator();
var validator = Validator();
var dom_editor = DOMEditor();
var fieldList = ['operand1', 'operand2', 'operator'];

function isEmpty(value) {
  return !value || value.trim().length === 0;
}

function deleteResult() {
  document.getElementById('result').value = '';
}

function highlightToggler(fieldsToHighlight) {
  fieldList.forEach(function(element, index, array) {
    if(fieldsToHighlight.indexOf(element) >= 0) {
      document.getElementById(element).classList.add('highlighted');
    } else {
      document.getElementById(element).classList.remove('highlighted');
    }
  });
}

function nonEmptyFields() {
  var fields = {};
  fieldList.forEach(function(element, index, array) {
    var value = document.getElementById(element).value;
    if(!isEmpty(value)) { fields[element] = value };
  });
  return fields;
}

function emptyFields() {
  var fields = [];
  var nonEmptyFieldList = Object.keys(nonEmptyFields());
  fields = fieldList.filter(function (element, index, array) {
    var elementIndex = nonEmptyFieldList.findIndex(
      function (value, indexNumber, arrayName) {
        return element === value;
    });
    return elementIndex < 0;
  });
  return fields;
}

function validate() {
  var fieldData = nonEmptyFields();
  var invalidFields;
  if (Object.keys(fieldData).length) {
    if(Object.keys(fieldData).length < 3) { deleteResult() };
    invalidFields = validator.validateFields(fieldData);
  }
  return invalidFields;
}

function calculate() {
  var result = calculator.execute(
    parseFloat(document.getElementById('operand1').value),
    parseFloat(document.getElementById('operand2').value),
    document.getElementById('operator').value);
  document.getElementById('result').value = result;
}

function trigger() {
  var invalidFields = validate();
  var emptyFieldList = emptyFields();
  if (invalidFields && emptyFieldList) {
    if (!invalidFields.length && !emptyFieldList.length) {
      calculate();
    } else {
      deleteResult();
    }
    highlightToggler(invalidFields);
  }
}
