---
title: The pilot’s app for an electric aircraft
situation: A mobile app has to talk to aircraft firmware, and the team has no aircraft to test on.
context: Pivotal Helix, at ArcTouch
role: Tech Lead, squad of 2
period: 2023 – 2024
result: Full flows testable without an aircraft
order: 1
summary:
  - Companion app for an all-electric eVTOL
  - Pre-flight checks over Bluetooth LE
  - Protobuf messages with aircraft firmware
  - An emulator stood in for the aircraft during development
stack: [Flutter, Dart, Bluetooth LE, Protobuf, BFF]
---

## Situation

The Pivotal Helix is an all-electric eVTOL personal aircraft. Its companion app is the pilot’s tool for the time before flight: system calibration, sensor verification, and safety checklists that confirm every system is operational. It also covers live diagnostics, power management and flight history.

## Constraints

The app depends on its Bluetooth LE connection to the aircraft, and the team had no access to a real one. The client’s internal aircraft team validated the builds, so day-to-day development needed another way to exercise that connection.

## What I did

- Led a squad of 2 as tech lead.
- Worked directly at the BLE protocol level, exchanging Protobuf-encoded structured data with the aircraft firmware.
- Built a BFF that mimicked the aircraft’s BLE communication and interactions, so the team could run full flows in test.

## Result

The team could develop and test full flows every day without an aircraft, and the client’s aircraft team validated the builds on their side. ArcTouch has published a [case study of the app](https://arctouch.com/portfolio/pivotal-helix), which covers the product and the technology.

## What I’d change

I’d make the BFF dynamic. It relied on static, predefined responses, and an emulator that generates its responses could cover more of the aircraft’s behaviour.
