const txtOrigen = document.getElementById("origen");
const txtDestino = document.getElementById("destino");
const muñeco = document.getElementById("muñeco");
const btnCopiar = document.getElementById("copiar");
const msgEncriptado = document.getElementsByClassName("mensajeEncriptado");

// Prevenir entrada de mayúsculas y caracteres no permitidos
txtOrigen.addEventListener("input", function () {
    let txtNuevo = txtOrigen.value.toLowerCase();
    txtNuevo = txtNuevo.replace(/[^a-z\s]/g, "");
    txtOrigen.value = txtNuevo;
});

// Función para encriptar
function fncEncriptar() {
    const txtReemplazo = { 'e': 'enter', 'i': 'imes', 'a': 'ai', 'o': 'ober', 'u': 'ufat' };
    let txtNuevo = txtOrigen.value;
    txtNuevo = txtNuevo.replace(/[aeiou]/g, matched => txtReemplazo[matched]);
    txtDestino.textContent = txtNuevo;
    
    ocultarMostrarElementos();
    //copiarBtn.disabled = false;
    //muñeco.style.opacity = 0.1;
}

// Función para desencriptar
function fncDesencriptar() {
    const txtReemplazo = { 'enter': 'e', 'imes': 'i', 'ai': 'a', 'ober': 'o', 'ufat': 'u' };
    let txtNuevo = txtOrigen.value;
    txtNuevo = txtNuevo.replace(/(enter|imes|ai|ober|ufat)/g, matched => txtReemplazo[matched]);
    txtDestino.textContent = txtNuevo;
    
    ocultarMostrarElementos();
    //copiarBtn.disabled = false;
    //muñeco.style.opacity = 0.1;
}


function ocultarMostrarElementos() {
    /*imgMuñeco.style.display = 'none';
    msgUno.style.display = 'none';
    msgDos.style.display = 'none';
    txtDestino.style.fontSize = '24px'; // Tamaño de fuente más grande
    txtDestino.style.textAlign = 'center';
    txtDestino.style.margin = 'auto';
    divMensaje.style.justifyContent = 'center';*/
    msgEncriptado.style.display = 'none';

    btnCopiar.style.display = 'inline-block'; // Mostrar botón Copiar
    divMensaje.style.opacity = 1; // Mostrar mensaje
}

// Función para copiar al portapapeles
function fncCopiar() {
    const range = document.createRange();
    range.selectNode(txtDestino);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
}
