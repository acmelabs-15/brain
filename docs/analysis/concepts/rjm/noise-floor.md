---
package: rjm
name: noise floor
slug: noise-floor
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-optimizer/references/rule-audit-instrument.md, sha256: e44bedb58e00f8ca48ec3ee0cb3b8396e3cecf9bfde2e87f00e98adee9c6ee18}
  - {path: .claude/skills/context-optimizer/references/rule-audit-procedure.md, sha256: 410c727ad2802a3cd5dd5d32009daf60016a6b3eb02947b0bd0693d068007b4b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# noise floor

## Definition — verbatim
> "those clear the ~1.0 noise floor on magnitude, which is why the decision rests" — .claude/skills/context-optimizer/references/rule-audit-instrument.md:47

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/references/rule-audit-instrument.md | 47 | defined here | Defines the ~1.0 score magnitude threshold on a 0-5 scale below which single-run evaluation deltas are indistinguishable from sampling noise. |
| .claude/skills/context-optimizer/references/rule-audit-procedure.md | 221 | defined here | Directs auditors to evaluate deltas only after checking rubric completeness, reading them strictly against the noise floor. |

## Consumes
Single-run and multi-run evaluation metric scores and score variances.

## Produces
A threshold boundary separating random evaluation fluctuations from statistically meaningful effect sizes.

## When applied
Applied when interpreting performance differences between baseline and modified prompt rules.

## Sub-concepts
none

## Part of
- registered-decision-rule

## Implementation status
clean

## Design notes
The `noise floor` is an empirical measurement principle in rjm defining the resolution limit of LLM evaluation suites (~1.0 on a 5-point scale for 2-3 scenario single-generation runs). By recognizing that deltas beneath this ceiling are dominated by random sampling variance, rjm prevents teams from chasing phantom improvements or cutting content based on single-run noise.
