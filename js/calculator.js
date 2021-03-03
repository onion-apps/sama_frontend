function calculate() {
  var interest = 0.04;
  var principal = 0;
  var months = 3;
  var CI = 0;

  // Fetch values from input elements
  principal = parseInt(document.getElementById("principal").value);
  

  CI = principal * interest * months + principal;
  document.getElementById("res").innerHTML = CI.toString();
}
