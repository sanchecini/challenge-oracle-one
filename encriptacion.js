var input = document.querySelector("#encriptar");
var output = document.querySelector("#mensaje");

var btnEnc = document.querySelector("#btn-encryptar");
var btnDec = document.querySelector("#btn-desencryptar");
var btnCopy = document.querySelector("#btn-copiar");

document.getElementById("mensaje").style.display = "none";
document.getElementById("btn-copiar").style.display = "none";
 

function checkError(){
    let may = /[A-Z]/g;
    let chr = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g;
    let nmb = /[0-9]/g;
    
    if (input.value.match(may) != input.value.match(may)){
        alert("No se admiten mayúsculas");
    }
    else if (input.value.match(chr) != input.value.match(chr)) {
        alert("No puede contener caracteres especiales");
    }
    else if (input.value.match(nmb) != input.value.match(nmb)) {
        alert("No puede contener números");
    }
    else if (input.value == "") {
        alert("El campo no puede estar vacio");
    }
    else {
        return true;
    }

}

function encriptar() {
    if(checkError() === true) {
        ocultarVer();
        let res = input.value;
        res = res
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat")
    
        output.value = res;
    }
    
}
    
function desencriptar() {
    if(checkError() === true) {
        ocultarVer();
        let res = input.value;
        res = res
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u")
        
        output.value = res;
    }
}

function copiar() {
    navigator.clipboard.writeText(output.value);
    input.value = "";
    input.focus();
}

function ocultarVer() {
    document.getElementById("img-1").style.display = "none";
    document.getElementById("img-2").style.display = "none";
    document.getElementById("text-0").style.display = "none";
    document.getElementById("text-1").style.display = "none";
    document.getElementById("mensaje").style.display = "block";
    document.getElementById("btn-copiar").style.display = "block";
}


btnEnc.onclick = encriptar;
btnDec.onclick = desencriptar;
btnCopy.onclick = copiar;
