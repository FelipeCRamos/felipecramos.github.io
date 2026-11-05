---
title: Do repositório vazio a três lojas de apps
situation: O founder de uma fintech precisa de um produto mobile à altura da plataforma web, com uma pessoa só no mobile.
context: Produto de fintech, na Globant
role: Sem outro dev mobile no time
period: Globant, a partir de 2024
result: MVP em 3 meses, três lojas em até 4
order: 2
summary:
  - Uma pessoa só no mobile
  - MVP em 3 meses
  - Em três lojas de apps em até 4 meses
  - O mobile segue sob minha responsabilidade
stack: [Flutter, Dart, GraphQL, Dio, GoRouter, GetIt, BLoC, SuperTokens]
---

## Situação

Um produto de fintech tinha plataforma web e nenhum app. O time era eu no mobile, uma pessoa no backend e web, e o founder. Os nomes do cliente e do produto são protegidos por NDA.

## Restrições

O app precisava de paridade total com a plataforma web, e não havia outra pessoa no mobile para dividir decisões ou publicações. Alguns fornecedores usados pelo produto não tinham o suporte a Flutter de que precisávamos.

## O que eu fiz

- Defini a arquitetura a partir de um repositório vazio: injeção de dependência, gerência de estado, organização do código e divisão por features.
- Cuidei dos requisitos específicos de mobile nas diretrizes da Apple e do Google.
- Descobri como o SuperTokens e os fornecedores de on-ramp funcionavam na web e implementei esse comportamento em Flutter.
- Cuidei de todas as integrações do lado mobile, do CI/CD e do pipeline de publicação nas três lojas.
- Entreguei gráficos de portfólio ao vivo, gestão de carteira, fluxos de compra e venda com proteção contra slippage, feeds de atividade e acesso por assinatura.
- Mantive testes unitários e de widget nos fluxos críticos.

## Resultado

O MVP saiu em 3 meses, e o app entrou no ar em iOS, Android e na loja Solana d'App em 4 meses. Até hoje, o mobile segue sob minha responsabilidade, sem outro dev mobile no time. O produto ainda está ganhando tração no mercado e tem ótimas avaliações até então.
