function calculate(){
    var p = 0;
    var i = 0.04;
    var n = 3;
    var CI = 0;

    p = parseInt(document.getElementById("principal").value);

    CI = ((p*i*n)+p);
    document.getElementById("res").innerHTML=CI;
  }
