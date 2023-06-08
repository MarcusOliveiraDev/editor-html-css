ace.require("ace/ext/language_tools");
const editorhtml = ace.edit("text-var-html");
editorhtml.setTheme("ace/theme/textmate");
editorhtml.session.setMode("ace/mode/html");

const editorcss = ace.edit("text-var-css");
editorcss.setTheme("ace/theme/textmate");
editorcss.session.setMode("ace/mode/css");

const editorjs = ace.edit("text-var-js");
editorjs.setTheme("ace/theme/textmate");
editorjs.session.setMode("ace/mode/javascript");

// enable autocompletion and snippets
editorhtml.setOptions({
    enableBasicAutocompletion: true,
    enableSnippets: true,
    enableLiveAutocompletion: true,
    wrap: true
});
editorcss.setOptions({
    enableBasicAutocompletion: true,
    enableSnippets: true,
    enableLiveAutocompletion: true,
    wrap: true
});
editorjs.setOptions({
    enableBasicAutocompletion: true,
    enableSnippets: true,
    enableLiveAutocompletion: true,
    wrap: true
});

//variaveis que captura o que foi escrito
let vartexthtml = editorhtml.getValue();
let vartextcss = editorcss.getValue();
let vartextjs = editorjs.getValue();
//variaveis para mostrar o código
let mostrartext = document.getElementById("text-preview");

//função rodar o código
function rodar(){
    vartexthtml = editorhtml.getValue();
    vartextcss = editorcss.getValue();
    vartextjs = editorjs.getValue();

    mostrartext.srcdoc = vartexthtml + '<style>'+vartextcss+'</style>' + '<script>'+vartextjs+'<\/script>';

}

//função baixar o código
function baixar(){

    vartexthtml = editorhtml.getValue();
    vartextcss = editorcss.getValue();
    vartextjs = editorjs.getValue();

    mostrartext = '<style>'+vartextcss.toString() +'</style>' + vartexthtml.toString() + '<script>'+vartextjs.toString()+'<\/script>';
    
    let htmlblob= new Blob([mostrartext], {type : 'text/html'});
    const link= window.document.createElement('a');
    link.href = window.URL.createObjectURL(htmlblob);
    link.download = 'index.html';
    link.click();
    window.URL.revokeObjectURL(link.href);
}

//copiar codigo

function fcopiar(){
    const elementoClicado = event.target;

    if(elementoClicado.id == "copy-text-var-html"){
        if(editorhtml.getSelectedText() == ""){
            navigator.clipboard.writeText(editorhtml.getValue());
        }else{
            navigator.clipboard.writeText(editorhtml.getSelectedText());
        }
    }

    if(elementoClicado.id == "copy-text-var-css"){
        if(editorcss.getSelectedText() == ""){
            navigator.clipboard.writeText(editorcss.getValue());
        }else{
            navigator.clipboard.writeText(editorcss.getSelectedText());
        }
    }

    if(elementoClicado.id == "copy-text-var-js"){
        if(editorjs.getSelectedText() == ""){
            navigator.clipboard.writeText(editorjs.getValue());
        }else{
            navigator.clipboard.writeText(editorjs.getSelectedText());
        }
    }

    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.innerText = 'código copiado';
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
        setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
        }, 2000);
    }, 100);
    
}

//minimizar tela de edicao
let telahtml = document.getElementById("text-var-html");
let telacss = document.getElementById("text-var-css");
let telajs = document.getElementById("text-var-js");

function ftela(){
    const elementoClicado = event.target;

    if (elementoClicado.id == "telahtml"){
        if (telahtml.style.display != "none"){
            telahtml.style.display = "none";
            elementoClicado.textContent = 'add';
        }else{
            telahtml.style.display = "block";
            elementoClicado.textContent = 'remove';
        }
    }

    if (elementoClicado.id == "telacss"){
        if (telacss.style.display != "none"){
            telacss.style.display = "none";
            elementoClicado.textContent = 'add';
        }else{
            telacss.style.display = "block";
            elementoClicado.textContent = 'remove';
        }
    }

    if (elementoClicado.id == "telajs"){
        if (telajs.style.display != "none"){
            telajs.style.display = "none";
            elementoClicado.textContent = 'add';
        }else{
            telajs.style.display = "block";
            elementoClicado.textContent = 'remove';
        }
    }
  
};

//aumentar iframe

//variaveis para aumentar/diminuir tela
let aumentartelapreview = document.getElementById("aumentartelapreview");

function previewtelainteira (){

    if( mostrartext.style.position == "fixed" ){
        mostrartext.style.position = "";
        mostrartext.style.width = "";
        mostrartext.style.height = "";
        aumentartelapreview.style.position = "";
    }else{
        mostrartext.style.position = "fixed";
        mostrartext.style.width = "calc(100vw - 2px)";
        mostrartext.style.height = "calc(100vh - 2px)";
        mostrartext.style.left = "0px";
        mostrartext.style.top = "0px";
        mostrartext.style.zIndex = "5";
        aumentartelapreview.style.position = "fixed";
        aumentartelapreview.style.right = "0px";
        aumentartelapreview.style.top = "0px";
    }
    
};