function procesar(accion) {
    var textoElement = document.getElementById('texto');
    var resultado = document.getElementById('resultado');
    var texto = textoElement.value.toLowerCase(); // Convertir todo a minúsculas

    if (accion === 'encriptar') {
        resultado.value = encriptar(texto);
    } else if (accion === 'desencriptar') {
        resultado.value = desencriptar(texto);
    }

    if (textoElement) {
        textoElement.value = ''; // Limpiar el campo de texto original
    }

    verificarTexto();
}

function encriptar(texto) {
    // Encriptar el texto
    return texto.replace(/e/g, 'enter')
                .replace(/i/g, 'imes')
                .replace(/a/g, 'ai')
                .replace(/o/g, 'ober')
                .replace(/u/g, 'ufat');
}

function desencriptar(texto) {
    // Desencriptar el texto
    return texto.replace(/ufat/g, 'u')
                .replace(/ober/g, 'o')
                .replace(/ai/g, 'a')
                .replace(/imes/g, 'i')
                .replace(/enter/g, 'e');
}

function verificarTexto() {
    var resultado = document.getElementById('resultado');
    if (resultado.value.trim() !== '') {
        resultado.style.backgroundImage = 'none';
    } else {
        resultado.style.backgroundImage = 'url("img/turin.jpg")';
    }
}

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

window.onload = function() {
    verificarTexto();
}
