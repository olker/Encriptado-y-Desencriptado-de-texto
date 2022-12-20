const HTMLmain = document.querySelector(".salida");
function encriptar(){
    let textoEncrip = document.querySelector(".enviarTexto").value;
    let nuevaEncr = textoEncrip.replace(/a|e|i|o|u/gi, function (parametro) {
        if(parametro == "a") return parametro.replace("a","ai");
        if(parametro == "e") return parametro.replace("e","enter");
        if(parametro == "i") return parametro.replace("i","imes");
        if(parametro == "o") return parametro.replace("o","ober");
        if(parametro == "u") return parametro.replace("u","ufat");
    });
    HTMLmain.innerHTML = `<textarea class="mostrarTexto" cols="10" rows="10">${nuevaEncr}</textarea>
    <button class="copiarTexto">Copiar</button>`;
}
function desencriptar(){
    let textoDesEncrip = document.querySelector(".enviarTexto").value;
    let nuevaDesEncr = textoDesEncrip.replace(/ai|enter|imes|ober|ufat/gi, function (parametro) {
        if(parametro == "ai") return parametro.replace("ai","a");
        if(parametro == "enter") return parametro.replace("enter", "e");
        if(parametro == "imes") return parametro.replace("imes", "i");
        if(parametro == "ober") return parametro.replace("ober", "o");
        if(parametro == "ufat") return parametro.replace("ufat", "u");
    });
    HTMLmain.innerHTML = `<textarea class="mostrarTexto" cols="30" rows="10">${nuevaDesEncr}</textarea>
                          <button class="copiarTexto">Copiar</button>`;
}
document.getElementById("encriptar").addEventListener("click",encriptar);
document.getElementById("desencriptar").addEventListener("click",desencriptar);
