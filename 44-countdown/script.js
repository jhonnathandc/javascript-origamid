import Countdown from "./countdown.js";

const diasParaONatal = new Countdown("24 December 2023 23:59:59");

setInterval(() => {
  console.log(diasParaONatal.total);
}, 1000);
