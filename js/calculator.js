function calculate(){
    var p = 0;
    var i = 0.04;
    var n = 0;
    var CI = 0;

    p = parseInt(document.getElementById("principal").value);
    i = parseInt(document.getElementById("annual-interest-rate").value);
    n = parseInt(document.getElementById("number-of-period").value);

    CI = ((p*(i)*n)+p);
    document.getElementById("res").innerHTML=CI;
  }
