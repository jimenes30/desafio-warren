let n = 10;
var valores = [2, 3, 4];
let menor = Math.min.apply(Math, valores);
let vezes = parseInt(n / menor);
let itens = document.getElementById("itens");
var resultado = [];

function atualizar_entrada() {
    for (let i = 0; i < 3; i++){
        valores[i] = parseInt(document.getElementById(`vetor${i}`).value);
    }
    remover_duplicados_array();    
    n = parseInt(document.getElementById("input-N").value);
    menor = Math.min.apply(Math, valores);
    vezes = parseInt(n / menor);
}

function remover_duplicados_array(){
    var uniqueArr = [...new Set(valores)];
    valores = uniqueArr;
}

function soma_elementos_array(array) {
    const sum = array.reduce((partialSum, a) => partialSum + a, 0);
    return sum;
}

function combinacao_com_repeticao(arr, l) {
    if(l === void 0) l = arr.length; // Tamanho das combinações
    var data = Array(l),             // Usado para armazenar o estado
        results = [];                // Array de resultados
    (function f(pos, start) {        // Função recursiva
      if(pos === l) {                // Fim alcançado
        results.push(data.slice());  // Add cópia dos dados aos resultados
        return;
      }
      for(var i=start; i<arr.length; ++i) {
        data[pos] = arr[i];          // Atualizar dados
        f(pos+1, i);                 // Chame f recursivamente
      }
    })(0, 0);                        // Comece no índice 0
    return results;
}

function combinacoes_possiveis(){
    while (vezes > 0) {
        comb = combinacao_com_repeticao(valores, vezes);
        comb.forEach(element => {
        if (soma_elementos_array(element) == n) {
            resultado.push(element);
            }
        });
        vezes -= 1;
    }
    return resultado;
}

function menor_array(resultado){
    const tamanhos = [];
    resultado.forEach(element => {
        tamanhos.push(element.length);
    });
    menorTamanho = Math.min.apply(Math, tamanhos);
}

function mostrar_resultado() {
    atualizar_entrada();
    menor_array(combinacoes_possiveis());
    itens.innerHTML = "";
    itens.style.opacity = "1";
    itens.innerHTML += n + "<br>";
    resultado.forEach(element => {
        if (element.length == menorTamanho) {
            itens.innerHTML += `[${element}] <br>`;}
    });
    resultado = [];
}

function limpar_resultado() {
    atualizar_entrada();
    itens.style.opacity = "0";
    itens.innerHTML = "";
    console.clear();
}





