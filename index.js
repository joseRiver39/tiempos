let horaEntrada= new Date("2021/11/11 18:00")
let horaSalida=new Date(" ");
let calacularTiempo=(horaSalida.getTime()-horaEntrada.getTime())/60000
let tarifaMoto=50
let tarifaCarro=70
let valorpagar=calacularTiempo*tarifaMoto
let valorpagar2=calacularTiempo*tarifaCarro
console.log(horaEntrada)
console.log(calacularTiempo)
console.log(valorpagar)
console.log(valorpagar2)

