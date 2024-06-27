class Professor{
    nome: string
    nascimento: number
    ano_prof: number

    constructor(nome:string, nascimento:number , ano_prof:number){
        this.nome = nome
        this.nascimento = nascimento
        this.ano_prof = ano_prof
    }

    getProfessor(): void{
        console.log(`Nome: ${this.nome},Nascimento: ${this.nascimento} e Tempo de Exp.: ${this.ano_prof}`)
    }
    setProfessor():void{
        let nomeUpdate = leitor.question("Qual o nome do professor? ")
        let nascimentoUpdate = leitor.questionINT("Quando o professor nasceu? ")
        let ano_profUpdate = leitor.questionINT('A quantos anos ele é professor? ')
        this.nome = nomeUpdate
        this.nascimento = nascimentoUpdate
        this.ano_prof = ano_profUpdate
    }
}

class Escola{
    prof: string
    nome_escola: string
    endereço: string
    num_alunos: number

    constructor(nome_escola: string, endereço: string, num_alunos: number){
        this.prof =
        this.nome_escola = nome_escola
        this.endereço = endereço
        this.num_alunos = num_alunos
    }

    getEscola(): void{
        console.log(`Nome da Escola: ${this.nome_escola}, End. Escola: ${this.endereço} num alunos ${this.num_alunos}`)
    }
    setEscola(): void{
        let atualizarProf = leitor.question("Você gostaria de atualizar as infos do professor? S p/ Sim e N p/ Não").toLowerCase()
        if(atualizarProf == "s"){
            this.prof.setProfessor()
            let arrayEscola = atualizarEscola()
            this.nome_escola = arrayEscola[0]
            this.endereço = arrayEscola[1]
            this.num_alunos = arrayEscola[2]
        } else {
            let arrayEscola = atualizarEscola()
            this.nome_escola = arrayEscola[0]
            this.endereço = arrayEscola[1]
            this.num_alunos = arrayEscola[2]
        }

        function atualizarEscola(): Array<any> {
            let nome_escolaUpdate = leitor.question("Qual o nome da escola? ")
            let endereçoUpdate = leitor.question('Qual o endereço da escola? ')
            let num_alunosUpdate = leitor.questionInt("Qual o numero de alunos? ")
            let atualizacaoEscola = [nome_escolaUpdate, endereçoUpdate, num_alunosUpdate]
            return atualizacaoEscola
        }
        
    }
}
let menu: Boolean = true

let prof = new Professor("", 0, 0)
let escola = new Escola(prof, "", "", 0)
