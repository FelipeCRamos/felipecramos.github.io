---
title: Empty repo to three app stores
situation: A fintech founder needs a mobile product that matches the web platform, with one mobile engineer to build it.
context: Fintech product, at Globant
role: Sole mobile engineer
period: Globant, 2024 onward
result: MVP in 3 months, three stores within 4
order: 2
summary:
  - One mobile engineer on the team
  - MVP in 3 months
  - Live on three app stores within 4 months
  - Still the sole mobile developer today
stack: [Flutter, Dart, GraphQL, Dio, GoRouter, GetIt, BLoC, SuperTokens]
---

## Situation

A fintech product had a web platform and no mobile app. The team was me on mobile, one backend and web developer, and the founder. Client and product names are withheld under NDA.

## Constraints

The app needed full feature parity with the web platform, and there was no other mobile engineer to split decisions or release work with. Some of the vendors the product relied on didn’t have the Flutter support we needed.

## What I did

- Set the architecture from an empty repo: dependency injection, state management, code organisation and feature division.
- Worked through the mobile-specific requirements in Apple’s and Google’s guidelines.
- Worked out how SuperTokens and the on-ramp vendors behaved on web, then implemented that behaviour in Flutter.
- Owned all mobile-side integrations, CI/CD and the release pipeline across three stores.
- Delivered live portfolio charts, wallet management, buy and sell flows with slippage protection, activity feeds and gated subscription access.
- Kept unit and widget test coverage on critical-path flows.

## Result

The MVP shipped in 3 months and the app was live on iOS, Android and Solana d'App store within 4. I’m still its sole mobile developer today. The product is still ramping up in the market with consistently great reviews.
