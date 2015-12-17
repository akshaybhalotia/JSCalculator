var calc = Calculator();
var validator = Validator();
var dom_editor = DOMEditor();

function trigger (field) {
  var emptyValue = !field.value || field.value.trim().length === 0;
  if(emptyValue) {
    document.getElementById('result').value = '';
    document.getElementById(field.id).style.cssText = "border: 1px solid #DDD";
  } else {
    check(field.id);
  }
}

function check(fieldID) {
  console.log(document.getElementById('result'));
  var checkResult = dom_editor.checkFields(fieldID);
  if (checkResult) {
    document.getElementById('result').value = calc.calculate(parseFloat(document.getElementById('operand1').value), parseFloat(document.getElementById('operand2').value), document.getElementById('operator').value);
  } else {
    document.getElementById('result').value = '';
  }
}