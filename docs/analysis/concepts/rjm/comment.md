---
package: rjm
name: _comment
slug: comment
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/rule_activation_coverage_baseline.json, sha256: e22e8410c9691d388ec6b977c3e4670fac9662a56149a43849834d3e6b4cba3a}
  - {path: scripts/validation/skill_md_exec_portability_baseline.json, sha256: 443a380bdae502462b837dd841290985f9279faaab5d56132e2af43e842bdf61}
  - {path: scripts/validation/skill_md_portability_baseline.json, sha256: 7e99a765356aaf635637c80c183a5c9200b7029a2917227b0580683be941d97f}
  - {path: scripts/validation/skill_portability_baseline.json, sha256: 19be7c6de8ec9639ccde43c96cde35a3826b6dfadd239d08156ddd050fcc51f2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# _comment

## Definition — verbatim
(used, not defined)

> "Ratchet of rules and skills that lack an activation scenario." — scripts/validation/rule_activation_coverage_baseline.json:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/rule_activation_coverage_baseline.json | 2 | defined here | Top-level metadata comment explaining the ratchet policy for uncovered rules and skills. |
| scripts/validation/skill_md_exec_portability_baseline.json | 2 | defined here | Top-level metadata comment explaining the executable invocation portability ratchet. |
| scripts/validation/skill_md_portability_baseline.json | 2 | defined here | Top-level metadata comment explaining the markdown reference portability ratchet. |
| scripts/validation/skill_portability_baseline.json | 2 | defined here | Top-level metadata comment explaining the skill script reference portability ratchet. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
A top-level metadata comment key used across JSON baseline configurations to document ratchet semantics and update commands, classified as name-only per D-023.
