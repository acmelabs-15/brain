---
package: rjm
name: kill criterion
slug: kill-criterion
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md, sha256: c62e9604b92f9cbc815de948bd312bc12f9a9d7d669d676098dd2efea06cfd4a}
  - {path: .agents/architecture/ADR-083-copilot-dogfood-surface-separation.md, sha256: 2e49561b59500f4a4b6d417dfc94da905bdb2eb57a996e3070193904150cd40d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# kill criterion

## Definition — verbatim
> "NO-GO (revert Phase 1 rather than carry dead coordination code): zero collisions blocked in the window AND the Phase 2 audit has not started by the window's end." — .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:122

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md | 122 | defined here | Defined as an explicit rollback threshold reverting experimental architecture if metrics are not met. |
| .agents/architecture/ADR-083-copilot-dogfood-surface-separation.md | 185 | defined here | Applied to the internal overlay plugin to prevent creating infrastructure until an internal skill exists. |

## Consumes
Empirical operational telemetry, observation window limits (time/runs), and predefined baseline targets.

## Produces
A binding GO decision to retain and advance architectural changes, or a NO-GO decision to cleanly revert.

## When applied
Evaluated at the conclusion of an observation window or rollout phase to prevent accumulating dead or unexercised code.

## Sub-concepts
go-no-go

## Part of
pr-autofix-branch-ownership-lease

## Implementation status
defects: doc-drift, internal-contradiction, missing-path

## Design notes
An architectural governance gate establishing explicit, quantifiable thresholds for reverting additive or experimental features. Rather than carrying speculative or unexercised coordination mechanisms indefinitely, a kill criterion defines the exact operational conditions under which code must be cleanly uninstalled.
