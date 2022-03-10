function ConverterDolar () {
    const VALOR_DO_DOLAR_NO_MOMENTO = 5.01
    let valor = document.getElementById("valoremDolar")
    let valor1 = valor.value 
    let valor2 = parseFloat(valor1 * VALOR_DO_DOLAR_NO_MOMENTO)
    let valor3 = document.getElementById("valorConvertido1")
    valor3.innerHTML = "O resultado da conversão de dólar para reais é " + valor2
}

function ConverterEuro () {
    const VALOR_DO_EURO_NO_MOMENTO = 5.51 
    let valor = document.getElementById("valoremEur")
    let valor1 = valor.value
    let valor2 = parseFloat(valor1 * VALOR_DO_EURO_NO_MOMENTO)
    let valor3 = document.getElementById("valorConvertido2")
    valor3.innerHTML = "O resultado da conversão de euro para reais é " + valor2
}

function ConverterBTC () {
    const VALOR_DO_BTC_NO_MOMENTO = 197
    let valor = document.getElementById("valoremBtc")
    let valor1 = valor.value
    let valor2 = parseFloat(valor1 * VALOR_DO_BTC_NO_MOMENTO)
    let valor3 = document.getElementById("valorConvertido3")
    valor3.innerHTML = "O resultado da conversão de BTC para reais é " + valor2
}

