export default function initFetchBitcoin() {
  fetch("https://blockchain.info/ticker")
    .then((r) => r.json())
    .then((bitcoin) => {
      const precoBitcoin = document.querySelector(".bitcoin-preco");
      precoBitcoin.innerText = (10000 / bitcoin.BRL.sell).toFixed(4);
    })
    .catch((erro) => {
      console.log(erro);
    });
}
