---
package: addy
name: Small
slug: small
kind: reference
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

# Small

## Definition — verbatim
> "| **Small** | Single process, no I/O, no network, no database | Milliseconds | Pure function tests, data transforms |" — skills/test-driven-development/SKILL.md:169

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/test-driven-development/SKILL.md | 169 | defined here | Defines the Small test size category in the resource constraint model. |

## Consumes
Pure logic, mathematical algorithms, and in-memory data transformations.

## Produces
Deterministic, millisecond-fast test cases operating within a single process.

## When applied
When verifying logic that requires no I/O, network, filesystem, or database access.

## Sub-concepts
none

## Part of
the-test-pyramid

## Implementation status
defects: cross-file-contradiction, doc-drift

## Design notes
A test classification category in the resource constraint model defining tests restricted to a single process without external I/O, providing millisecond execution speed and deterministic execution.
