// Piedra, papel y tijera
let juego = { Piedra: 0, Papel: 1, Tijeras: 2 };
let eleccion = ["Piedra", "Papel", "Tijeras"];

function quitar_selec() {
  document.getElementById("0").classList.remove("border-primary");
  document.getElementById("1").classList.remove("border-primary");
  document.getElementById("2").classList.remove("border-primary");
  document.getElementById("0").classList.add("border-dark");
  document.getElementById("1").classList.add("border-dark");
  document.getElementById("2").classList.add("border-dark");
}

function quitar_col() {
  document.getElementById("resultado").classList.remove("text-muted");
  document.getElementById("resultado").classList.remove("text-success");
  document.getElementById("resultado").classList.remove("text-danger");
}

function selec() {
  quitar_selec();
  let move = document.querySelector('input[name="ppt"]:checked');
  document.getElementById(move.value).classList.remove("border-dark");
  document.getElementById(move.value).classList.add("border-primary");
}

function reordenar() {
  setTimeout(function () {
    document.getElementById("maq_2").classList.remove("order-first");
    document.getElementById("maq_1").classList.remove("order-first");
    document.getElementById("maq_0").classList.remove("order-first");
  }, 1000);
}

let borrar_res = () =>
  setTimeout(() => {
    document.getElementById("resultado").innerText = "";
  }, 3000);

function comprobar_mov() {
  let move = document.querySelector('input[name="ppt"]:checked');
  if (move == null) {
    let res = document.getElementById("resultado");
    res.classList.add("text-muted");
    res.innerHTML = "> Debes elegir una opción";
    borrar_res();
    return 0;
  }
  return 1;
}

function ppt() {
  document.getElementById("p_res").innerText = "";
  document.getElementById("resultado").innerText = "";
  quitar_col();
  if (!comprobar_mov()) return;
  let res_maquina = Math.floor(Math.random() * 3);
  let mov_maquina = document.getElementById("mov_maquina");
  reordenar();
  mov_maquina.style.animation = "none";
  setTimeout(function () {
    mov_maquina.style.animation = "slide 2s ease-out";
  }, 100);
  setTimeout(function () {
    document.getElementById("maq_" + res_maquina).classList.add("order-first");
  }, 1000);
  comprobar_result(res_maquina);
}

let ganadas = 0;
let perdidas = 0;
let empates = 0;

function comprobar_result(res_maquina) {
  let resultado = "";
  let res = document.getElementById("resultado");
  let move = document.querySelector('input[name="ppt"]:checked').value;
  if (move == res_maquina) {
    empates++;
    resultado =
      "El Usuario/a y la máquina eligieron " + eleccion[move] + ". Empate!";
  }

  // Piedra
  else if (move == juego["Piedra"]) {
    if (res_maquina == juego["Tijeras"]) {
      ganadas++;
      res.classList.add("text-success");
      resultado =
        "Piedra<SUB>usuario/a</SUB> VENCE a Tijeras<SUB>máquina</SUB> Has ganado 🔥!";
    } else {
      perdidas++;
      res.classList.add("text-danger");
      resultado =
        "Papel<SUB>máquina</SUB> VENCE a Piedra<SUB>usuario/a</SUB> Has perdido!";
    }
  }

  // Papel
  else if (move == juego["Papel"]) {
    if (res_maquina == juego["Piedra"]) {
      ganadas++;
      res.classList.add("text-success");

      resultado =
        "Papel<SUB>usuario/a</SUB> VENCE a Piedra<SUB>máquina</SUB> Has ganado 🔥!";
    } else {
      perdidas++;
      res.classList.add("text-danger");
      resultado =
        "Tijeras<SUB>máquina</SUB> VENCE a Papel<SUB>usuario/a</SUB> Has perdido!";
    }
  }

  // Tijeras
  else if (move == juego["Tijeras"]) {
    if (res_maquina == juego["Papel"]) {
      ganadas++;
      res.classList.add("text-success");
      resultado =
        "Tijeras<SUB>usuario/a</SUB> VENCE a Papel<SUB>máquina</SUB> Has ganado 🔥!";
    } else {
      perdidas++;
      res.classList.add("text-danger");
      resultado =
        "Piedra<SUB>máquina</SUB> VENCE a Tijeras<SUB>usuario/a</SUB> Has perdido!";
    }
  }

  setTimeout(function () {
    document.getElementById("cont-empate").innerText = empates;
    document.getElementById("cont-user").innerText = ganadas;
    document.getElementById("cont-maq").innerText = perdidas;
    document.getElementById("p_res").innerText = "Resultado: ";
    document.getElementById("resultado").innerHTML = " " + resultado;
  }, 2100);
}
