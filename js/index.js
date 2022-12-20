let texto = "el gato es un animal muy malo";
let textoDos ="enterl gaitober enters ufatn ainimesmail mufaty mailober";
function encriptar(textoEncrip){
    let nuevaEncr = textoEncrip.replace(/a|e|i|o|u/gi, function (parametro) {
        if(parametro == "a") return parametro.replace("a","ai");
        if(parametro == "e") return parametro.replace("e","enter");
        if(parametro == "i") return parametro.replace("i","imes");
        if(parametro == "o") return parametro.replace("o","ober");
        if(parametro == "u") return parametro.replace("u","ufat");
    });
    console.log(nuevaEncr);
}
function desencriptar(textoDesEncrip){
    let nuevaDesEncr = textoDesEncrip.replace(/ai|enter|imes|ober|ufat/gi, function (parametro) {
        if(parametro == "ai") return parametro.replace("ai","a");
        if(parametro == "enter") return parametro.replace("enter", "e");
        if(parametro == "imes") return parametro.replace("imes", "i");
        if(parametro == "ober") return parametro.replace("ober", "o");
        if(parametro == "ufat") return parametro.replace("ufat", "u");
    });
    console.log(nuevaDesEncr);
}
encriptar(texto);
desencriptar(texto);
/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/