// Obtener elementos del DOM
const cajaTexto = document.querySelector('.caja-texto');
const btnEncriptar = document.querySelector('.btn-encriptar');
const btnDesencriptar = document.querySelector('.btn-desencriptar');
const textoResultado = document.querySelector('.texto-resultado');

// Función para encriptar el texto
function encriptarTexto(texto) {
  let resultado = '';

  for (let i = 0; i < texto.length; i++) {
    let letra = texto[i];
    switch (letra) {
      case 'e':
        resultado += 'enter';
        break;
      case 'i':
        resultado += 'imes';
        break;
      case 'a':
        resultado += 'ai';
        break;
      case 'o':
        resultado += 'ober';
        break;
      case 'u':
        resultado += 'ufat';
        break;
      default:
        resultado += letra;
        break;
    }
  }

  return resultado;
}

// Función para desencriptar el texto
function desencriptarTexto(texto) {
  let resultado = '';

  let i = 0;
  while (i < texto.length) {
    let letra = texto[i];
    let siguienteTresCaracteres = texto.substr(i, 3);
    switch (siguienteTresCaracteres) {
      case 'ent':
        resultado += 'e';
        i += 4; // Saltar los siguientes tres caracteres (ent + er)
        break;
      case 'ime':
        resultado += 'i';
        i += 4; // Saltar los siguientes tres caracteres (ime + s)
        break;
      case 'ai':
        resultado += 'a';
        i += 2; // Saltar los siguientes dos caracteres (ai)
        break;
      case 'obe':
        resultado += 'o';
        i += 4; // Saltar los siguientes tres caracteres (obe + r)
        break;
      case 'ufa':
        resultado += 'u';
        i += 4; // Saltar los siguientes tres caracteres (ufa + t)
        break;
      default:
        resultado += letra;
        i++;
        break;
    }
  }

  return resultado;
}

// Función para procesar el texto al hacer clic en el botón "Encriptar"
function procesarEncriptar() {
  const texto = cajaTexto.value;
  const textoEncriptado = encriptarTexto(texto);
  textoResultado.textContent = textoEncriptado;
}

// Función para procesar el texto al hacer clic en el botón "Desencriptar"
function procesarDesencriptar() {
  const texto = cajaTexto.value;
  const textoDesencriptado = desencriptarTexto(texto);
  textoResultado.textContent = textoDesencriptado;
}

// Evento clic para encriptar
btnEncriptar.addEventListener('click', procesarEncriptar);

// Evento clic para desencriptar
btnDesencriptar.addEventListener('click', procesarDesencriptar);

// Función para procesar el texto al hacer clic en el botón "Encriptar"
function procesarEncriptar() {
    const texto = cajaTexto.value;
    const textoEncriptado = encriptarTexto(texto);
    textoResultado.textContent = textoEncriptado;
  
    // Ocultar el contenedor del muñeco
    const contenedorMunheco = document.querySelector('.contenedor-munheco');
    contenedorMunheco.style.display = 'none';
  }
  