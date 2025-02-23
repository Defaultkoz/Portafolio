

const cargando=document.getElementById("cargando");

const main=document.getElementById("main");

setTimeout(()=>{
  cargando.style.display="none";
  main.style.display="flex";main.style.flexDirection="column"
},3000)


function descargar(url,nombre){
  var link=document.createElement("a");
  link.href=url
  link.download=nombre
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

document.getElementById("bt-curriculum").addEventListener("click",()=>descargar('../src/img/Adrian Mendez Curriculum.pdf','Adrian Mendez Curriculum.pdf'))