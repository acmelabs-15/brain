---
package: matt
name: testability
slug: testability
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/improve-codebase-architecture/SKILL.md, sha256: d1ac25511a936ff4250a48dbcefda363837d6bb9321b3cba73df99fa37270a75}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# testability

## Definition — verbatim
(used, not defined)

> "Surface architectural friction and propose **deepening opportunities**: refactors that turn shallow modules into deep ones. The aim is testability and AI-navigability." — skills/engineering/improve-codebase-architecture/SKILL.md:9

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/improve-codebase-architecture/SKILL.md | 9 | used here | Identified as a primary goal alongside AI-navigability for deepening shallow modules into deep ones. |

## Consumes
Identification of shallow modules and friction in existing test suites.

## Produces
Deep modules where public interfaces serve as natural, stable test surfaces without exposing implementation details.

## When applied
Evaluated during architectural exploration when identifying subsystems that are untested or difficult to test through current interfaces.

## Sub-concepts
none

## Part of
improve-codebase-architecture

## Implementation status
clean

## Design notes
An architectural quality attribute and primary design objective in Matt's lifecycle where deep abstractions provide simple, durable test surfaces, avoiding the antipattern of exposing private implementation details or extracting shallow helper functions solely for unit testing.
