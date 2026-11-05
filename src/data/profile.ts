// All facts on the site come from this file and the case studies in src/content/work.
import type { L } from '../i18n';

export const contact = {
  email: 'felipecramos00@gmail.com',
  github: 'https://github.com/FelipeCRamos',
  linkedin: 'https://linkedin.com/in/felipecramos',
};

export const ownership: { item: L; response: L }[] = [
  { item: { en: 'Architecture', pt: 'Arquitetura' }, response: { en: 'CLEAN, MVVM', pt: 'CLEAN, MVVM' } },
  { item: { en: 'Testing', pt: 'Testes' }, response: { en: 'UNIT, WIDGET, INTEGRATION, GOLDEN', pt: 'UNIT, WIDGET, INTEGRAÇÃO, GOLDEN' } },
  { item: { en: 'CI/CD', pt: 'CI/CD' }, response: { en: 'OWNED', pt: 'CONFIGURO' } },
  { item: { en: 'Store releases', pt: 'Publicação nas lojas' }, response: { en: '3 STORES', pt: '3 LOJAS' } },
  { item: { en: 'Native interop', pt: 'Interop nativo' }, response: { en: 'BLE, CHANNELS', pt: 'BLE, CHANNELS' } },
];

export interface Situation {
  id: string;
  title: L;
  where: L;
  condition: L;
  steps: { label: L; result: L }[];
  slug?: string;
}

export const situations: Situation[] = [
  {
    id: 'hardware',
    title: { en: 'Can’t test without the hardware', pt: 'Sem hardware para testar' },
    where: { en: 'Pivotal Helix, at ArcTouch', pt: 'Pivotal Helix, na ArcTouch' },
    condition: {
      en: 'The app talks to aircraft firmware over Bluetooth LE, and the team has no access to an aircraft.',
      pt: 'O app conversa com o firmware da aeronave via Bluetooth LE, e o time não tem acesso a uma aeronave.',
    },
    steps: [
      { label: { en: 'Work at the BLE protocol level', pt: 'Trabalhar no nível do protocolo BLE' }, result: { en: 'PROTOBUF', pt: 'PROTOBUF' } },
      { label: { en: 'Build a BFF that emulates firmware', pt: 'Criar um BFF que emula o firmware' }, result: { en: 'FULL FLOWS IN TEST', pt: 'FLUXOS COMPLETOS EM TESTE' } },
      { label: { en: 'Hardware bottleneck', pt: 'Gargalo de hardware' }, result: { en: 'REMOVED', pt: 'ELIMINADO' } },
      { label: { en: 'Validation on the aircraft', pt: 'Validação na aeronave' }, result: { en: 'CLIENT TEAM', pt: 'TIME DO CLIENTE' } },
    ],
    slug: 'pivotal-helix',
  },
  {
    id: 'empty-repo',
    title: { en: 'Empty repo, tiny team, real launch', pt: 'Repo vazio, time pequeno, lançamento real' },
    where: { en: 'Fintech product, at Globant', pt: 'Produto de fintech, na Globant' },
    condition: {
      en: 'One mobile engineer, one backend and web developer, and the founder.',
      pt: 'Uma pessoa no mobile, uma no backend e web, e o founder.',
    },
    steps: [
      { label: { en: 'Architecture, integrations, CI/CD', pt: 'Arquitetura, integrações, CI/CD' }, result: { en: 'OWNED', pt: 'POR MINHA CONTA' } },
      { label: { en: 'Ship the MVP', pt: 'Entregar o MVP' }, result: { en: '3 MONTHS', pt: '3 MESES' } },
      { label: { en: 'Go live on three app stores', pt: 'Publicar em três lojas' }, result: { en: 'WITHIN 4 MONTHS', pt: 'EM ATÉ 4 MESES' } },
      { label: { en: 'Mobile today', pt: 'Mobile hoje' }, result: { en: 'STILL SOLO', pt: 'AINDA SOB MINHA RESPONSABILIDADE' } },
    ],
    slug: 'zero-to-three-stores',
  },
  {
    id: 'rewrite',
    title: { en: 'The native apps have to go', pt: 'Os apps nativos precisam ser substituídos' },
    where: { en: 'Food-ordering platform, at CI&T', pt: 'Plataforma de pedidos de comida, na CI&T' },
    condition: {
      en: 'Separate native iOS and Android codebases, performing poorly.',
      pt: 'Bases nativas separadas de iOS e Android, com desempenho ruim.',
    },
    steps: [
      { label: { en: 'Direct the rewrite', pt: 'Liderar a reescrita' }, result: { en: 'TEAM OF 4', pt: 'TIME DE 4' } },
      { label: { en: 'Deliver one Flutter app', pt: 'Entregar um único app Flutter' }, result: { en: 'UNDER 6 MONTHS', pt: 'MENOS DE 6 MESES' } },
      { label: { en: 'Later releases', pt: 'Versões seguintes' }, result: { en: 'KEPT OWNING', pt: 'CONTINUEI RESPONSÁVEL' } },
    ],
    slug: 'native-to-flutter-rewrite',
  },
  {
    id: 'inherited',
    title: { en: 'Everyone left, nothing documented', pt: 'Todo mundo saiu, nada documentado' },
    where: { en: 'Investment platform, Hurst Capital', pt: 'Plataforma de investimentos, Hurst Capital' },
    condition: {
      en: 'Full squad turnover. No documentation, no handover, nobody to ask.',
      pt: 'O squad inteiro saiu. Sem documentação, sem passagem de bastão, sem ninguém para perguntar.',
    },
    steps: [
      { label: { en: 'Define a new architecture', pt: 'Definir uma nova arquitetura' }, result: { en: 'FROM SCRATCH', pt: 'DO ZERO' } },
      { label: { en: 'Rebuild the app', pt: 'Reconstruir o app' }, result: { en: 'MODULE BY MODULE', pt: 'MÓDULO A MÓDULO' } },
      { label: { en: 'Ship the MVP', pt: 'Entregar o MVP' }, result: { en: '~2 MONTHS', pt: '~2 MESES' } },
      { label: { en: 'Stand up analytics', pt: 'Implantar analytics' }, result: { en: 'FIRST FUNNEL DATA', pt: 'PRIMEIROS DADOS DE FUNIL' } },
      { label: { en: 'Hire the team', pt: 'Contratar o time' }, result: { en: '3 ENGINEERS', pt: '3 PESSOAS' } },
    ],
    slug: 'inherited-codebase',
  },
  {
    id: 'trust',
    title: { en: 'The client relationship has broken down', pt: 'A relação com o cliente se desgastou' },
    where: { en: 'US healthcare app, at ArcTouch', pt: 'App de saúde dos EUA, na ArcTouch' },
    condition: {
      en: 'Priorities kept changing and deadlines were slipping.',
      pt: 'Prioridades instáveis e prazos escapando.',
    },
    steps: [
      { label: { en: 'Technical point of contact', pt: 'Ponto de contato técnico' }, result: { en: 'DIRECT', pt: 'DIRETO' } },
      { label: { en: 'Prioritisation with the client', pt: 'Priorização com o cliente' }, result: { en: 'RE-ESTABLISHED', pt: 'RESTABELECIDA' } },
      { label: { en: 'Squad of 3', pt: 'Squad de 3' }, result: { en: 'PREDICTABLE DELIVERY', pt: 'ENTREGA PREVISÍVEL' } },
    ],
  },
  {
    id: 'deadline',
    title: { en: 'One week to a hard deadline', pt: 'Uma semana para um prazo fixo' },
    where: { en: 'Native iOS project, at ArcTouch', pt: 'Projeto iOS nativo, na ArcTouch' },
    condition: {
      en: 'Unfamiliar SwiftUI codebase. The team wasn’t tracking to hit the date.',
      pt: 'Código SwiftUI desconhecido. O time não estava no ritmo para cumprir a data.',
    },
    steps: [
      { label: { en: 'Ramp up on the codebase', pt: 'Entender o código' }, result: { en: 'DONE', pt: 'FEITO' } },
      { label: { en: 'Assigned scope', pt: 'Escopo atribuído' }, result: { en: 'SHIPPED', pt: 'ENTREGUE' } },
      { label: { en: 'Release date', pt: 'Data de lançamento' }, result: { en: 'ORIGINAL DATE', pt: 'DATA ORIGINAL' } },
    ],
  },
  {
    id: 'hybrid',
    title: { en: 'Move a live app to Flutter, piece by piece', pt: 'Migrar um app em produção para Flutter, parte por parte' },
    where: { en: 'Major Brazilian insurer, at CI&T', pt: 'Grande seguradora brasileira, na CI&T' },
    condition: {
      en: 'An established native app, with sections being ported to Flutter incrementally.',
      pt: 'Um app nativo consolidado, com seções migrando para Flutter aos poucos.',
    },
    steps: [
      { label: { en: 'Native and Flutter bridge', pt: 'Ponte entre nativo e Flutter' }, result: { en: 'PLATFORM CHANNELS', pt: 'PLATFORM CHANNELS' } },
      { label: { en: 'Routing, navigation state, data', pt: 'Rotas, navegação, dados' }, result: { en: 'ACROSS THE BOUNDARY', pt: 'ENTRE AS DUAS CAMADAS' } },
      { label: { en: 'Stability priorities', pt: 'Prioridades de estabilidade' }, result: { en: 'REAL CRASH DATA', pt: 'DADOS REAIS DE CRASH' } },
    ],
  },
  {
    id: 'payments',
    title: { en: 'Payments inside a very large programme', pt: 'Pagamentos em um programa muito grande' },
    where: { en: 'Entertainment and leisure programme, at Globant', pt: 'Programa de entretenimento e lazer, na Globant' },
    condition: {
      en: '300+ engineers across multiple repositories, under shared Clean Architecture and BLoC standards.',
      pt: 'Mais de 300 pessoas de engenharia em vários repositórios, com padrões comuns de Clean Architecture e BLoC.',
    },
    steps: [
      { label: { en: 'B2C module', pt: 'Módulo B2C' }, result: { en: 'END TO END', pt: 'DE PONTA A PONTA' } },
      { label: { en: 'Payments integration', pt: 'Integração de pagamentos' }, result: { en: 'LED', pt: 'LIDERADA' } },
      { label: { en: 'Tokenisation, failure, retry', pt: 'Tokenização, falha, retry' }, result: { en: 'COVERED', pt: 'COBERTOS' } },
      { label: { en: 'Store compliance review', pt: 'Revisão de conformidade das lojas' }, result: { en: 'COVERED', pt: 'COBERTA' } },
    ],
  },
];

export interface Job {
  dates: string;
  role: L;
  where: string;
  note: L;
}

export const career: Job[] = [
  {
    dates: '2024 – now',
    role: { en: 'Senior Flutter Developer', pt: 'Senior Flutter Developer' },
    where: 'Globant',
    note: {
      en: 'Solo fintech launch. Payments in a 300+ engineer programme. Now owning a profile module on a large consumer leisure app.',
      pt: 'Lançamento de fintech sem outro dev mobile. Pagamentos em um programa com mais de 300 pessoas de engenharia. Hoje, responsável pelo módulo de perfil em um grande app de lazer.',
    },
  },
  {
    dates: '2023 – 2024',
    role: { en: 'Tech Lead', pt: 'Tech Lead' },
    where: 'ArcTouch',
    note: {
      en: 'Pilot app for an eVTOL aircraft. Recovered a strained client engagement.',
      pt: 'App do piloto de uma aeronave eVTOL. Recuperação de uma relação desgastada com cliente.',
    },
  },
  {
    dates: '2021 – 2023',
    role: { en: 'Senior Software Engineer', pt: 'Senior Software Engineer' },
    where: 'CI&T',
    note: {
      en: 'Led a native-to-Flutter rewrite in under 6 months. Native and Flutter bridging for a major insurer.',
      pt: 'Liderança de uma reescrita de nativo para Flutter em menos de 6 meses. Ponte entre nativo e Flutter para uma grande seguradora.',
    },
  },
  {
    dates: '2020 – 2021',
    role: { en: 'Software Engineer', pt: 'Software Engineer' },
    where: 'Hurst Capital',
    note: {
      en: 'First hire after full squad turnover. MVP in about 2 months, then hired 3 engineers.',
      pt: 'Primeira contratação depois que o squad inteiro saiu. MVP em cerca de 2 meses, depois 3 contratações.',
    },
  },
  {
    dates: '2020',
    role: { en: 'Mobile Developer (Intern)', pt: 'Mobile Developer (estágio)' },
    where: 'Smart Retail',
    note: { en: 'E-commerce app in Flutter and MobX, a UFRN and ASUS collaboration.', pt: 'App de e-commerce em Flutter e MobX, parceria entre UFRN e ASUS.' },
  },
  {
    dates: '2019 – 2020',
    role: { en: 'Mobile Developer (Intern)', pt: 'Mobile Developer (estágio)' },
    where: 'SINFO, UFRN',
    note: { en: 'Native iOS app in Swift. Part of the team’s move to Flutter.', pt: 'App iOS nativo em Swift. Parte da migração do time para Flutter.' },
  },
  {
    dates: '2018 – 2019',
    role: { en: 'Teaching Assistant', pt: 'Monitoria' },
    where: 'UFRN',
    note: { en: 'Programming Languages I and Basic Data Structures I, in C and C++.', pt: 'Linguagens de Programação I e Estruturas de Dados Básicas I, em C e C++.' },
  },
];

export const toolbox: { group: L; items: string; slug?: string }[] = [
  { group: { en: 'Mobile', pt: 'Mobile' }, items: 'Flutter, Dart, Swift, SwiftUI, UIKit' },
  { group: { en: 'State management', pt: 'Gerência de estado' }, items: 'BLoC, MobX, RxDart, Provider, Riverpod', slug: 'inherited-codebase' },
  { group: { en: 'Architecture', pt: 'Arquitetura' }, items: 'Clean Architecture, MVVM, MVC, get_it, Injectable', slug: 'zero-to-three-stores' },
  { group: { en: 'Testing', pt: 'Testes' }, items: 'flutter_test, mockito, mocktail, bloc_test, golden_toolkit' },
  { group: { en: 'Networking and data', pt: 'Rede e dados' }, items: 'Dio, GraphQL, REST, Protobuf, GoRouter' },
  { group: { en: 'Native and connected devices', pt: 'Nativo e dispositivos conectados' }, items: 'Platform channels, native interop, Bluetooth LE, embedded integrations', slug: 'pivotal-helix' },
  { group: { en: 'Payments', pt: 'Pagamentos' }, items: 'Apple Pay, Google Pay, payment gateway SDKs, non-custodial wallet flows' },
  { group: { en: 'Auth and sessions', pt: 'Autenticação e sessões' }, items: 'Firebase, SuperTokens, AWS Cognito' },
  { group: { en: 'Firebase', pt: 'Firebase' }, items: 'Auth, Cloud Storage, FCM, Crashlytics, Analytics, Remote Config' },
  { group: { en: 'AWS', pt: 'AWS' }, items: 'Cognito, S3, API Gateway, DynamoDB, CloudFront, SNS' },
  { group: { en: 'AI-assisted delivery', pt: 'Entrega assistida por IA' }, items: 'Claude, Cursor, technical specs, reusable skills, code review, refactors, test generation' },
  { group: { en: 'Delivery', pt: 'Entrega' }, items: 'CI/CD, design system implementation, App Store, Google Play, web3 dApp store', slug: 'native-to-flutter-rewrite' },
  { group: { en: 'Other languages', pt: 'Outras linguagens' }, items: 'C, C++, Python, JavaScript' },
];

export const interests: L = {
  en: 'Home lab and self-hosting, local LLMs, embedded and FFI, Rust, functional programming.',
  pt: 'Home lab e self-hosting, LLMs locais, embarcados e FFI, Rust, programação funcional.',
};

export const wins: L[] = [
  { en: '1st place, NEOENERGIA Hackathon, team Energize (Sep 2019)', pt: '1º lugar, Hackathon NEOENERGIA, time Energize (set. 2019)' },
  { en: '1st place, Maratona Potiguar de Programação, team GadoD++ (Jun 2019)', pt: '1º lugar, Maratona Potiguar de Programação, time GadoD++ (jun. 2019)' },
];

export const sideProjects: { name: string; url: string; about: L }[] = [
  {
    name: 'gift-list',
    url: 'https://github.com/FelipeCRamos/gift-list',
    about: { en: 'Gift registry in Flutter Web. Contributors pay the creator directly through Pix.', pt: 'Lista de presentes em Flutter Web. Quem contribui paga direto para quem criou a lista, via Pix.' },
  },
  {
    name: 'mini-app-url-shortener',
    url: 'https://github.com/FelipeCRamos/mini-app-url-shortener',
    about: { en: 'Weekend study of Clean Architecture and BLoC, with unit and widget tests.', pt: 'Estudo de fim de semana de Clean Architecture e BLoC, com testes unitários e de widget.' },
  },
  {
    name: 'ELIS',
    url: 'https://github.com/FelipeCRamos/ELIS',
    about: { en: 'Command-line text editor in C++, built on doubly linked lists.', pt: 'Editor de texto de linha de comando em C++, com listas duplamente encadeadas.' },
  },
];

export const together: { title: L; body: L; fits: L[] }[] = [
  {
    title: { en: 'Full-time', pt: 'Tempo integral' },
    body: { en: 'Senior engineer or tech lead on a mobile team.', pt: 'Pessoa sênior ou tech lead em um time mobile.' },
    fits: [
      { en: 'Flutter or native iOS products', pt: 'Produtos em Flutter ou iOS nativo' },
      { en: 'Small squads that need a technical lead', pt: 'Squads pequenos que precisam de liderança técnica' },
      { en: 'Building or growing a mobile team', pt: 'Montar ou crescer um time mobile' },
    ],
  },
  {
    title: { en: 'Contract', pt: 'Contrato' },
    body: { en: 'A defined piece of work that needs an owner.', pt: 'Uma entrega definida que precisa de um responsável.' },
    fits: [
      { en: 'New apps from an empty repo to the stores', pt: 'Apps novos, do repo vazio às lojas' },
      { en: 'Rewrites and inherited codebases', pt: 'Reescritas e códigos herdados' },
      { en: 'Bluetooth LE, native bridges and payments', pt: 'Bluetooth LE, pontes nativas e pagamentos' },
    ],
  },
];
