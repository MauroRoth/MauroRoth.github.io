
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
   .innerHTML = convertidorMdHtml('resume-doc.md');

document.getElementById('desarrollo').addEventListener('click', function(){
   document.getElementById('contenido')
         .innerHTML = convertidorMdHtml('resume-dev.md');
   document.getElementById('body').style.background = "black";
   document.getElementById('body').style.color = "#fdfd96";
})
document.getElementById('docencia').addEventListener('click', function(){
   document.getElementById('contenido')
         .innerHTML = convertidorMdHtml('resume-doc.md');
   document.getElementById('body').style.backgroundColor = "white";
   document.getElementById('body').style.color = "black";
 })

