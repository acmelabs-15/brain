---
package: rjm
name: Push-time guard
slug: push-time-guard
kind: gate
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

# Push-time guard

## Definition — verbatim
> "Push-time guard (unchanged plus one addition):" — .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:95

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md | 95 | defined here | Defined as the safety gate executed before git push combining the Force-Push Safety SHA gate with lease freshness checks. |

## Consumes
Local git ref state, remote head SHA, and active branch lease metadata.

## Produces
Push permission or push blockage requiring re-sync to updated remote commits.

## When applied
Executed immediately prior to pushing any automated commits to remote pull request branches.

## Sub-concepts
force-push-safety-sha-gate

## Part of
pr-autofix-branch-ownership-lease

## Implementation status
defects: doc-drift, internal-contradiction, missing-path

## Design notes
The pre-push verification gate that combines the authoritative Force-Push Safety SHA check with lease freshness validation. If the remote branch has advanced under a held lease, this guard halts the push and forces the local session to re-sync and re-run checks rather than overwriting racing changes.
