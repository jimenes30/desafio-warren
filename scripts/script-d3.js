function sum_array_elements(array) {
    const sum = array.reduce((partialSum, a) => partialSum + a, 0);
    return sum
}

function combinations_with_replacement(arr, l) {
    if(l === void 0) l = arr.length; // Length of the combinations
    var data = Array(l),             // Used to store state
        results = [];                // Array of results
    (function f(pos, start) {        // Recursive function
      if(pos === l) {                // End reached
        results.push(data.slice());  // Add a copy of data to results
        return;
      }
      for(var i=start; i<arr.length; ++i) {
        data[pos] = arr[i];          // Update data
        f(pos+1, i);                 // Call f recursively
      }
    })(0, 0);                        // Start at index 0
    return results;                  // Return results
} 

let n = 10;
let valores = [2, 3, 4];
// menor = Math.min.apply(null, valores)
let menor = Math.min.apply(Math, valores);
let vezes = parseInt(n / menor);
let total = parseInt(valores.length);
var resultado = [];

while (vezes > 0) {
    comb = combinations_with_replacement(valores, vezes)
    comb.forEach(element => {
    if (sum_array_elements(element) == 10) {
        resultado.push(element)
        }
    });
    vezes -= 1
}

const tamanhos = []

resultado.forEach(element => {
    tamanhos.push(element.length)
});

menorTamanho = Math.min.apply(Math, tamanhos)


function mostrar_resultado() {
    document.getElementById("itens").innerHTML = ""
    document.getElementById("itens").style.opacity = "1"
    document.getElementById("itens").innerHTML += n + "<br>"
    resultado.forEach(element => {
        if (element.length == menorTamanho) {
            document.getElementById("itens").innerHTML += `[${element}] <br>`
        }    
    });
}

function limpar_resultado() {
    document.getElementById("itens").style.opacity = "0"
    document.getElementById("itens").innerHTML = ""
}

// function adcElemento (tag, conteudo, position="beforeend", tagAtual="itens") {
//     // cria um novo elemento div
//     // e dá à ele conteúdo
//     var tagNova = document.createElement(tag);
//     var conteudoNovo = document.createTextNode(conteudo);
//     tagNova.appendChild(conteudoNovo); //adiciona o nó de texto à nova div criada
  
//     // adiciona o novo elemento criado e seu conteúdo ao DOM
//     var tagAtual = document.getElementById(tagAtual);
//     tagAtual.insertAdjacentElement(position, tagNova)
//   } 