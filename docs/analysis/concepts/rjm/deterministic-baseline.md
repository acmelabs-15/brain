---
package: rjm
name: Deterministic baseline
slug: deterministic-baseline
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

# Deterministic baseline

## Definition — verbatim
> "## Step 0. Deterministic baseline" — .claude/skills/context-optimizer/references/rule-audit-procedure.md:51

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/references/rule-audit-procedure.md | 51 | defined here | Step 0 of the Rule Audit Procedure establishing zero-cost deterministic validation before LLM evaluation. |

## Consumes
Static rule texts, skill files, instruction token budgets, and formatting linters.

## Produces
Deterministic token counts, lint checks, syntax validation, and pattern match results.

## When applied
Free and instant. Always do this before touching a model.

## Sub-concepts
none

## Part of
rule-audit-procedure

## Implementation status
clean

## Design notes
The initial zero-cost evaluation stage in the Rule Audit Procedure that checks token length, syntax validity, and deterministic constraints before expending LLM compute, ensuring basic mechanical soundness before testing behavioral effects.
