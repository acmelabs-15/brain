---
package: matt
name: red-green-refactor loop
slug: red-green-refactor-loop
kind: technique
package_phase: matt:engineering
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: README.md, sha256: 4079d981bc2ac0a52aaf2c76d1c1476f4297937a8ff3a2e2322b6b730dc2d4f6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# red-green-refactor loop

## Definition — verbatim
> "a red-green-refactor loop is critical. This is where the agent writes a failing test first, then fixes the test." — README.md:154

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| README.md | 154 | defined here | Highlights the automated testing feedback loop where an agent writes a failing test first then fixes it |

## Consumes
Executable test framework and a concrete behavior, ticket requirement, or bug reproduction to verify.

## Produces
A failing automated test followed by minimal passing implementation code and clean refactored source.

## When applied
During automated test writing and feature implementation to give coding agents a consistent feedback loop.

## Sub-concepts
none

## Part of
tdd

## Implementation status
clean

## Design notes
The core disciplined test-driven cycle in which an agent must author a failing test prior to implementing production code. By demanding verifiable failure before success, this feedback loop prevents agents from writing tautological tests or hallucinating correctness, producing substantially higher code quality.
