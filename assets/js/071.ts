function saludar( nombre:string ){
  console.log('Hola '+ nombre);
}

var persona = {
  nombre:'Salvador',
  edad:20,
  sexo:'M'
}
//var persona = "Salvador";

saludar(persona.nombre);
