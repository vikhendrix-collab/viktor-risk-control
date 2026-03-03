function calcular() {
  let capital = parseFloat(document.getElementById("capital").value);
  let stopLoss = parseFloat(document.getElementById("stopLoss").value);
  let stopWin = parseFloat(document.getElementById("stopWin").value);
  let risk = parseFloat(document.getElementById("risk").value);
  let payout = parseFloat(document.getElementById("payout").value);

  if (!capital || !stopLoss || !stopWin || !risk || !payout) {
    alert("Preencha todos os campos!");
    return;
  }

  let stopLossValue = capital * (stopLoss / 100);
  let stopWinValue = capital * (stopWin / 100);

  let entry1 = capital * (risk / 100);
  let mg1 = (capital - entry1) * (risk / 100) * 2;
  let mg2 = (capital - entry1 - mg1) * (risk / 100) * 2;

  document.getElementById("loss").innerText =
    "Stop Loss em R$: " + stopLossValue.toFixed(2);

  document.getElementById("win").innerText =
    "Stop Win em R$: " + stopWinValue.toFixed(2);

  document.getElementById("entry1").innerText =
    "Entrada 1: R$ " + entry1.toFixed(2);

  document.getElementById("mg1").innerText =
    "Martingale 1: R$ " + mg1.toFixed(2);

  document.getElementById("mg2").innerText =
    "Martingale 2: R$ " + mg2.toFixed(2);
}
