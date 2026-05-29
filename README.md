# TDE - Pratica DevOps

Projeto desenvolvido para o Trabalho Discente Efetivo da disciplina de Pratica DevOps, no curso de Analise e Desenvolvimento de Sistemas da UNIFACEMA.

## Objetivo

Implementar um pipeline de Integracao Continua usando GitHub Actions. O pipeline instala as dependencias do projeto, executa testes unitarios com Jest e impede a integracao de codigo quando algum teste falha.

## Tecnologias utilizadas

- JavaScript
- Node.js
- npm
- Jest
- Git
- GitHub
- GitHub Actions
- YAML

## Estrutura do projeto

```txt
tde-devops-ci/
├── src/
│   └── CalculadoraFinanceira.js
├── tests/
│   ├── CalculadoraFinanceira.test.js
│   └── CalculadoraFinanceira.falha-proposital.test.js.exemplo
├── .github/
│   └── workflows/
│       └── main.yml
├── docs/
│   ├── PASSO_A_PASSO_EXECUCAO.md
│   └── RELATORIO_TECNICO.md
├── package.json
└── README.md
```

## Classe implementada

A classe `CalculadoraFinanceira` possui tres metodos principais:

1. `somarValores(valor1, valor2)`
2. `aplicarDesconto(valor, percentual)`
3. `calcularParcelamento(valorTotal, quantidadeParcelas)`

## Como instalar e executar

```bash
npm install
npm test
```

## Pipeline CI

O arquivo `.github/workflows/main.yml` executa automaticamente os testes em eventos de `push` e `pull_request` na branch `main`.

## Validacao de falha proposital

Para gerar uma falha proposital no GitHub Actions, renomeie o arquivo abaixo:

```txt
tests/CalculadoraFinanceira.falha-proposital.test.js.exemplo
```

para:

```txt
tests/CalculadoraFinanceira.falha-proposital.test.js
```

Depois envie para o GitHub. O pipeline deve falhar. Em seguida, remova esse arquivo ou corrija o valor esperado de `170` para `180`, faca novo commit e envie novamente. O segundo pipeline deve passar.

## Link do repositorio

https://github.com/Sampaioooo/tde-devops-ci
