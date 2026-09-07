---
package: rjm
name: sign test
slug: sign-test
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-optimizer/references/rule-audit-evidence.md, sha256: 70d527ebb420739aa099f7982f4dc28e44432b3fa91532ae93ed5e0fa78e34e9}
  - {path: .claude/skills/context-optimizer/references/rule-audit-instrument.md, sha256: e44bedb58e00f8ca48ec3ee0cb3b8396e3cecf9bfde2e87f00e98adee9c6ee18}
  - {path: .claude/skills/context-optimizer/references/rule-audit-procedure.md, sha256: 410c727ad2802a3cd5dd5d32009daf60016a6b3eb02947b0bd0693d068007b4b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# sign test

## Definition — verbatim
(used, not defined)

> "win against four losses. A sign test discards ties." — .claude/skills/context-optimizer/references/rule-audit-instrument.md:59

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/references/rule-audit-evidence.md | 104 | used here | Confirms headline result robustness (7 positive, 1 negative, p = 0.0703125) across pre- and post-recovery tables. |
| .claude/skills/context-optimizer/references/rule-audit-instrument.md | 59 | used here | Explains that exact ties between evaluation arms contribute no sign and lower n under sign test conventions. |
| .claude/skills/context-optimizer/references/rule-audit-procedure.md | 274 | used here | Formalizes the sign test protocol across 8 runs (4 Opus, 4 Sol) to discard noisy magnitude deltas and evaluate direction. |

## Consumes
Paired performance deltas across fixed multi-run evaluation suites.

## Produces
Directional sign counts (positive, negative, discarded ties) and two-tailed p-values under a fair-coin null hypothesis.

## When applied
Applied when evaluating prompt rule modifications across repeated trials where individual run magnitudes are noise-dominated.

## Sub-concepts
- fair-coin-null
- two-tailed

## Part of
- registered-decision-rule

## Implementation status
clean

## Design notes
The `sign test` is a non-parametric statistical technique central to rjm's prompt optimization discipline. Because individual LLM evaluation runs exhibit wide variance (~1.0 noise floor on a 0-5 scale), rjm rejects parametric means and uses the sign test across eight runs to determine whether an intervention consistently improves performance directionally.
