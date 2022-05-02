const nList = []

/**
 * Esta é uma função que recebe uma string qualquer e retorna ela mesma de forma reversa, ou seja, de trás para frente.
 * @example 
 *   reverseString("36"); // "63"
 * @param   {string} obrigatorio   Parametro obrigatório
 * @returns {string}
 */

function reverseString(str) {
    return str.split("").reverse().join("")
}

/**
 * Esta função verifica se a soma de "n" com seu reverso é impar, se for verdadeiro, adiciona "n" a lista "nList".
 * @param   {Number} obrigatorio   Parametro obrigatório
 */

function oddReverseToList(n) {
    n = String(n)
    let n_reverse = reverseString(n)
    let sum = parseInt(n) + parseInt(n_reverse)
    if(sum % 2 != 0){
        nList.push(n)
        }
}

/**
 * Esta é a função que faz o resultado ser inserido na tag "resultado" da página html
 */
function showResult() {
    for (let i = 0; i < 1000000; i++) {
        oddReverseToList(i)
    }
    document.getElementById("resultado").innerHTML = nList.join("<br>")
}

/**
 * Esta é a que função limpa o resultado inserido na tag "resultado" da página html
 */
function clearResult() {
    document.getElementById("resultado").innerHTML = ""
}
