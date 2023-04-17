let expression = "";
let lastSymbol = "";
let result = 0;
let symbols = ['*','/','+','-','='] 

function addSymbol(symbol) {
  if (symbols.some(item=>item === lastSymbol)&& symbols.some(item=>item === symbol))
  {
    return;
  }
  expression += symbol;
  document.getElementById("expression").value = expression;
  lastSymbol = symbol;
}

function clearExpression() {
  expression = "";
  result = 0;
  document.getElementById("expression").value = expression;
  document.getElementById("result").value = result;
}

function calculate() {
  result = eval(expression);
  if(result){
    document.getElementById("result").value = result;
  };
}