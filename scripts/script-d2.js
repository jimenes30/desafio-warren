let limite_alunos_presentes = 3
let resultado = document.getElementById("resultado")
let alunos_presentes = 0
let alunos_ausentes = 0
const tempoChegada = [-2, -1, 0, 1, 2]

function alterar_entrada() {
    for (let i = 0; i < 5; i++){
        tempoChegada[i] = parseInt(document.getElementById(`aluno${i+1}`).value)
    }
    limite_alunos_presentes = parseInt(document.getElementById("limite_alunos_presentes").value)
}

function horario_alunos(){
    for (let i = 0; i < tempoChegada.length; i++){
        if (tempoChegada[i] <= 0){
            alunos_presentes += 1
        }
        else{
            alunos_ausentes += 1
        }
    
    }
    console.log(`Alunos que chegaram no horário: ${alunos_presentes}`)
    console.log(`Alunos que chegaram atrasados: ${alunos_ausentes}`)
    return alunos_presentes, alunos_ausentes
}

function aula_hoje() {
    horario_alunos()
    console.log(`Mínimo de alunos presentes: ${limite_alunos_presentes}`)
    if (alunos_presentes >= limite_alunos_presentes){
        console.log("Aula Normal")
        return "Aula Normal"
    }
    else{
        console.log("Aula Cancelada")
        return "Aula Cancelada"
    }
}

function mostrar_resultado(){
    resultado.innerHTML = aula_hoje()
    alunos_presentes = 0
    alunos_ausentes = 0
}

function limpar_resultado(){
    resultado.innerHTML = ""
    document.getElementsByClassName("input-alunos").value = ""
    document.getElementsByClassName("input-x").value = ""
    console.clear()
}
