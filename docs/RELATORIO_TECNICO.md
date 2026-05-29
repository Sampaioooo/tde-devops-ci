# Relatorio Tecnico - TDE de Pratica DevOps

## 1. Introducao

Este trabalho apresenta a implementacao de um pipeline de Integracao Continua usando GitHub Actions. A proposta e automatizar a execucao de testes unitarios sempre que houver alteracao no repositorio, reduzindo a chance de integrar codigo com falhas.

## 2. Objetivo

O objetivo principal foi criar uma automacao que instalasse as dependencias do projeto, executasse os testes unitarios e bloqueasse a integracao de codigo caso algum teste apresentasse erro.

## 3. Ferramentas utilizadas

Foram utilizadas as seguintes ferramentas:

- JavaScript, para implementar a classe principal.
- Node.js, para executar o projeto.
- npm, para gerenciar dependencias e scripts.
- Jest, para desenvolver e executar testes unitarios.
- Git e GitHub, para versionamento e hospedagem do codigo.
- GitHub Actions, para automatizar o pipeline de CI.
- YAML, para configurar o workflow do pipeline.

## 4. Estrutura do projeto

O projeto foi organizado em pastas separadas para manter clareza e facilitar a manutencao:

```txt
src/       codigo principal
tests/     testes unitarios
.github/   configuracao do GitHub Actions
docs/      documentacao do trabalho
```

## 5. Classe implementada

Foi criada a classe `CalculadoraFinanceira`, contendo tres metodos principais:

- `somarValores`, responsavel por somar dois valores.
- `aplicarDesconto`, responsavel por aplicar um desconto percentual.
- `calcularParcelamento`, responsavel por calcular o valor de cada parcela.

A classe tambem possui validacoes para impedir entradas invalidas, melhorando a confiabilidade do codigo.

## 6. Testes unitarios

Os testes foram desenvolvidos com Jest. Eles verificam se os metodos retornam os resultados esperados e se erros sao lancados em situacoes invalidas, como desconto acima de 100% ou parcelamento com quantidade menor ou igual a zero.

## 7. Pipeline no GitHub Actions

O arquivo `.github/workflows/main.yml` configura o pipeline para rodar em eventos de `push` e `pull_request` na branch `main`. O fluxo executa as seguintes etapas:

1. Baixa o codigo do repositorio.
2. Configura o Node.js.
3. Instala as dependencias com `npm ci`.
4. Executa os testes com `npm test`.

## 8. Falha proposital

Para validar o comportamento do pipeline, foi criado um teste com resultado esperado incorreto. Essa falha demonstrou que o GitHub Actions interrompe o processo quando os testes nao passam.

Inserir aqui o print da execucao com erro no GitHub Actions.

## 9. Execucao com sucesso

Apos corrigir o teste proposital, o pipeline foi executado novamente e todos os testes passaram com sucesso.

Inserir aqui o print da execucao com sucesso no GitHub Actions.

## 10. Bloqueio de merge

Com a protecao da branch `main` e a exigencia de status checks, o merge de alteracoes pode ser bloqueado quando os testes automatizados falham. Isso aumenta a seguranca do processo de desenvolvimento e reduz a entrada de bugs em producao.

## 11. Conclusao

A atividade demonstrou a importancia da Integracao Continua no processo de desenvolvimento. Com o GitHub Actions e testes automatizados, o projeto passa a ter uma validacao constante, permitindo identificar falhas rapidamente e manter maior qualidade no codigo.

## 12. Link do repositorio

Adicionar aqui o link final do repositorio no GitHub.
