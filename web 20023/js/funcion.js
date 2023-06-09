// document.getElementById('boton').onclick = function(){
//   console.log("Capturamos el evento click");
//   document.getElementById('demo').innerHTML = "Estamos probando evento js"
// }
//
// document.addEventListener('click', function(){
//   console.log("Hola mundo desde addEventListener");
//   document.getElementById('demo').innerHTML ="Estamos probando el Listener";
// });


document.getElementById('boton').addEventListener('click', function(){
  console.log("Hola mundo desde getElement addEventListener");
  document.getElementById('demo').innerHTML ="Estamos probando el getElement Listener";
});
