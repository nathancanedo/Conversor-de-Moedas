function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);

  var valorEmReal = valorEmDolarNumerico * 4.94;
  var valorEmRealFixado = valorEmReal.toFixed(2);
  console.log(valorEmReal);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em Real é R$" + valorEmRealFixado;
  elementoValorConvertido.innerHTML = valorConvertido;

  var valorBitcoin = valorEmDolarNumerico * 0.000025;
  var valorBitcoinFixado = valorBitcoin.toFixed(8);

  var elementoValorBitcoinConvertido = document.getElementById("valorBitcoin");
  var valorBitcoinConvertido =
    "O valor em Bitcoin é " + valorBitcoinFixado + " BTC";
  elementoValorBitcoinConvertido.innerHTML = valorBitcoinConvertido;
  console.log("O valor em bitcoin é " + valorBitcoin + "BTC");
}

function ConverterEuro() {
  var valorElementoEuro = document.getElementById("valor");
  var valorEuro = valorElementoEuro.value;
  var valorEuroNumerico = parseFloat(valorEuro);
  var valorEmEuro = valorEuroNumerico * 0.91;
  var valorEmEuroFixado = valorEmEuro.toFixed(2);
  console.log(valorEmEuro);

  var elementoValorConvertidoEuro = document.getElementById("valorConvertido");
  var valorConvertidoEuro = "O resultado em Euro é €" + valorEmEuroFixado;
  elementoValorConvertidoEuro.innerHTML = valorConvertidoEuro;

  var valorBitcoinEuro = valorEuroNumerico * 0.000025;
  var valorBitcoinFixadoEuro = valorBitcoinEuro.toFixed(8);

  var elementoValorBitcoinConvertidoEuro = document.getElementById(
    "valorBitcoin"
  );
  var valorBitcoinConvertidoEuro =
    "O valor em Bitcoin é " + valorBitcoinFixadoEuro + " BTC";
  elementoValorBitcoinConvertidoEuro.innerHTML = valorBitcoinConvertidoEuro;
  console.log("O valor em bitcoin é " + valorBitcoin + "BTC");
}

function ConverterLibra() {
  var valorElementoLibra = document.getElementById("valor");
  var valorLibra = valorElementoLibra.value;
  var valorLibraNumerico = parseFloat(valorLibra);
  var valorEmLibra = valorLibraNumerico * 0.75;
  var valorEmLibraFixado = valorEmLibra.toFixed(2);

  var elementoValorConvertidoLibra = document.getElementById("valorConvertido");
  var valorConvertidoLibra = "O resultado em Libra é £" + valorEmLibraFixado;
  elementoValorConvertidoLibra.innerHTML = valorConvertidoLibra;

  var valorBitcoinLibra = valorLibraNumerico * 0.000025;
  var valorBitcoinFixadoLibra = valorBitcoinLibra.toFixed(8);

  var elementoValorBitcoinConvertidoLibra = document.getElementById(
    "valorBitcoin"
  );
  var valorBitcoinConvertidoLibra =
    "O valor em Bitcoin é " + valorBitcoinFixadoLibra + " BTC";
  elementoValorBitcoinConvertidoLibra.innerHTML = valorBitcoinConvertidoLibra;
  console.log("O valor em bitcoin é " + valorBitcoin + "BTC");
}
