---
package: rjm
name: SKIP
slug: skip
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

# SKIP

## Definition — verbatim
(used, not defined)

> "return `SKIP` with reason `held-by:<owner>` and the `expires_at` so the caller knows when to retry." — .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:90

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md | 90 | used here | Returned when a live branch lease is held by another verified actor. |

## Consumes
Pre-action probe evaluation indicating a conflicting active lease, merged state, or closed PR.

## Produces
An exit code 1 or structured payload signaling the calling agent to halt without error.

## When applied
Returned by pre-action validation probes when conditions dictate that the current automation cycle should not execute.

## Sub-concepts
none

## Part of
verdict-gate-pattern, pr-autofix-branch-ownership-lease

## Implementation status
defects: doc-drift, internal-contradiction, missing-path

## Design notes
An action verdict token returned by pre-action probes and lease acquisition checks. It instructs automation loops to safely bypass planned work (e.g. when another agent holds the lease or the PR is already closed) without triggering error alarms or retries.
