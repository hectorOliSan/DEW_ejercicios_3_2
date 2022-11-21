// General
let borrar_ayuda = (ayuda) =>
  setTimeout(() => {
    ayuda.innerText = "";
  }, 3000);

// Intercambio
function inter_valor(num1, num2) {
  document.getElementById("num1").value = num2;
  document.getElementById("num2").value = num1;
}

function inter_refer(obj) {
  document.getElementById("num1").value = obj.num_2;
  document.getElementById("num2").value = obj.num_1;
}

function accion_paso(metodo_paso) {
  let paso_ayuda = document.getElementById("paso_ayuda");
  paso_ayuda.innerText = "";

  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  if (num1 < 1 || num2 < 1) {
    paso_ayuda.innerText = "> Debes introducir un número > 0";
    borrar_ayuda(paso_ayuda);
    return;
  }

  if (metodo_paso.name == "inter_valor") metodo_paso(num1, num2);
  else if (metodo_paso.name == "inter_refer") {
    let obj_num = new Object();
    obj_num.num_1 = num1;
    obj_num.num_2 = num2;
    inter_refer(obj_num);
  }
}

// Suma
function suma(list_numeros) {
  let res_suma = 0;
  let numeros = list_numeros.split(",").map(Number);
  for (let i = 0; i < numeros.length; i++) {
    res_suma += numeros[i];
  }
  document.getElementById("res_suma").value = res_suma;
}

function accion_suma() {
  let suma_ayuda = document.getElementById("suma_ayuda");
  suma_ayuda.innerText = "";
  document.getElementById("res_suma").value = "";

  let list_numeros = document.getElementById("list_numeros").value;
  let regex = /^((-)?[0-9]+(.[0-9]+)?(,)?)+$/;
  if (list_numeros.match(regex) == null) {
    suma_ayuda.innerText = "> Debes introducir una lista de números";
    borrar_ayuda(suma_ayuda);
    return;
  }
  suma(list_numeros);
}

// Información
function informacion(nombre, localidad = "LAS PALMAS DE GC", valor = 100) {
  document.getElementById("res_info").value =
    nombre + "  " + localidad + "  " + valor;
}
