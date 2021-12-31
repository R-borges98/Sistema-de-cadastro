var data = new Date();
var datadoevento = 31/12/2021
if (datadoevento => new Date){
    console.log("Cadastro permitido")
}else{
    console.log("Cadastro não permitido,escolha outra data")
}

let idadedoparticipante = 23 

if (idadedoparticipante >= 18){
    console.log("Cadastro permitido.")
}else{
    console.log("Cadastro permitido")
}

let listadeparticipantes = ["pessoa1","pessoa2","pessoa3","pessoa4"];
let quantidadedeparticipantes = listadeparticipantes.length;
    console.log(quantidadedeparticipantes);

    if(listadeparticipantes.length < 100){
        console.log("Cadastro permitido")
    }else{
        console.log("Cadastro não permitido,não há mais vagas") 
    }