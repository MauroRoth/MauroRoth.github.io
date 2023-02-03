
function convertidorMdHtml(fileRuta){
    var converter = new showdown.Converter();
    var archivoMD = new XMLHttpRequest();    
    archivoMD.open('GET',fileRuta,false);
    archivoMD.send(null);
    var texto = archivoMD.responseText;
    var html = converter.makeHtml(texto);
    return html;    
}
document.getElementById('contenido')
   .innerHTML = convertidorMdHtml('resume-dev.md');

document.getElementById('desarrollo').addEventListener('click', function(){
   document.getElementById('contenido')
   .innerHTML = convertidorMdHtml('resume-dev.md');
})
document.getElementById('docencia').addEventListener('click', function(){
    document.getElementById('contenido')
    .innerHTML = convertidorMdHtml('resume-doc.md');
 })

