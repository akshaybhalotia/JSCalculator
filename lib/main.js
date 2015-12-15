var calc =  Calculator();
var input_checker = InputChecker();
var dom_interface = DOMInterface(input_checker);

function go (field) {
  var emptyValue = !field.value || field.value.trim().length === 0;
  if(emptyValue) {
    document.getElementById('result').value = '';
    document.getElementById(field.id).style.cssText = "border: 1px solid #DDD";
  } else {
    check(field.id);
  }
}

function check(fieldID) {
  var checkResult = dom_interface.checkFields(fieldID);
  if (checkResult) {
    document.getElementById('result').value = calc.calculate(parseFloat(document.getElementById('operand1').value), parseFloat(document.getElementById('operand2').value), document.getElementById('operator').value);
  } else {
    document.getElementById('result').value = '';
  }
}