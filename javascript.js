const txtOrigen = document.getElementById("textoOrigen");
const txtDestino = document.getElementById("textoDestino");
const imgMonito = document.getElementById("monito");
const btnCopiar = document.getElementById("botonCopiar");
const msgUno = document.getElementById("msgUno");
const msgDos = document.getElementById("msgDos");

// Mayusculas, caracters especiales
txtOrigen.addEventListener("input", function () {
    let txtNuevo = txtOrigen.value.toLowerCase();
    txtNuevo = txtNuevo.replace(/[^a-z\s]/g, "");
    txtOrigen.value = txtNuevo;
});

// Encriptar
function fncEncriptar() {
    const txtReemplazo = { 'e': 'enter', 'i': 'imes', 'a': 'ai', 'o': 'ober', 'u': 'ufat' };
    let txtNuevo = txtOrigen.value;
    txtNuevo = txtNuevo.replace(/[aeiou]/g, matched => txtReemplazo[matched]);
    txtDestino.textContent = txtNuevo;
    ocultarMostrarElementos();
}

// Desencriptar
function fncDesencriptar() {
    const txtReemplazo = { 'enter': 'e', 'imes': 'i', 'ai': 'a', 'ober': 'o', 'ufat': 'u' };
    let txtNuevo = txtOrigen.value;
    txtNuevo = txtNuevo.replace(/(enter|imes|ai|ober|ufat)/g, matched => txtReemplazo[matched]);
    txtDestino.textContent = txtNuevo;
    ocultarMostrarElementos();
}

// Ocultar y mostrar elementos
function ocultarMostrarElementos() {
    imgMonito.style.opacity = 0.1;
    msgUno.style.opacity = 0;
    msgDos.style.opacity = 0;
    txtDestino.style.fontSize = '20px';
    btnCopiar.style.opacity = 1;
    btnCopiar.disabled = false;
    btnCopiar.style.cursor = "pointer";
    /*ajustarTextoAlContenedor();*/
}

// Copiar
function fncCopiar() {
    const range = document.createRange();
    range.selectNode(txtDestino);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
}

/*
function ajustarTextoAlContenedor() {
    var contenedor = document.querySelector('.contenedorInicial');
    var texto = document.getElementById('textoDestino');
    var contenedorWidth = contenedor.offsetWidth;
    var contenedorHeight = contenedor.offsetHeight;
    
    var fontSize = Math.min(contenedorWidth / 10, contenedorHeight / 2);
    texto.style.fontSize = fontSize + 'px';
}

window.onload = ajustarTextoAlContenedor;
window.onresize = ajustarTextoAlContenedor;
*/