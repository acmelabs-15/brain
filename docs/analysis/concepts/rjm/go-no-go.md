---
package: rjm
name: GO/NO-GO
slug: go-no-go
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

# GO/NO-GO

## Definition — verbatim
> "**Phase 1 kill criterion (GO/NO-GO).** Baseline: 1 evidenced collision incident (PR #2611) before Phase 1." — .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:122

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md | 122 | defined here | Decision gate determining whether to retain and advance a phased rollout or revert it. |

## Consumes
Measured operational metrics against predefined success and failure thresholds.

## Produces
A binary determination: GO to proceed to subsequent development phases, or NO-GO to execute immediate rollback.

## When applied
Evaluated at phased delivery milestones or at the expiration of trial observation windows.

## Sub-concepts
none

## Part of
kill-criterion, pr-autofix-branch-ownership-lease

## Implementation status
defects: doc-drift, internal-contradiction, missing-path

## Design notes
A binary operational decision checkpoint tied to measurable empirical criteria. It forces an explicit decision point where a system either demonstrates sufficient utility to justify continuation or is cleanly uninstalled to maintain architectural cleanliness.
