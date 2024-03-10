function firstLetterUppercase(name: string, lastName: string, year: number){
    let firstLetter = name.charAt(0).toUpperCase();
    return firstLetter+name.substring(1);
}

firstLetterUppercase("eduardo", "oliveira", 22);

// em return

function firstLetterUppercase2(name: string): string{
    let firstLetter = name.charAt(0).toUpperCase();
    return firstLetter+name.substring(1);
}

let nome = firstLetterUppercase2("eduardo");

function somar(n1: number, n2: number): number{
    return n1 + n2;
}

let soma = somar(24, 80);