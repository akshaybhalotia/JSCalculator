function DOMInterface (inputChecker) {

  var operandFieldList = { "operand1": "Operand 1", "operand2": "Operand 2" };
  var operatorFieldList = { "operator": "Operator" };
  
  function checkFields(triggerField) {
    var shouldCalculate = true;
    var operands = Object.keys(operandFieldList);
    var i;
    for(i = 0; i < operands.length; i++) {
      var field = document.getElementById(operands[i]);
      var valid = inputChecker.checkNumber(field.value)
      shouldCalculate = shouldCalculate && valid;
      if (triggerField === field.id) {
        if (valid) {
          field.style.cssText = "border: 1px solid green";
        } else {
          field.style.cssText = "border: 1px solid red";
          alert("Incorrect "+operandFieldList[triggerField]);
        }
      }
    }
    var operators = Object.keys(operatorFieldList);
    for(i = 0; i < operators.length; i++) {
      var field = document.getElementById(operators[i]);
      var valid = inputChecker.checkOperator(field.value);
      shouldCalculate = shouldCalculate && valid;
      if (triggerField === field.id) {
        if (valid) {
          field.style.cssText = "border: 1px solid green";
        } else {
          field.style.cssText = "border: 1px solid red";
          alert("Incorrect "+operatorFieldList[triggerField]);
        }
      }
    }
    return shouldCalculate;
  }

  return {
    checkFields: checkFields
  }
}
