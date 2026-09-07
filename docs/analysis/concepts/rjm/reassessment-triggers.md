---
package: rjm
name: Reassessment triggers
slug: reassessment-triggers
kind: gate
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/buy-vs-build-framework/SKILL.md, sha256: 51ab60206739563c53683a976bc1c1c94fe21229452a6820fc0b126729d2e0a7}
  - {path: .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md, sha256: b2e62451bc202e69bce365986c0189d44776bc7ee1d6ee58ebe5b60c85061298}
  - {path: .claude/skills/buy-vs-build-framework/scripts/check_reassessment_triggers.py, sha256: f8f1d7b0e29c9d8ce64daf97e8f81f34057384309203ba9ef1eecbb73eda1afb}
  - {path: .claude/skills/cva-analysis/SKILL.md, sha256: 43e45215d0c6aa5ae0d384806b42a6bbe2610a1cb5c2b73b2a840b6c44ea85a9}
  - {path: .claude/skills/cva-analysis/references/matrix-building-examples.md, sha256: b35b45be548e503e2ead370599be57167c7ff1d6100a3eef5378be3977052b69}
  - {path: .claude/skills/cva-analysis/scripts/validate-cva-matrix.py, sha256: 023cdf1b41f86382b2dc144e531ab2b509ac05c8d795cc25dfcc95e6753588dc}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Reassessment triggers

## Definition — verbatim
> "    \"\"\"Check which reassessment triggers have fired.\"\"\"" — .claude/skills/buy-vs-build-framework/scripts/check_reassessment_triggers.py:94

## Also called — verbatim
> "7. Reassessment triggers (decisions aren't permanent)" — .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md:17
> "## Reassessment Triggers" — .claude/skills/buy-vs-build-framework/SKILL.md:347
> "## Reassessment Triggers" — .claude/skills/cva-analysis/SKILL.md:295

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md | 17 | defined here | Stated as explicit requirement ensuring architecture and sourcing decisions are tracked over time. |
| .claude/skills/buy-vs-build-framework/scripts/check_reassessment_triggers.py | 94 | defined here | Function checking whether cost, vendor, team, or market drift conditions have fired. |
| .claude/skills/buy-vs-build-framework/SKILL.md | 298 | defined here | Checklist verification item confirming the final recommendation specifies reassessment conditions. |
| .claude/skills/buy-vs-build-framework/SKILL.md | 347 | defined here | Output template section defining concrete drift thresholds that mandate re-evaluating decisions. |
| .claude/skills/cva-analysis/references/matrix-building-examples.md | 380 | defined here | Example matrix section listing criteria that trigger a full re-evaluation of CVA analysis. |
| .claude/skills/cva-analysis/scripts/validate-cva-matrix.py | 310 | used here | Validation completion step instructing users to document reassessment triggers in the ADR. |
| .claude/skills/cva-analysis/SKILL.md | 295 | defined here | Template section in CVA analysis documenting operational conditions requiring matrix review. |

## Consumes
Baseline decision parameters (cost, vendor pricing, traffic scale, regulatory mandates) and current operational telemetry.

## Produces
Drift alert, exit code notification (minor or major drift), and mandatory decision re-evaluation mandate.

## When applied
Defined during decision recording (ADR creation) and evaluated periodically via automated scripts or operational reviews.

## Sub-concepts
drift-detection

## Part of
architectural-decision-records

## Implementation status
defects: doc-drift, exit-code-mismatch, missing-path, script-bug

## Design notes
A lifecycle governance gate in rjm ensuring architectural and sourcing decisions are treated as provisional rather than permanent. By documenting quantifiable drift thresholds (e.g., >20% cost drift, vendor deprecation, scale increases) in ADRs, it automatically forces formal re-evaluation when underlying assumptions change.
