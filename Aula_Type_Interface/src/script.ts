type NomeCompleto = string;  //Usar apenas para simplificar e organizar melhor o codigo

let nome: NomeCompleto = "eduardo";

// Exemplo com objeto


//forma normal com type (nao pode ser modificado dps)
type User2 = {
    name: string,
    idade: number
}

function resumo(usuario: User2){
    return `Olá, ${usuario.name}, tudo bem? Você tem ${usuario.idade} anos.`
}

resumo({name: "eduardo", idade: 22});

// forma com interface (pode ser modificada depois)

interface User {
    name: string;
    idade: number;
}

//adicionando uma nova propriedade de objeto
interface User {
    lastName?: string;
}

function resumo2(usuario: User){
    return `Olá, ${usuario.name}, tudo bem? Você tem ${usuario.idade} anos.`
}

resumo2({name: "eduardo", idade: 22});
