# Passo a passo para executar o TDE de Pratica DevOps

## 1. Criar o repositorio no GitHub

Nome recomendado:

```txt
tde-devops-ci
```

## 2. Abrir o projeto no VS Code

Entre na pasta do projeto e execute:

```bash
npm install
npm test
```

## 3. Primeiro envio com falha proposital

Renomeie o arquivo:

```txt
tests/CalculadoraFinanceira.falha-proposital.test.js.exemplo
```

para:

```txt
tests/CalculadoraFinanceira.falha-proposital.test.js
```

Depois rode:

```bash
git init
git add .
git commit -m "adiciona projeto com falha proposital no teste"
git branch -M main
git remote add origin LINK_DO_REPOSITORIO
git push -u origin main
```

No GitHub, entre em `Actions` e confirme que a execucao falhou.

## 4. Segundo envio com sucesso

Remova o arquivo de falha proposital ou corrija o resultado esperado de `170` para `180`.

Depois execute:

```bash
git add .
git commit -m "corrige teste e valida pipeline com sucesso"
git push
```

No GitHub, entre em `Actions` e confirme que a nova execucao passou.

## 5. Bloqueio de merge

No GitHub, configure a protecao da branch `main`:

1. Acesse `Settings`.
2. Acesse `Branches`.
3. Crie uma regra para a branch `main`.
4. Marque a opcao para exigir status checks.
5. Selecione o status do workflow de testes.
6. Salve a regra.

Assim, um pull request so podera ser integrado se os testes passarem.
