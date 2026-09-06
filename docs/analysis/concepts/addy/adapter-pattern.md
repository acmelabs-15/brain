---
package: addy
name: Adapter Pattern
slug: adapter-pattern
kind: pattern
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/deprecation-and-migration/SKILL.md, sha256: 92d9846321fab624eded7ac55d19a7738cfd2321c2be2e35eb153dcacf7359de}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Adapter Pattern

## Definition — verbatim
> "### Adapter Pattern" — skills/deprecation-and-migration/SKILL.md:134
> "Create an adapter that translates calls from the old interface to the new implementation. Consumers keep using the old interface while you migrate the backend." — skills/deprecation-and-migration/SKILL.md:136

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/deprecation-and-migration/SKILL.md | 134 | defines | Section heading and code pattern for decoupling consumer migration from backend replacement. |

## Consumes
Legacy caller contracts and modern backend service interfaces.

## Produces
An adapter class or module translating old method signatures and data structures to the new implementation.

## When applied
Applied when modernizing backend services or libraries without forcing simultaneous breaking changes on downstream callers.

## Sub-concepts
none

## Part of
deprecation-and-migration

## Implementation status
clean

## Design notes
An object-oriented structural pattern providing a backward-compatible wrapper that preserves the legacy interface while delegating execution to the new implementation. This decouples the deployment of modern backend architecture from downstream consumer refactoring.
