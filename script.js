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

    mostrartext.srcdoc = vartexthtml + '<style>'+vartextcss+'</style>' + '<script>'+vartextjs+'</script>';

    vartexthtml = document.getElementById("text-var-html");
    vartextcss = document.getElementById("text-var-css");
    vartextjs = document.getElementById("text-var-js");
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