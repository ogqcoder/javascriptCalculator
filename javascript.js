var cont = document.getElementById("container");
cont.onchange = function () {
  var bill = Number(document.getElementById("billTotal").value);
  var split = document.getElementById("splitInput").value;
  var tip = document.getElementById("tipInput").value;
  var tipValue = bill * (tip / 100);
  var newBillEach = (bill + tipValue) / split;
  var tipEach = tipValue / split;

  document.getElementById("tipOutput").innerHTML = tip + "%";
  document.getElementById("splitOutput").innerHTML = split;
  document.getElementById("newBillId").innerHTML = "$" + newBillEach.toFixed(2);
  document.getElementById("tipEachOutput").innerHTML = "$" + tipEach.toFixed(2);
};
