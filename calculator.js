let cost = document.getElementById("cost");
cost.addEventListener('change', this.calcDefaultOnChange);
let initialPayment = document.getElementById("initialPayment");
initialPayment.addEventListener('change', this.calcInitialPaymentOnChange);
let period = document.getElementById("period");
period.addEventListener('change', this.calcDefaultOnChange);
let res = document.getElementById("res");

function calc() {
  let es = 18.7 / 12 / 100;
  let os = (es + 1) ** (+period.value * 12);
  let result = Math.round(((+cost.value - +initialPayment.value) * es * os) / (os - 1));
  res.hidden = false;
  res.innerHTML = `Ваш ежемесячный платеж составит: ${result} руб.`
}

function calcDefaultOnChange(e) {
  if (parseInt(e.target.value) < parseInt(e.target.min) || e.target.value == '') {
    e.target.value = e.target.min;
  } else if (parseInt(e.target.value) > parseInt(e.target.max)) {
    e.target.value = e.target.max;
  }
}

function calcInitialPaymentOnChange(e) {
  let minPayment = parseInt(cost.value) * 0.1;
  let maxPayment = parseInt(cost.value) * 0.9;
  if (parseInt(e.target.value) < minPayment || e.target.value == '') {
    e.target.value = minPayment;
  } else if (parseInt(e.target.value) > maxPayment) {
    e.target.value = maxPayment;
  }
}