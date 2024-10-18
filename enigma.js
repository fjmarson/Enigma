function procesar(accion) {
    var textoElement = document.getElementById('texto');
    var resultado = document.getElementById('resultado');
    var texto = textoElement.value;

    // Verifica si estamos encriptando
    if (accion === 'encriptar') {
        resultado.value = encriptar(texto);
    } else if (accion === 'desencriptar') {
        resultado.value = desencriptar(texto);
    }

    // Limpia solo el textarea 'texto'
    if (textoElement) {
        textoElement.value = '';
    }

    // Verifica el texto restante en 'resultado'
    verificarTexto();
}

// Función para verificar si hay caracteres no permitidos en el texto
function tieneCaracteresNoPermitidos(texto) {
    // Elimina las restricciones de caracteres no permitidos
    return false;
}

function encriptar(texto) {
    // Guarda la capitalización original
    const mayusculas = texto.split('').map((letra, index) => {
        return letra === letra.toUpperCase() ? index : -1;
    }).filter(index => index !== -1);

    // Convierte el texto a minúsculas para encriptar
    var textoEncriptado = texto.toLowerCase().replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');

    // Restaura la capitalización original
    mayusculas.forEach(index => {
        textoEncriptado = textoEncriptado.slice(0, index) +
            textoEncriptado[index].toUpperCase() +
            textoEncriptado.slice(index + 1);
    });

    return textoEncriptado;
}

function desencriptar(texto) {
    // Guarda la capitalización original
    const mayusculas = texto.split('').map((letra, index) => {
        return letra === letra.toUpperCase() ? index : -1;
    }).filter(index => index !== -1);

    // Convierte el texto a minúsculas para desencriptar
    var textoDesencriptado = texto.toLowerCase().replace(/ufat/g, 'u')
        .replace(/ober/g, 'o')
        .replace(/ai/g, 'a')
        .replace(/imes/g, 'i')
        .replace(/enter/g, 'e');

    // Restaura la capitalización original
    mayusculas.forEach(index => {
        textoDesencriptado = textoDesencriptado.slice(0, index) +
            textoDesencriptado[index].toUpperCase() +
            textoDesencriptado.slice(index + 1);
    });

    return textoDesencriptado;
}

function verificarTexto() {
    var resultado = document.getElementById('resultado');

    if (resultado.value.trim() !== '') {
        // Si hay texto en el área de texto, elimina la imagen de fondo
        resultado.style.backgroundImage = 'none';
    } else {
        // Si no hay texto en el área de texto, muestra la imagen de fondo
        resultado.style.backgroundImage = 'url("img/turin.jpg")';
    }
}

// Agrega el evento onblur al textarea
if (document.getElementById('resultado')) {
    document.getElementById('resultado').addEventListener('blur', verificarTexto);
}

function copiarResultado() {
    var resultado = document.getElementById('resultado');
    if (resultado) {
        resultado.select();
        navigator.clipboard.writeText(resultado.value);
        alert('Texto copiado al portapapeles');
    }
}

// Llama a verificarTexto() cuando la página se carga
window.onload = function() {
    verificarTexto(); 
}
