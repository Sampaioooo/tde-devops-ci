const CalculadoraFinanceira = require('../src/CalculadoraFinanceira');

describe('CalculadoraFinanceira', () => {
  let calculadora;

  beforeEach(() => {
    calculadora = new CalculadoraFinanceira();
  });

  test('deve somar dois valores financeiros', () => {
    expect(calculadora.somarValores(150.75, 49.25)).toBe(200);
  });

  test('deve aplicar desconto percentual corretamente', () => {
    expect(calculadora.aplicarDesconto(200, 10)).toBe(180);
  });

  test('deve calcular o valor de cada parcela', () => {
    expect(calculadora.calcularParcelamento(300, 3)).toEqual({
      valorTotal: 300,
      quantidadeParcelas: 3,
      valorParcela: 100
    });
  });

  test('deve impedir percentual de desconto fora do intervalo permitido', () => {
    expect(() => calculadora.aplicarDesconto(100, 120)).toThrow(RangeError);
  });

  test('deve impedir parcelamento com quantidade invalida', () => {
    expect(() => calculadora.calcularParcelamento(100, 0)).toThrow(RangeError);
  });
});
