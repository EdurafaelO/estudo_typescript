function resumo(usuario: {name: string, idade: number}){
    return `Olá ${usuario.name}, tudo bem? Você tem ${usuario.idade} anos.`;
}

let u = {name: "eduardo", idade: 22};

console.log(resumo(u));

//PROPRIEDADES OPCIONAIS
//Deixando idade como opcional é só usar o ? antes dos :
function resumo2(usuario: {name: string, idade?: number}){
    if(usuario.idade !== undefined){
        return `Olá ${usuario.name}, tudo bem? Você tem ${usuario.idade} anos.`;
    }else{
        return `Olá ${usuario.name}, tudo bem?`;
    }
    
}

let u2 = {name: "eduardo"};

console.log(resumo2(u2));