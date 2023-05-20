export default function initFetchBitcoin(url, target) {
  fetch(url)
    .then((r) => r.json())
    .then((bitcoin) => {
      const precoBitcoin = document.querySelector(target);
      precoBitcoin.innerText = (10000 / bitcoin.BRL.sell).toFixed(4);
    })
    .catch((erro) => {
      console.log(erro);
    });
}
