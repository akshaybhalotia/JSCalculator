function Validator() {

  var operandList = ["operand1", "operand2"];
  var operatorList = ["operator"];

  function validateOperand(operand) {
    if (operand.toString().match(/^[-+]?[0-9]*\.?[0-9]+$/)) {
      return true;
    }
    return false;
  }
  
  function validateOperator(operator) {
    if (operator.match(/^[\^\-+\/\*]$/)) {
      return true;
    }
    return false;
  }

  function validateFields (fieldMap) {
    var invalidFields = [];
    operandList.forEach(function(element, index, array) {
      if(fieldMap[element] && !validateOperand(fieldMap[element])) { invalidFields.push(element) };
    });
    operatorList.forEach(function(element, index, array) {
      if(fieldMap[element] && !validateOperator(fieldMap[element])) { invalidFields.push(element) };
    });
    return invalidFields;
  }

  return {
    validateOperand: validateOperand,
    validateOperator: validateOperator,
    validateFields: validateFields
  }
}
