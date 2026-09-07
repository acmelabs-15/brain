---
package: rjm
name: atomic CAS
slug: atomic-cas
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

# atomic CAS

## Definition — verbatim
(used, not defined)

> "Because the store has no atomic CAS, two loops can both pass step 2 and both write in step 4 (a true race in the milliseconds between read and write)." — .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:102

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md | 102 | used here | Identified as an absent concurrency primitive in the PR comment store, justifying best-effort coordination backed by push-time SHA gates. |

## Consumes
Transactional storage primitives supporting compare-and-swap operations.

## Produces
Guaranteed race-free state transitions under concurrent writers.

## When applied
Discussed in concurrency analysis as an unavailable primitive on GitHub PR issue comment APIs.

## Sub-concepts
none

## Part of
pr-autofix-branch-ownership-lease

## Implementation status
defects: doc-drift, internal-contradiction, missing-path

## Design notes
The atomic compare-and-set synchronization primitive. ADR-076 explicitly documents that because the GitHub PR comment store lacks atomic CAS capabilities, sub-second race conditions are theoretically possible, justifying a design where lease coordination is best-effort and safety is delegated to Git push-time SHA verification.
