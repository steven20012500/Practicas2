var existencias;
var enviado;
existencias=true;
enviado=false;
function mostarStock(){
    var elStock=document.getElementById('stock');
    elStock.className=existencias; 
}
function mostrarEnviado(){
    var elEnvio=document.getElementById('envio');
    elEnvio.className=enviado;
}
document.addEventListener('DOMContentLoaded', (event) => {
    mostarStock()
});
document.addEventListener('DOMContentLoaded', (event) => {
    mostrarEnviado();
});
