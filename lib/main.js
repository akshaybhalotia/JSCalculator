var calc =  Calculator();
var input_checker = InputChecker();
var dom_interface = DOMInterface(input_checker);

function go (field) {
  var emptyValue = !field.value || field.value.trim().length === 0;
  if(emptyValue) {
    document.getElementById('result').value = '';
  } else {
    check(field.id);
  }
}

function check(fieldID) {
  var checkResult = dom_interface.checkFields(fieldID);
  if (checkResult) {
    document.getElementById('result').value = calc.calculate(parseInt(document.getElementById('operand1').value), parseInt(document.getElementById('operand2').value), document.getElementById('operator').value);
  } else {
    document.getElementById('result').value = '';
  }
}