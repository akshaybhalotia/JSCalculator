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
          field.style.cssText = "border: 1px solid #DDD";
        } else {
          field.style.cssText = "border: 2px solid #B01732";
        }
      }
    }
    var operators = Object.keys(operatorFieldList);
    for(i = 0; i < operators.length; i++) {
      field = document.getElementById(operators[i]);
      valid = inputChecker.checkOperator(field.value);
      shouldCalculate = shouldCalculate && valid;
      if (triggerField === field.id) {
        if (valid) {
          field.style.cssText = "border: 1px solid #DDD";
        } else {
          field.style.cssText = "border: 2px solid #B01732";
        }
      }
    }
    return shouldCalculate;
  }

  return {
    checkFields: checkFields
  }
}
