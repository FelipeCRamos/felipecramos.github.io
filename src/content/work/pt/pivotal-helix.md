---
title: O app do piloto de uma aeronave elétrica
situation: Um app mobile precisa conversar com o firmware de uma aeronave, e o time não tem uma aeronave para testar.
context: Pivotal Helix, na ArcTouch
role: Tech Lead, squad de 2
period: 2023 – 2024
result: Fluxos completos testáveis sem aeronave
order: 1
summary:
  - App companheiro de um eVTOL totalmente elétrico
  - Checagens pré-voo via Bluetooth LE
  - Mensagens Protobuf com o firmware da aeronave
  - Um emulador fez o papel da aeronave no desenvolvimento
stack: [Flutter, Dart, Bluetooth LE, Protobuf, BFF]
---

## Situação

O Pivotal Helix é uma aeronave pessoal eVTOL totalmente elétrica. O app companheiro é a ferramenta do piloto para o período antes do voo: calibração de sistemas, verificação de sensores e checklists de segurança que confirmam que tudo está operacional. Ele também cobre diagnóstico ao vivo, gestão de energia e histórico de voos.

## Restrições

O app depende da conexão Bluetooth LE com a aeronave, e o time não tinha acesso a uma aeronave real. O time interno de aeronaves do cliente validava as versões, então o desenvolvimento do dia a dia precisava de outra forma de exercitar essa conexão.

## O que eu fiz

- Liderei um squad de 2 como tech lead.
- Trabalhei diretamente no nível do protocolo BLE, trocando dados estruturados em Protobuf com o firmware da aeronave.
- Criei um BFF que imitava a comunicação BLE e as interações da aeronave, para o time executar fluxos completos em teste.

## Resultado

O time passou a desenvolver e testar fluxos completos todos os dias sem aeronave, e o time de aeronaves do cliente validava as versões do lado deles. A ArcTouch publicou um [estudo de caso do app](https://arctouch.com/portfolio/pivotal-helix) que cobre o produto e a tecnologia.

## O que eu mudaria

Eu faria um BFF dinâmico. Ele dependia de respostas estáticas e predefinidas, e um emulador que gera as próprias respostas poderia cobrir mais do comportamento da aeronave.
