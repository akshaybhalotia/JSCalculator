function Calculator() {
  
  function execute(param1, param2, operator) {
    var operations = {
                      '^': function(x, y) { return Math.pow(x, y) },
                      '/': function(x, y) { return x/y },
                      '*': function(x, y) { return x*y },
                      '+': function(x, y) { return x+y },
                      '-': function(x, y) { return x-y }
                    };
    var operation = operations[operator];
    var result;
    if(operation) {
      result = operation(param1, param2);
    } else {
      result = "Invalid operator";
    }
    return result;
  }

  return {
    execute: execute
  }
}
