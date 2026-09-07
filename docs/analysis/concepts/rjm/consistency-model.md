---
package: rjm
name: Consistency model
slug: consistency-model
kind: pattern
package_phase: rjm:ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-090-pr-branch-holder-lease.md, sha256: eb606b8f382ec06a8126b2a6d1814d7323a239eb350ba99314361006d776059d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Consistency model

## Definition — verbatim
> "The model is at-least-once writes with idempotent readers:" — .agents/architecture/ADR-090-pr-branch-holder-lease.md:148

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-090-pr-branch-holder-lease.md | 146 | defined here | Defined in section heading and text as at-least-once writes with idempotent readers over a non-transactional store. |

## Consumes
GitHub issue comment timestamps, sequence IDs, and network retry behaviors.

## Produces
Consistent interpretation of branch lease ownership across asynchronous readers.

## When applied
Governs all read and write interactions with the PR comment lease store.

## Sub-concepts
idempotent-readers

## Part of
pr-branch-holder-lease

## Implementation status
not-implemented (ADR-090 proposed; citing inventory card records defects: none)

## Design notes
The distributed data consistency model designed for GitHub PR comment storage. Because GitHub comments do not support ACID transactions or atomic compare-and-swap primitives, the system relies on at-least-once comment writes paired with idempotent, monotonic ID-based reader evaluation, ensuring robust convergence despite network retries and concurrent writes.
