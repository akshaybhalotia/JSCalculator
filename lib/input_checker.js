function InputChecker() {
  function checkNumber(input) {
    if (input.toString().match(/^[-+]?[0-9]*\.?[0-9]+$/)) {
      return true;
    }
    return false;
  }
  function checkOperator(operator) {
    if (operator.match(/^[\^\-+\/\*]$/)) {
      return true;
    }
    return false;
  }

  return {
    checkNumber: checkNumber,
    checkOperator: checkOperator
  }
}
