module.exports = function solveEquation(equation) {
  var flag = false; //flag of + or -
  var aNumber = equation.slice(0, equation.indexOf('*') - 1);
  var bNumber = bFind(equation, aNumber);
  var cNumber = cFind(equation, aNumber, bNumber);
  var descr = bNumber * bNumber - 4 * aNumber * cNumber,
  x1 = Math.round((-bNumber + Math.sqrt(descr)) / (2 * aNumber)),
  x2 = Math.round((-bNumber - Math.sqrt(descr)) / (2 * aNumber));
      var answer = [x1, x2];
      answer.sort(function compareNumbers(a, b) {
      return a - b;
    });
    console.log(answer);
    return answer;
}
function bFind(equation, a)
{
    var b = equation.slice(equation.indexOf('^', a.length ) + 3, equation.indexOf('*', a.length + 3) - 1);
    b = b.replace(/\s+/g,'');
    return b;
}
function cFind(equation, a, b)
{
    var c = equation.slice(equation.indexOf('x', b.length + a.length) + 2, equation.lenghth);
    c = c.replace(/\s+/g,'');
    return c;
}
