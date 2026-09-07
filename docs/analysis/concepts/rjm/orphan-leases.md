---
package: rjm
name: orphan leases
slug: orphan-leases
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

# orphan leases

## Definition — verbatim
> "A generated id is not stable across retries, so it creates self-blocking orphan leases." — .agents/architecture/ADR-090-pr-branch-holder-lease.md:53

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-090-pr-branch-holder-lease.md | 53 | defined here | Defined as self-blocking unreleased leases caused by unstable generated holder IDs across retries. |

## Consumes
Unstable ephemeral holder IDs or crashed execution processes.

## Produces
Unreleased lease markers that block subsequent valid operations until timeout or manual override.

## When applied
Analyzed as a failure mode during retry loops and crash recovery.

## Sub-concepts
none

## Part of
pr-branch-holder-lease

## Implementation status
not-implemented (ADR-090 proposed; citing inventory card records defects: none)

## Design notes
A failure condition where an active lease remains recorded on a PR branch with no running process capable of renewing or releasing it. Orphan leases arise when processes terminate abnormally or use unstable random identifiers across retries, causing self-blocking conditions that persist until TTL expiration or administrative override.
