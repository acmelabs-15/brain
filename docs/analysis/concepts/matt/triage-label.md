---
package: matt
name: triage-label
slug: triage-label
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/to-spec.md, sha256: 47dbcde3e8ba381dc6650206bf36c64336c91f2d9de86ab1898355155081fe5a}
  - {path: docs/engineering/to-tickets.md, sha256: 122b190edd6d2529a8a2e2413b53235f0195c48970e8e59be221057f17a1b9fa}
  - {path: external/to-tickets.md, sha256: 0ce50201709eecad761dfd6c32c7b287efbbf2fe0707e9d9e0335bcd76b3f25b}
  - {path: skills/engineering/to-spec/SKILL.md, sha256: 43ad9cf318e5e7d3d1fa360253a37021796dc87a0c2e595ad262661a10f85088}
  - {path: skills/engineering/to-tickets/SKILL.md, sha256: 5c9fba69845c2519b9b35b9af42ae5142c21f8ca15ac2123dc2722002c8058ae}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# triage-label

## Definition — verbatim
(used, not defined)

> "The issue tracker and triage label vocabulary should have been provided to you. If not, tell the user to run `/setup-matt-pocock-skills`." — skills/engineering/to-spec/SKILL.md:9

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/to-spec.md | 22 | used here | Notes that setup-matt-pocock-skills must configure the repo tracker and triage-label vocabulary prior to publishing specs. |
| docs/engineering/to-tickets.md | 23 | used here | Notes prerequisite tracker setup and triage-label vocabulary configuration before ticket publication. |
| external/to-tickets.md | 32 | used here | External catalog prerequisite stating setup-matt-pocock-skills must configure the tracker and triage-label vocabulary. |
| skills/engineering/to-spec/SKILL.md | 9 | used here | Instructs agent to check that issue tracker and triage label vocabulary have been provided or prompt user to run setup. |
| skills/engineering/to-tickets/SKILL.md | 11 | used here | Instructs agent to check that issue tracker and triage label vocabulary have been provided before breaking work into tickets. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
A label in an issue tracking system used to denote state machine roles such as triage status and execution readiness, classified as name-only per D-023 because it functions as tracker metadata rather than an independent lifecycle concept.
