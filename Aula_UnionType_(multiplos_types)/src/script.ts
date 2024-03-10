let idade: number | string | boolean = 90;

idade = "25";

idade = true;

function mostrarIdade(idade2: string | number){
    if(typeof(idade2) === "string"){
        console.log(idade2.toUpperCase());
    }else{
        console.log(idade2);
    }
}

mostrarIdade(90);
mostrarIdade("25");