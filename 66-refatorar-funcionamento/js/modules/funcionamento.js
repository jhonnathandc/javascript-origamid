export default class Funcionamento {
  constructor(funcionamento) {
    this.funcionamento = document.querySelector(funcionamento);
  }

  dadosSemana() {
    this.diasSemana = this.funcionamento.dataset.semana.split(",").map(Number);
    this.horarioSemana = this.funcionamento.dataset.horario
      .split(",")
      .map(Number);
  }

  dadosAgora() {
    this.dataAgora = new Date();
    this.diaAgora = this.dataAgora.getDay();
    this.horarioAgora = this.dataAgora.getUTCHours() - 3;
  }

  aberto() {
    const diaAberto = this.diasSemana.indexOf(this.diaAgora) !== -1;
    const horarioAberto =
      this.horarioAgora >= this.horarioSemana[0] &&
      this.horarioAgora < this.horarioSemana[1];

    return diaAberto && horarioAberto;
  }

  addClass() {
    if (this.aberto()) {
      this.funcionamento.classList.add("aberto");
    }
  }

  init() {
    if (this.funcionamento) {
      this.dadosSemana();
      this.dadosAgora();
      this.addClass();
    }
    return this;
  }
}
