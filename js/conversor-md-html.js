
var converter = new showdown.Converter();
var archivoMD = new XMLHttpRequest();
var fileRuta = '../resume/resume.md';
archivoMD.open('GET',fileRuta,false);
archivoMD.send(null);
var texto = archivoMD.responseText;
var html = converter.makeHtml(texto);

document.querySelector('div').innerHTML=html;
console.log(html);