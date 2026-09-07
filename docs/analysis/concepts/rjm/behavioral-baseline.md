---
package: rjm
name: Behavioral baseline
slug: behavioral-baseline
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

# Behavioral baseline

## Definition — verbatim
> "## Step 1. Behavioral baseline" — .claude/skills/context-optimizer/references/rule-audit-procedure.md:125

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/references/rule-audit-procedure.md | 125 | defined here | Step 1 of the Rule Audit Procedure establishing baseline LLM performance across positive and negative scenario sets without the rule. |

## Consumes
Evaluation scenario files (positive and negative pools), default target model configuration, and evaluation harness.

## Produces
Baseline activation, citation, and behavioral scores prior to applying candidate prompt rules.

## When applied
Run after deterministic checks pass to establish how the target model behaves natively on the test scenarios.

## Sub-concepts
none

## Part of
rule-audit-procedure

## Implementation status
clean

## Design notes
The empirical control measurement in the Rule Audit Procedure that runs candidate evaluation scenarios against the target model without the rule enabled, providing the statistical baseline against which any improvement or regression must be demonstrated.
