// Moneda
let cara = 0;
let cruz = 0;

function lanzar() {
  let resultado = Math.floor(Math.random() * 2);
  let coin = document.getElementById("coin");
  coin.style.animation = "none";
  //resultado ? cara++ : cruz++;
  if (resultado == 0) {
    cara++;
    setTimeout(function () {
      document.getElementById("moneda").src = "../images/cara.svg";
    }, 2300);
  } else {
    cruz++;
    setTimeout(function () {
      document.getElementById("moneda").src = "../images/euro.svg";
    }, 2300);
  }
  setTimeout(function () {
    coin.style.animation = "rotar 3s forwards";
  }, 100);
  btn_lanzar();
  actualizar(cara, cruz);
}

function actualizar(cara, cruz) {
  setTimeout(function () {
    document.getElementById("cont-cara").innerText = "Cara: " + cara;
    document.getElementById("cont-cruz").innerText = "Cruz: " + cruz;
  }, 3000);
}

function btn_lanzar() {
  let btn = document.getElementById("btn_lanzar");
  btn.disabled = true;
  setTimeout(function () {
    btn.disabled = false;
  }, 3000);
}
