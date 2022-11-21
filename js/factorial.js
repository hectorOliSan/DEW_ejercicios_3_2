// General
let borrar_ayuda = (fac_ayuda) =>
  setTimeout(() => {
    fac_ayuda.innerText = "";
  }, 3000);

function accion_fac(metodo_fac) {
  let fac_ayuda = document.getElementById("fac_ayuda");
  fac_ayuda.innerText = "";

  let num = document.getElementById("num_fac").value;
  if (num == "") {
    fac_ayuda.innerText = "> Debes escribir un número";
    borrar_ayuda(fac_ayuda);
    return;
  }
  if (Number(num) < 0) {
    fac_ayuda.innerText = "> Debes introducir 0 o un número positivo";
    borrar_ayuda(fac_ayuda);
    return;
  }
  let fac = metodo_fac(num);
  document.getElementById("res_fac").value = fac;
}

// Factorial
function factorial(num) {
  console.log("Factorial");
  if (num == 0 || num == 1) return 1;
  for (let i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
}

// Factorial Recursivo
function factorial_r(num) {
  if (num == 0 || num == 1) {
    console.log("Factorial Recursivo");
    return 1;
  } else return num * factorial_r(num - 1);
}
