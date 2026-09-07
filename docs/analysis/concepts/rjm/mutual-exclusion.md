---
package: rjm
name: mutual exclusion
slug: mutual-exclusion
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md, sha256: c62e9604b92f9cbc815de948bd312bc12f9a9d7d669d676098dd2efea06cfd4a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# mutual exclusion

## Definition — verbatim
(used, not defined)

> "The lease is advisory and the PR-comment store gives no atomic compare-and-set, so the protocol does not pretend to provide mutual exclusion." — .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:84

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md | 84 | used here | Acknowledged as explicitly not guaranteed by the advisory PR comment store. |

## Consumes
Locks, semaphores, or atomic compare-and-set store primitives.

## Produces
Strict single-writer access guarantees for critical shared resources.

## When applied
Considered but explicitly rejected for branch-ownership coordination due to lack of atomic CAS and high cost of distributed lock backends.

## Sub-concepts
none

## Part of
pr-autofix-branch-ownership-lease

## Implementation status
defects: doc-drift, internal-contradiction, missing-path

## Design notes
The concurrency property ensuring that only one process can access a shared resource at a time. ADR-076 explicitly documents that the PR comment store does not provide mutual exclusion, relying instead on advisory best-effort coordination backed by push-time SHA gates.
