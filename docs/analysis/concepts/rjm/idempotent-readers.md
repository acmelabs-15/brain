---
package: rjm
name: idempotent readers
slug: idempotent-readers
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

# idempotent readers

## Definition — verbatim
> "The model is at-least-once writes with idempotent readers:" — .agents/architecture/ADR-090-pr-branch-holder-lease.md:148

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-090-pr-branch-holder-lease.md | 148 | defined here | Defined as the reader architecture that safely resolves duplicate markers and races across non-transactional comments. |

## Consumes
Collection of issue comment markers returned by GitHub API list queries.

## Produces
Deterministic current lease state evaluated by highest valid issue comment ID.

## When applied
When parsing PR comment history to establish lease ownership.

## Sub-concepts
none

## Part of
consistency-model, pr-branch-holder-lease

## Implementation status
not-implemented (ADR-090 proposed; citing inventory card records defects: none)

## Design notes
A reading strategy where parsing repeated or duplicated lease markers yields the same state verdict. By evaluating the highest valid issue comment ID and treating duplicate acquisitions as renewal confirmations, idempotent readers ensure system stability in the presence of retried API calls or racing comments.
