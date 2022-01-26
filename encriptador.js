const textAreaValue = document.getElementById("textoNuevo");
const resultado = document.getElementById("resultadoF");

const copia = document.getElementById("copiar");
copia.addEventListener("click",()=>{
    copiar();
    resultado.value = "";
});

const textArea1 = document.getElementById("textoNuevo");
textArea1.addEventListener("click",()=>{
    textArea1.value = "";
});

function encriptar() {
    const mensaje = textAreaValue.value;
    const respuesta1 = mensaje.replaceAll("e","enter");
    const respuesta2 = respuesta1.replaceAll("i","imes");
    const respuesta3 = respuesta2.replaceAll("a","ai");
    const respuesta4 = respuesta3.replaceAll("o","ober");
    const respuesta5 = respuesta4.replaceAll("u","ufat");
    
    resultado.value= respuesta5;
    
    console.log(respuesta5);
}

function desencriptar() {
    
    const mensaje = textAreaValue.value;
    const respuesta1 = mensaje.replaceAll("enter","e");
    const respuesta2 = respuesta1.replaceAll("imes","i");
    const respuesta3 = respuesta2.replaceAll("ai","a");
    const respuesta4 = respuesta3.replaceAll("ober","o");
    const respuesta5 = respuesta4.replaceAll("ufat","u");
    
    resultado.value= respuesta5;
    
    console.log(respuesta5);
    
}

function copiar() {
    navigator.clipboard.writeText(resultado.value).then(()=>{
        console.log("copiado");
    },()=>{
        console.log("no funciono");
    });
}

function limpiarArea2() {
    resultado.value = "";
    let textArea1 = document.getElementById("textoNuevo");
    
}
