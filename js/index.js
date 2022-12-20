const HTMLmain = document.querySelector(".salida");
function encriptar(){
    let textoEncrip = document.querySelector(".enviarTexto").value;
    let mensaje = document.querySelector(".advertencia");
    let validarTexto = false;
    let bigText = textoEncrip.replace(/[A-Z]/,"");
    let acentoText = textoEncrip.replace(/[áéíóú]/,"");
    if(bigText == textoEncrip || acentoText == validarTexto)validarTexto = true;
    if(validarTexto){
        let nuevaEncr = textoEncrip.replace(/a|e|i|o|u/gi, function (parametro) {
            if(parametro == "a") return parametro.replace("a","ai");
            if(parametro == "e") return parametro.replace("e","enter");
            if(parametro == "i") return parametro.replace("i","imes");
            if(parametro == "o") return parametro.replace("o","ober");
            if(parametro == "u") return parametro.replace("u","ufat");
        });
        HTMLmain.innerHTML = `<textarea class="mostrarTexto" cols="10" rows="10">${nuevaEncr}</textarea>
        <button class="copiarTexto" id="copiarTexto">Copiar</button>`;
        document.querySelector(".copiarTexto").addEventListener("click",copiar);
        mensaje.style.color = "green";
        mensaje.innerHTML = "# Encriptado exitoso";
    }else{
        mensaje.style.color = "red";
        mensaje.innerHTML = "# NO se puede ingresar mayúsculas o acentos";
    }
}
function desencriptar(){
    let mensaje = document.querySelector(".advertencia");
    let textoDesEncrip = document.querySelector(".enviarTexto").value;
    let nuevaDesEncr = textoDesEncrip.replace(/ai|enter|imes|ober|ufat/gi, function (parametro) {
        if(parametro == "ai") return parametro.replace("ai","a");
        if(parametro == "enter") return parametro.replace("enter", "e");
        if(parametro == "imes") return parametro.replace("imes", "i");
        if(parametro == "ober") return parametro.replace("ober", "o");
        if(parametro == "ufat") return parametro.replace("ufat", "u");
    });
    HTMLmain.innerHTML = `<textarea class="mostrarTexto" cols="30" rows="10">${nuevaDesEncr}</textarea>
    <button class="copiarTexto" id="copiarTexto">Copiar</button>`;
    document.querySelector(".copiarTexto").addEventListener("click",copiar);
    mensaje.style.color = "#495057";
    mensaje.innerHTML = "# Solo letras minúsculas sin acentos";
}
function copiar(){
    let textoCopiar = document.querySelector(".mostrarTexto");
    textoCopiar.select();
    document.execCommand("copy");
    //document.querySelector(".enviarTexto").value = textoCopiar.value;
}
document.getElementById("encriptar").addEventListener("click",encriptar);
document.getElementById("desencriptar").addEventListener("click",desencriptar);
