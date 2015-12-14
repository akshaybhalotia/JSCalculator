function Calculator() {
  
  function calculate(param1, param2, op) {
    var operations = {'^': function(x, y) { return Math.pow(x, y) }, '/': function(x, y) { return x/y }, '*': function(x, y) { return x*y }, '+': function(x, y) { return x+y }, '-': function(x, y) { return x-y }};
    var operation = operations[op];
    try {
      var result = operation(param1, param2);
    } catch (e) {
      throw new Error("Calculation unsuccessful. Reason: "+e.name);
    }
    return result;
  }

  return {
    calculate: calculate
  }
}
