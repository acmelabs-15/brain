---
package: addy
name: The Test Pyramid
slug: the-test-pyramid
kind: pattern
package_phase: addy:Build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/test-driven-development/SKILL.md, sha256: 440fb3c9b76f4f1b0b564dfbaec19d370beab0167a3e2ab048ce59c5a865ecef}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# The Test Pyramid

## Definition — verbatim
> "## The Test Pyramid" — skills/test-driven-development/SKILL.md:144
> "Invest testing effort according to the pyramid — most tests should be small and fast, with progressively fewer tests at higher levels:" — skills/test-driven-development/SKILL.md:146

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/test-driven-development/SKILL.md | 144 | defined here | Architectural test distribution model (~80% Unit, ~15% Integration, ~5% E2E). |

## Consumes
Application architecture, component boundaries, and testing objectives.

## Produces
Balanced test suite distribution prioritizing fast isolated feedback over slow end-to-end tests.

## When applied
When designing testing strategies and allocating testing effort across test levels.

## Sub-concepts
small, large, unit-test

## Part of
test-driven-development

## Implementation status
defects: cross-file-contradiction, doc-drift

## Design notes
An architectural testing model directing investment toward high volumes of fast, isolated unit tests (~80%), a moderate layer of integration tests (~15%), and a minimal layer of end-to-end tests (~5%) to optimize test speed and confidence.
