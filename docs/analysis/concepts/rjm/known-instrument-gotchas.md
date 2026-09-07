---
package: rjm
name: Known instrument gotchas
slug: known-instrument-gotchas
kind: reference
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

# Known instrument gotchas

## Definition — verbatim
> "## Known instrument gotchas" — .claude/skills/context-optimizer/references/rule-audit-procedure.md:534

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/references/rule-audit-procedure.md | 534 | defined here | Catalog of subtle measurement artifacts, judge biases, and harness limitations in rule audit evals. |

## Consumes
Evaluation execution logs, anomalous judge scoring patterns, and benchmark regression reports.

## Produces
Catalogued failure modes, workaround configurations, and interpretation constraints for evaluation metrics.

## When applied
Consulted when diagnosing anomalous evaluation scores, high variance, or unexpected judge disagreements.

## Sub-concepts
none

## Part of
rule-audit-procedure

## Implementation status
clean

## Design notes
A reference section within the Rule Audit Procedure detailing known harness flaws, judge parser bugs, and evaluation measurement traps, ensuring contributors do not misinterpret evaluation artifacts as true model behavior.
