---
package: rjm
name: Pre-register the decision rule
slug: pre-register-the-decision-rule
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-optimizer/references/rule-audit-procedure.md, sha256: 410c727ad2802a3cd5dd5d32009daf60016a6b3eb02947b0bd0693d068007b4b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Pre-register the decision rule

## Definition — verbatim
> "## Step 0a. Pre-register the decision rule before any scored eval run" — .claude/skills/context-optimizer/references/rule-audit-procedure.md:28

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/references/rule-audit-procedure.md | 28 | defined here | Step 0a of the Rule Audit Procedure establishing a blocking requirement to fix evaluation criteria before scoring runs. |

## Consumes
Proposed rule audit hypothesis, candidate evaluation thresholds, and target scoring dimensions.

## Produces
Pre-registered decision rule specifying minimum effect size, allowable false activation rate, and pass/fail boundaries.

## When applied
This step is BLOCKING. Applied before any scored eval run and before running eval-rule-activation.py for a new rule audit.

## Sub-concepts
none

## Part of
rule-audit-procedure

## Implementation status
clean

## Design notes
A blocking discipline in the Rule Audit Procedure that mandates fixing pass/fail criteria, threshold boundaries, and effect sizes prior to inspecting evaluation run data, preventing post-hoc rationalization, p-hacking, and retroactive adjustment of evaluation rules.
