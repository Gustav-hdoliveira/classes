class Professor{
    nome: string
    nascimento: number
    ano_prof: number

    constructor(nome:string, nascimento:number , ano_prof:number){
        this.nome = nome
        this.nascimento = nascimento
        this.ano_prof = ano_prof
    }
}

class Escola{
    nome: string
    abertura: number
    num_alunos: number

    constructor(nome: string, abertura: number, num_alunos: number){
        this.nome = nome
        this.abertura = abertura
        this.num_alunos = num_alunos
    }

    
}