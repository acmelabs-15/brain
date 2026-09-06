---
package: addy
name: verifiable slice
slug: verifiable-slice
kind: artifact
package_phase: addy:Build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: evals/cases/incremental-implementation.json, sha256: 3f40c3955e0cccd725711818da2c4e3eac5c6eff0129afadea5cf8b74e558813}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# verifiable slice

## Definition — verbatim
(used, not defined)
> "Implement the next task from the plan as a small verifiable slice" — evals/cases/incremental-implementation.json:6

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/cases/incremental-implementation.json | 6 | used here | Eval trigger prompt requesting implementation of a task as a small verifiable slice. |

## Consumes
A single task breakdown item and existing codebase infrastructure.

## Produces
An end-to-end unit of working code accompanied by automated test proofs or type-check verification.

## When applied
When executing the next task from an implementation plan.

## Sub-concepts
none

## Part of
- incremental-implementation
- vertical-slices

## Implementation status
clean

## Design notes
A verifiable slice is a discrete unit of code changes whose correctness can be demonstrated independently via automated verification before subsequent tasks commence. It avoids speculative coding by establishing verifiable proofs at each step.
