---
package: rjm
name: exact-SHA push verification
slug: exact-sha-push-verification
kind: gate
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

# exact-SHA push verification

## Definition — verbatim
(used, not defined)

> "An override does not bypass exact-SHA push verification." — .agents/architecture/ADR-090-pr-branch-holder-lease.md:144

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-090-pr-branch-holder-lease.md | 144 | used here | Confirmed as the ultimate safety boundary that remains mandatory even when manual overrides are exercised. |

## Consumes
Local expected base commit SHA and live remote ref SHA queried immediately prior to push.

## Produces
Push authorization or abort verdict.

## When applied
At the network transport boundary immediately before transmitting commits to the remote git repository.

## Sub-concepts
none

## Part of
pr-branch-holder-lease

## Implementation status
clean (citing inventory card records defects: none)

## Design notes
The ultimate safety gate in branch push workflows. While holder leases prevent concurrent agents from working on the same branch simultaneously, exact-SHA verification verifies that the remote ref has not moved between lease acquisition and git push, ensuring that race conditions or out-of-band updates never result in overwriting un-pulled commits.
