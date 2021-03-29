function calculate() {
  var interest = 0.04;
  var principal = 0;
  if(isNaN(num1)){
    document.write(num1 + " is not a number <br/>");
  }
    var months = 3;
  var CI = 0;
    // Fetch values from input elements
  principal = parseInt(document.getElementById("principal").value);

  CI = principal * interest * months + principal;
  mi = CI / months;
  document.getElementById("res").innerHTML = CI.toString();
  document.getElementById("mi").innerHTML = mi.toFixed(2);
  document.getElementById("interest").innerHTML = interest.toString();
  document.getElementById("months").innerHTML = months.toString();

}