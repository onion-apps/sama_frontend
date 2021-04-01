function calculate() {
  var interest = 0.04;
  var principal = 0;
  var months = 3;
  var CI = 0;

  principal = parseInt(document.getElementById("principal").value);
   
  if(document.getElementById('principal').value.length == 0){
    alert("ENTER AMOUNT");
  } 

  CI = principal * interest * months + principal;
  mi = CI / months;
  document.getElementById("res").innerHTML = CI.toString();
  document.getElementById("mi").innerHTML = mi.toFixed(2);
  document.getElementById("interest").innerHTML = interest.toString();
  document.getElementById("months").innerHTML = months.toString();

}
