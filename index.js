let horaEntrada= new Date(" 2021-11-11 19:00")
let horaSalida=new Date("2021-11-11 19:50");

let tarifaMoto=50.00
let tarifaCarro=70.00
let typo =""


function CalcularV (horaSalida,horaEntrada,tarifaCarro,tarifaMoto,typo){ 
  
  if(typo ==="carro"){
  return((horaSalida.getTime()-horaEntrada.getTime())/60000)*tarifaCarro
}else{
return((horaSalida.getTime()-horaEntrada.getTime())/60000)*tarifaMoto
}

}
let calacularpago= CalcularV(horaSalida,horaEntrada,tarifaCarro,tarifaMoto,typo)

console.log(calacularpago)