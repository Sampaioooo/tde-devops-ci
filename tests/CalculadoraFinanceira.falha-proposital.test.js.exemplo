const CalculadoraFinanceira = require('../src/CalculadoraFinanceira');

describe('Falha proposital para validar o GitHub Actions', () => {
  test('deve falhar de proposito no primeiro envio', () => {
    const calculadora = new CalculadoraFinanceira();

    // Resultado correto seria 180. O valor 170 foi colocado apenas para gerar erro proposital no pipeline.
    expect(calculadora.aplicarDesconto(200, 10)).toBe(170);
  });
});
