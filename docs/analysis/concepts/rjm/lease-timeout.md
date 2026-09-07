---
package: rjm
name: lease timeout
slug: lease-timeout
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

# lease timeout

## Definition — verbatim
> "The lease timeout becomes 30 minutes with mandatory renewal every 5 minutes during long operations." — .agents/architecture/ADR-090-pr-branch-holder-lease.md:40

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-090-pr-branch-holder-lease.md | 40 | defined here | Defined as the 30-minute time-to-live with mandatory 5-minute heartbeats for active branch holders. |

## Consumes
Wall-clock time, heartbeat timers, and ongoing child process execution status.

## Produces
Lease expiration timestamps (`expires_at`) in UTC RFC3339 format.

## When applied
Enforced on every lease acquisition and checked by subsequent processes before acquiring or overriding leases.

## Sub-concepts
none

## Part of
holder-lease, pr-branch-holder-lease

## Implementation status
not-implemented (ADR-090 proposed; citing inventory card records defects: none)

## Design notes
The time-to-live policy for branch holder leases, configured at 30 minutes with a requirement to renew every 5 minutes during extended operations. This balance accommodates long-running pre-push test suites while preventing deadlocks if a holder crashes without releasing its lease.
