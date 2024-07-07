function encriptartexto(){
    let encriptar = document.getElementById("texto").value;
    encriptar=encriptar;
    //encriptar = prompt("Ingresa encriptar");
    let resultado = "";
for(let i=0;i<encriptar.length;i++){
    if(encriptar[i]=="a"){
        resultado += "ai";
    } else if(encriptar[i]=="e"){    
        resultado += "enter";
        
    } else if(encriptar[i]=="i"){
        resultado += "imes";
        
    } else if(encriptar[i]=="o"){
        resultado += "ober";
        
    } else if(encriptar[i]=="u"){
        resultado += "ufat";
        
    } else{
        resultado+=encriptar[i];
    }
} 
    document.getElementById("texto_encriptado").innerText = ""+resultado;
}


function desencriptartexto(){
    let desencriptar = document.getElementById("texto").value;
    desencriptar=desencriptar;
    //desencriptar = prompt("Ingresa encriptar");
    desencriptar=desencriptar.replace(/ai/g, "a").replace(/enter/g, "e").replace(/imes/g, "i").replace(/ober/g, "o").replace(/ufat/g, "u");
    document.getElementById("texto_encriptado").innerText = ""+desencriptar;
    
}
//https://lenguajejs.com/javascript/string/buscar-y-reemplazar/  Información de el uso de replace

function limpiar(){
    document.querySelector("#texto").value="";
    document.getElementById("texto_encriptado").innerText="";
}

let copia;

function copiar(){
    copia = document.getElementById("texto_encriptado").value;
    copia = copia;
}

function pegar(){
    console.log(copia);
    document.querySelector("#texto").value=""+copia;
}

const canvas = document.getElementById('matrix');
const context = canvas.getContext('2d');

let width, height, columns, drops;
const fontSize = 16;

const resizeCanvas = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    width = canvas.width;
    height = canvas.height;

    columns = width / fontSize;
    drops = Array(Math.floor(columns)).fill(1);
};

const matrixEffect = () => {
    context.fillStyle = 'rgba(0, 0, 0, 0.05)';
    context.fillRect(0, 0, width, height);

    context.fillStyle = '#0F0';
    context.font = `${fontSize}px monospace`;

    drops.forEach((y, x) => {
        const text = String.fromCharCode(Math.random() * 128);
        context.fillText(text, x * fontSize, y * fontSize);

        if (y * fontSize > height && Math.random() > 0.975) {
            drops[x] = 0;
        }
        drops[x]++;
    });
};

const initMatrix = () => {
    resizeCanvas();
    setInterval(matrixEffect, 50);
};

window.addEventListener('resize', resizeCanvas);
document.addEventListener('DOMContentLoaded', initMatrix);

encriptartexto();
desencriptartexto();
limpiar();
copiar();
pegar();
