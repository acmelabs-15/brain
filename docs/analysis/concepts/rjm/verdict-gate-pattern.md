---
package: rjm
name: verdict-gate pattern
slug: verdict-gate-pattern
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

# verdict-gate pattern

## Definition — verbatim
(used, not defined)

> "The repo already has the verdict-gate pattern this needs." — .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:43

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md | 43 | used here | Reused as the pre-action probe pattern returning structured ACT/SKIP verdicts with exit code conventions. |

## Consumes
Pre-action probe targets (PR metadata, branch refs, lease markers).

## Produces
Standardized JSON verdict payloads (`{"action": "ACT" | "SKIP", "reason": "..."}`) and process exit codes (0 for ACT, 1 for SKIP).

## When applied
Evaluated before initiating expensive operations, test executions, or mutation loops to gate actions early.

## Sub-concepts
act, skip

## Part of
pr-autofix-branch-ownership-lease

## Implementation status
defects: doc-drift, internal-contradiction, missing-path

## Design notes
An architectural design pattern establishing cheap, pre-action verification probes that evaluate preconditions before running expensive or state-mutating workflows. By returning a standardized structured verdict token (`ACT` or `SKIP`) with associated exit codes, it allows agents and automation loops to abort or defer without incurring unnecessary token or compute costs.
