class CalculadoraFinanceira {
  somarValores(valor1, valor2) {
    this.#validarNumero(valor1, 'valor1');
    this.#validarNumero(valor2, 'valor2');

    return this.#arredondar(valor1 + valor2);
  }

  aplicarDesconto(valor, percentual) {
    this.#validarNumero(valor, 'valor');
    this.#validarNumero(percentual, 'percentual');

    if (percentual < 0 || percentual > 100) {
      throw new RangeError('O percentual de desconto deve estar entre 0 e 100.');
    }

    const valorComDesconto = valor - (valor * percentual) / 100;
    return this.#arredondar(valorComDesconto);
  }

  calcularParcelamento(valorTotal, quantidadeParcelas) {
    this.#validarNumero(valorTotal, 'valorTotal');

    if (!Number.isInteger(quantidadeParcelas) || quantidadeParcelas <= 0) {
      throw new RangeError('A quantidade de parcelas deve ser um numero inteiro maior que zero.');
    }

    return {
      valorTotal: this.#arredondar(valorTotal),
      quantidadeParcelas,
      valorParcela: this.#arredondar(valorTotal / quantidadeParcelas)
    };
  }

  #validarNumero(valor, nomeCampo) {
    if (typeof valor !== 'number' || Number.isNaN(valor)) {
      throw new TypeError(`${nomeCampo} deve ser um numero valido.`);
    }
  }

  #arredondar(valor) {
    return Number(valor.toFixed(2));
  }
}

module.exports = CalculadoraFinanceira;
