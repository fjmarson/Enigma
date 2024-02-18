function procesar(accion) {
    var textoElement = document.getElementById('texto');
    var resultado = document.getElementById('resultado');
    var texto = textoElement.value;

    // Verifica si hay caracteres no permitidos
    if (tieneCaracteresNoPermitidos(texto)) {
        alert("Por favor, ingrese solo letras minúsculas y sin acentos.");
        return; // Salimos de la función
    }

    // Verifica si estamos encriptando
    if (accion === 'encriptar') {
        resultado.value = encriptar(texto);
    } else if (accion === 'desencriptar') {
        resultado.value = desencriptar(texto);
    }

    // Limpia solo el textarea 'texto'
    textoElement.value = '';

    // Verifica el texto restante en 'resultado'
    verificarTexto();
}

// Función para verificar si hay caracteres no permitidos en el texto
function tieneCaracteresNoPermitidos(texto) {
    return /[^a-z ]/.test(texto);
}

function encriptar(texto) {
    return texto.replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
}

function desencriptar(texto) {
    return texto.replace(/ufat/g, 'u')
        .replace(/ober/g, 'o')
        .replace(/ai/g, 'a')
        .replace(/imes/g, 'i')
        .replace(/enter/g, 'e');
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
document.getElementById('resultado').addEventListener('blur', verificarTexto);

function copiarResultado() {
    var resultado = document.getElementById('resultado');
    resultado.select();
    navigator.clipboard.writeText(resultado.value);
    alert('Texto copiado al portapapeles');
}

// Llama a verificarTexto() cuando la página se carga
window.onload = function() {
    verificarTexto();
}