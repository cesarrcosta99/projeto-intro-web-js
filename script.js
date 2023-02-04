const cursos = [
    {
        curso: "HTML e CSS",
        descricao: "Veja HTML E CSS do basico ao avançado",
        duracao: "1 mês",
        valor: 500
    },
    {
        curso: "JavaScript",
        descricao: "Veja JavaScript do basico ao avançado",
        duracao: "2 meses",
        valor: 900
    },
    {
        curso: "APIsRest",
        descricao: "Veja APIsRest do basico ao avançado",
        duracao: "6 meses",
        valor: 2000
    }
]

const turmas = [
    {
        turma: "Hipátia",
        curso: "JavaScript",
        inicio: "30/11/2022",
        termino: "30/01/2023",
        numeroDeAlunos: 150,
        periodo: "noturno",
        concluida: false
    },
    {
        turma: "Sibyla",
        curso: "JavaScript",
        inicio: "30/10/2022",
        termino: "30/12/2022",
        numeroDelunos: 200,
        periodo: "integral",
        concluida: false
    },
    {
        turma: "Curie",
        curso: "HTML e CSS",
        inicio: "15/09/2022",
        termino: "15/10/2022",
        numeroDeAlunos: 180,
        periodo: "noturno",
        concluida: true
    },
    {
        turma: "Zhenyi",
        curso: "HTML e CSS",
        inicio: "01/11/2022",
        termino: "01/11/2023",
        numeroDeAlunos: 80,
        periodo: "integral",
        concluida: false
    },
    {
        turma: "Clarke",
        curso: "HTML e CSS",
        inicio: "04/07/2022",
        termino: "04/09/2022",
        numeroDeAlunos: 200,
        periodo: "noturno",
        concluida: true
    },
    {
        turma: "Blackwell",
        curso: "APIsRest",
        inicio: "20/03/2022",
        termino: "20/06/2022",
        numeroDeAlunos: 100,
        periodo: "integral",
        concluida: true
    },
    {
        turma: "Elion",
        curso: "APIsRest",
        inicio: "12/01/2022",
        termino: "12/06/2022",
        numeroDeAlunos: 200,
        periodo: "noturno",
        concluida: true
    },
    {
        turma: "Burnell",
        curso: "APIsRest",
        inicio: "18/10/2022",
        termino: "18/04/2023",
        numeroDeAlunos: 90,
        periodo: "integral",
        concluida: false
    }
]
const estudantes = [
    {
        estudante: "Chris Evans",
        turma: "Hipátia",
        curso: "JavaScript",
        valor: 900,
        nParcelas: 9,
        desconto: false,
        parcelas: 100
    },
    {
        estudante: "Halle Berry",
        turma: "Burnell",
        curso: "APIsRest",
        valor: 2000,
        nParcelas: 4,
        desconto: false,
        parcelas: 500
    },
    {
        estudante: "Lashana Lynch",
        turma: "Zhenyi",
        curso: "HTML e CSS",
        valor: 500,
        nParcelas: 1,
        desconto: true,
        parcelas: 500
    }
]
/* const carrinhoCursos = [] */

 /* const parcelarCurso = (carrinhoCursos, numeroDeParcelas) => {
    let valorTotal = 0
    let valorParcela = 0
    let desconto = 0

    switch (carrinhoCursos.length) {
        case 3:
            desconto = 0.15
            break
        case 2:
            desconto = 0.10
            break
        default:
            desconto = 0
            break
    }

    for (let i = 0; i < carrinhoCursos.length; i++) {
        valorTotal = valorTotal + carrinhoCursos[i]
    }
    valorTotal = valorTotal - (valorTotal * desconto)

    if (numeroDeParcelas === 1 || numeroDeParcelas === 2) {
        valorTotal = valorTotal - (valorTotal * 0.20)
        valorParcela = valorTotal / numeroDeParcelas
        return `O valor do pagamento é de R$ ${valorTotal} com 20% de desconto,parcelado em ${numeroDeParcelas}x de R$ ${valorParcela.toFixed(2)}`
    } else {
        valorParcela = valorTotal / numeroDeParcelas
        return `O valor do pagamento é de R$ ${valorTotal},parcelado em ${numeroDeParcelas}x de R$ ${valorParcela.toFixed(2)}`
    }
}
console.log(parcelarCurso(carrinhoCursos, 2)) */


/* const buscarCursos = (nomeCurso) => {
    for (let valor of cursos) {
        if (nomeCurso.toUpperCase() === valor.curso.toUpperCase()) {
            return valor
        }
    }
}
console.log(buscarCursos("jAVaScript")) */

/* const buscarCursos = (nomeCurso) =>{
    const curso=cursos.find((cadaCurso)=>{
        if(cadaCurso.curso.toLowerCase().includes(nomeCurso.toLowerCase())){
            return cadaCurso
        }
    })
         return curso 
}
   
     console.log(buscarCursos("jav"))

const incrementarCarrinhos = (nomeCurso) => {
    let procurarCurso = buscarCursos(nomeCurso)
    carrinhoCursos.push(procurarCurso.valor)
    return carrinhoCursos
}
console.log(incrementarCarrinhos("JavaScript")) */


/* const buscarTurma = (nomeTurma) => {
    for (let indice in turmas) {
        if (nomeTurma.toUpperCase() === turmas[indice].turma.toUpperCase()) {
            return turmas[indice]
        }
    }
} */
/* console.log(buscarTurma("Hipátia")) */

/* const buscarTurma = (nomeTurma) => {
    const encontrarTurma = turmas.filter((objeto) => { return objeto.turma.toLowerCase() === nomeTurma.toLowerCase() })
    return encontrarTurma.length > 0 ? encontrarTurma : "Turma não encontrada"

}
console.log(buscarTurma("Curie")) */

/* const buscarEstudante = (nomeEstudante) => {
    for (let valor of estudantes) {
        if (nomeEstudante.toUpperCase() === valor.estudante.toUpperCase()) {
            return valor
        }
    }
}
console.log(buscarEstudante("Lashana Lynch")) */

/* const buscarEstudante = (nomeEstudante) => {
    for (element in estudantes) {
        if (estudantes[element].estudante.toLowerCase().includes(nomeEstudante.toLowerCase())) {
            return estudantes[element]
        }
    }
         return "Aluno não encontrado"
}
console.log(buscarEstudante("z")) */
 
/* const buscarCursos = (nomeCurso) => {
for (i = 0; i < cursos.length; i++) {
    if (nomeCurso.toUpperCase() === cursos[i].curso.toUpperCase()) {
        console.log(cursos[i])
    }
}
}
buscarCursos("APiSRest")
 
const buscarTurma = (nomeTurma) => {
for (i = 0; i < turmas.length; i++) {
    if (nomeTurma.toUpperCase() === turmas[i].turma.toUpperCase()) {
        console.log(turmas[i])
    }
}
}
buscarTurma("elion")
 
const buscarEstudante=(nomeEstudante)=>{
for(i=0; i < estudantes.length;i++) {
    if(nomeEstudante.toUpperCase() === estudantes[i].estudante.toUpperCase()){
        console.log(estudantes[i])
    }
}
}
buscarEstudante("Lashana Lynch")
*/

/* const matricular = (nomeAluno, nomeCurso, nomeTurma, numeroParcelas) => {
    let resultadoCurso = buscarCursos(nomeCurso)
    let valorTotal = 0
    let valorParcela = 0
    let temDesconto = false
    if (numeroParcelas > 0 && numeroParcelas <= 2) {
        temDesconto = true
        valorTotal = resultadoCurso.valor * 0.8
        valorParcela = valorTotal / numeroParcelas
    } else {
        valorTotal = resultadoCurso.valor
        valorParcela = valorTotal / numeroParcelas
    }
 */
    /* const novoAluno = {
        estudante: nomeAluno,
        turma: nomeTurma,
        curso: nomeCurso,
        valor: valorTotal,
        nParcelas: numeroParcelas,
        desconto: temDesconto,
        parcelas: valorParcela
    }
    estudantes.push(novoAluno)
    console.log(estudantes)
    console.log(`Aluno Matriculado \n Nome:${nomeAluno} \n Curso:${nomeCurso} \n Turma:${nomeTurma}`)
}

matricular("César", "APIsRest", "Burnell", 2) */

/* const relatorioEstudante = (nomeEstudante) => {
    const estudante = buscarEstudante(nomeEstudante)
    return `Aluno:${estudante.estudante} \n Turma:${estudante.turma} \n Curso:${estudante.curso
        } \n Valor total:R$ ${estudante.valor} \n Valor Parcela:R$ ${estudante.parcelas} \n Nº Parcelas:${estudante.nParcelas}`
}
console.log(relatorioEstudante("Chris Evans")) */

// FUNÇÃO QUE BUSCA O OBJETO CURSO ATRAVÉS DO INPUT "CURSO" DA PÁGINA adm-financeiro.html
function buscaCurso() {
    nomeCurso = document.getElementById("curso-fin").value
    const objCurso = cursos.find(function(objCurso){
         return objCurso.curso === nomeCurso
    }) 
    return objCurso
 }



let carrinhoCursos = []

//FUNÇÃO QUE ADICIONA O VALOR DO CURSO NO ARRAY "carrinhoCursos" UTILIZANDO O RETORNO DA FUNÇÃO "buscaCurso" PARA ACESSAR O VALOR DO CURSO
function adicionarCurso() {
    carrinhoCursos.push(buscaCurso().valor)

}

//FUNÇÃO QUE RETORNA NA PÁGINA adm-financeiro.html O VALOR À SER PAGO PELO ALUNO. É UTILIZADO CARRINHO DE CURSOS E O INPUT DO NÚMERO DE PARCELAS
function parcelarCurso() {
    let resposta = document.getElementById("res")
    resposta.innerHTML =""
    let parcelaFin = document.getElementById("parcelas-fin").value
    let totalCurso = 0

    let somaCursos = carrinhoCursos.reduce(function(total, numero){
        return total + numero
    }, 0)  

    let vParcela = somaCursos/parcelaFin     

    if(parcelaFin > 0 && parcelaFin <=2){
        totalCurso = somaCursos * 0.8
        vParcela = totalCurso/parcelaFin
        switch (carrinhoCursos.length) {
            case 1: 
                html =  `O valor do pagamento é de R$ ${totalCurso}, em ${parcelaFin}x de R$ ${vParcela} com 20% de desconto`
                break;
            case 2:
                html = `O valor do pagamento é de R$ ${totalCurso * 0.9} com 20% + 10% de desconto, parcelado em ${parcelaFin}x de R$ ${vParcela * 0.9}`
                break;
            default:
                html = `O valor do pagamento é de R$ ${totalCurso * 0.85} com 20% + 15% de desconto, parcelado em ${parcelaFin}x de R$ ${vParcela * 0.85}`
                break;
        }
    }else{
        switch (carrinhoCursos.length) {
            case 1: 
                html = `O valor do pagamento é de R$ ${somaCursos}, em ${parcelaFin}x de R$ ${vParcela}`   
                break;
            case 2:
                html = `O valor do pagamento é de R$ ${somaCursos * 0.9} com 10% de desconto, parcelado em ${parcelaFin}x de R$ ${vParcela * 0.9}`
                break;
            default:
                html =  `O valor do pagamento é de R$ ${somaCursos * 0.85} com 15% de desconto, parcelado em ${parcelaFin}x de R$ ${vParcela * 0.85}`
                break;
        }
    }

    if(carrinhoCursos.length == 0){
        alert("Adicione um curso no carrinho para calcular o valor")
    }else{
        resposta.innerHTML += `<h3>Valor</h3>${html}`
    }

}


let contaTurma = 0
inputTurma = document.getElementById("input-turma")
function buscaTurma(event) {
    if(contaTurma >= 8){
        alert("Recarregue a página!")
        cardTurma.innerHTML = "" 
    }
    const cardTurma = document.getElementById("info-turmas")

    nomeTurma = inputTurma.value

    const retorno = turmas.filter((e) => {
        if(e.turma.toLowerCase() === nomeTurma.toLowerCase()){
            return e.turma.toLowerCase() === nomeTurma.toLowerCase()
        }else{
            return false
        }   
    })

    if(retorno == false){
        alert("Turma não encontrada")
    }

    if(retorno[0].concluida == true){
        retorno[0].concluida = "Sim"
    }else{
        retorno[0].concluida ="Não"
    }

    const html = `<div class="card" > 
                <h3>${retorno[0].turma}</h3> 
                <p><b>Curso: </b>${retorno[0].curso}</p>
                <p><b>Início :</b>${retorno[0].inicio}</p>
                <p><b>Término: </b>${retorno[0].termino}</p>
                <p><b>Número de alunos: </b>${retorno[0].numeroDeAlunos}</p>
                <p><b>Período: </b>${retorno[0].periodo}</p>
                <p><b>Concluído: </b>${retorno[0].concluida}</p>
                </div>`

    cardTurma.innerHTML +=  html

    inputTurma.value = ""
    contaTurma ++
    console.log(contaTurma);
}




function buscaEstudantes() {

    let nomeEstudante = document.getElementById("nome-aluno").value

    const relatorioEstudante = document.getElementById("relatorio-estudante")
    relatorioEstudante.innerHTML = ""

    const result = estudantes.filter(element => element.estudante.toLowerCase().includes(nomeEstudante.toLowerCase()))

    const html = `<div class="relatorio">
    <p>Aluno: ${result[0].estudante}</p>
    <p>Turma: ${result[0].turma}</p> 
    <p>Curso: ${result[0].curso}</p> 
    <p>Valor Total: ${result[0].valor}</p>
    <p>Valor Parcela: R$${result[0].parcelas}</p>   
    <p>Nº parcelas:${result[0].nParcelas}</p>   
    <div/>`

    relatorioEstudante.innerHTML += html

    inputAluno.value=""
}


function buscaCursoMatricula(nomeCurso) {
    const objCurso = cursos.find(function(objCurso){
         return objCurso.curso === nomeCurso
    }) 
    return objCurso
 }

let nomeMat = document.getElementById("nome-mat")
let cursoMat = document.getElementById("curso-mat")
let turmaMat = document.getElementById("turma-mat")
let parcelaMat = document.getElementById("parcelas-mat")


function matricular() {
    nomeAluno = nomeMat.value
    cursoAluno = cursoMat.value
    turmaAluno = turmaMat.value
    parcelaAluno = parcelaMat.value

    const retornoTurma = turmas.filter((e) => {
        if(e.turma.toLowerCase() === turmaAluno.toLowerCase()){
            return e.turma.toLowerCase() === turmaAluno.toLowerCase()
        }else{
            return false
        }   
    })

    const retornoCurso = cursos.filter((e) => {
        if(e.curso.toLowerCase() === cursoAluno.toLowerCase()){
            return e.curso.toLowerCase() === cursoAluno.toLowerCase()
        }else{
            return false
        }
    })

    if(retornoTurma == false){
        return alert("Turma não encontrada")
    }

    if(retornoCurso == false){
        return alert("Curso não encontrado")
    }

    if(nomeAluno.length < 8){
        return alert("Informe o nome completo")
    }

    let confirmaMatricula = document.getElementById("div-2")
    let check = document.getElementById("div-3")

    confirmaMatricula.innerHTML = ""
    check.innerHTML= ""
    let valorCurso = buscaCursoMatricula(cursoAluno)
    let valorTotal = 0
    let valorParcela = 0

    if(parcelaAluno > 0 && parcelaAluno <= 2){
        valorTotal = valorCurso.valor - (valorCurso.valor * 0.2)
        valorParcela = valorTotal / parcelaAluno
    }else{
        valorTotal = valorCurso.valor
        valorParcela = valorTotal / parcelaAluno
    }

    const novoAluno = {
        estudante: nomeAluno,
        turma: turmaAluno,
        curso: cursoAluno,
        valor: valorCurso.valor,
        nParcelas: parcelaAluno,
        desconto: false,
        parcelas: valorParcela
    }

    estudantes.push(novoAluno)

    const html = `<h2>Aluno Matriculado </h2>
                
                <p>Aluno Matriculado</p>
                <p>Nome: ${nomeAluno}</p>
                <p>Curso: ${cursoAluno}</p>
                <p>Turma: ${turmaAluno}</p>`

    check.innerHTML = '<img src="./imagens/check.png" alt="" id="check"></img>'
    confirmaMatricula.innerHTML += html
    nomeMat.value =""
    cursoMat.value=""
    turmaMat.value=""
    parcelaMat.value=""
}


// FUNÇÃO DA PÁGINA DE CONTATO QUE CAPTURA OS DADOS DOS INPUTS E EXIBE NO CONSOLE, SIMULANDO O ENVIO DA MENSAGEM PARA O BANCO DE DADOS
function mostrarForm(){
    console.log(document.getElementById("nome-contato").value);
    console.log(document.getElementById("email").value); 
    console.log(document.getElementById("mensagem").value);

    swal({
        title: "Mensagem enviada com sucesso",
        icon: "success"
    })
}



