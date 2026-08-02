
let numero = 3;

const contador = document.getElementById("contador");
const resultado = document.getElementById("resultado");

if (contador && resultado) {

  contador.innerHTML = numero;

  let cuenta = setInterval(() => {

    numero--;

    if (numero > 0) {
      contador.innerHTML = numero;
    } else {
      clearInterval(cuenta);

      contador.classList.add("oculto");
      resultado.classList.remove("oculto");
    }

  }, 1000);

}
