//Criar variáveis

//let nome = "Gustavo Campos"
let idade = 16
let idadeEsposa = "16"
const anoNascimento = 2006

//decisão 

if (idade === idadeEsposa) {
    alert("Igual...")
}else {
    alert("Cada um no seu quadrado")
}

// Lendo informações do Html

const titulo = document.getElementById("titulo")
const resultado = document.getElementById("resultado")
const nome = document.getElementById("nome")
const email = document.getElementById("email")

console.log(titulo)

titulo.textContent = "Mudei o titulo"



function mostrarResultado() {
    titulo.style.color = "blue"

    resultado.textContent = nome.value + " " + email.value
}