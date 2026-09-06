---
package: addy
name: RED
slug: red
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: commands/build.toml, sha256: e25857cf424905bceea7f1250903eb801a8e79ed62ec67c2fd4d785969e47e62}
  - {path: references/observability-checklist.md, sha256: 28659e0a4b9625a434285fa9ede632802afa909f768d0f8d839dca227e53d8fe}
  - {path: skills/observability-and-instrumentation/SKILL.md, sha256: bcec2ada212de6d07daa16886859cc0f2d954c845fc65fdbb7b23106df6aa8c0}
  - {path: skills/test-driven-development/SKILL.md, sha256: 440fb3c9b76f4f1b0b564dfbaec19d370beab0167a3e2ab048ce59c5a865ecef}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# RED

## Definition — verbatim
> "For request-driven services, instrument **RED** on every endpoint and every external dependency: **R**ate (requests/sec), **E**rrors (failure rate), **D**uration (latency histogram, not average)." — skills/observability-and-instrumentation/SKILL.md:95

## Also called — verbatim
> "Step 1: RED — Write a Failing Test" — skills/test-driven-development/SKILL.md:49

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| commands/build.toml | 19 | applies | Step 3 of default build workflow mandating writing a failing test for expected behavior before implementing code. |
| references/observability-checklist.md | 37 | defines | Checklist item instructing developers to instrument RED (Rate, Errors, Duration) for every endpoint and external dependency. |
| skills/observability-and-instrumentation/SKILL.md | 95 | defines | Defines the RED metrics method (Rate, Errors, Duration) for request-driven production services. |
| skills/test-driven-development/SKILL.md | 41 | defines | Diagrams and defines RED as the initial phase in the Red-Green-Refactor TDD cycle where a failing test is authored. |

## Consumes
Feature acceptance criteria in TDD; service endpoints and RPC boundaries in observability.

## Produces
A failing test proving absent behavior, or Rate/Errors/Duration time-series telemetry.

## When applied
Applied at the start of any test-driven implementation task, and when configuring telemetry for request-driven endpoints.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: cross-file-contradiction, doc-drift

## Design notes
RED carries two distinct meanings in addy: in TDD it represents writing an initial failing test before code exists, while in observability it denotes the Rate, Errors, Duration telemetry method.
