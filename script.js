//variaveis que captura o que foi escrito
let vartexthtml = editorhtml.getValue();
let vartextcss = editorcss.getValue();
//variaveis para mostrar o código
let mostrartext = document.getElementById("text-preview");

//função rodar o código
function rodar(){
    vartexthtml = editorhtml.getValue();
    vartextcss = editorcss.getValue();

    mostrartext.srcdoc = vartexthtml + '<style>'+vartextcss+'<style>';

    vartexthtml = document.getElementById("text-var-html");
    vartextcss = document.getElementById("text-var-css");
}

//função baixar o código
function baixar(){

    mostrartext = document.getElementById("text-preview").contentWindow.document.documentElement.outerHTML;
    
    let htmlblob= new Blob([mostrartext], {type : 'text/html'});
    const link= window.document.createElement('a');
    link.href = window.URL.createObjectURL(htmlblob);
    link.download = 'index.html';
    link.click();
    window.URL.revokeObjectURL(link.href);
}