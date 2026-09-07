---
package: rjm
name: inconclusive
slug: inconclusive
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-075-form-factor-eval-methodology.md, sha256: 1354265b364c96bc78dc198932ba51ed1a53db825a41c0b24e086c4e48ff8fe8}
  - {path: .claude/skills/review/SKILL.md, sha256: cf8e377d27c1ac99b60acb63a0c4bdda2eae139abc38dda591cc9314be5f5dac}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# inconclusive

## Definition — verbatim
> "| inconclusive | confidence intervals overlap and cost delta does not decide it | Keep both, re-run with more fixtures or runs before deciding. |" — .agents/architecture/ADR-075-form-factor-eval-methodology.md:55

## Also called — verbatim
`A Stage-1 `UNKNOWN` (INCONCLUSIVE) does NOT short-circuit` — .claude/skills/review/SKILL.md:29

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-075-form-factor-eval-methodology.md | 55 | defined here | Evaluation verdict emitted when statistical results do not justify choosing either form. |
| .claude/skills/review/SKILL.md | 29 | used here | Equated to Stage-1 UNKNOWN verdict when spec compliance cannot be determined. |

## Consumes
Evaluation data with overlapping confidence intervals or indeterminate compliance artifacts.

## Produces
Decision to defer architectural change, gather more fixtures, or avoid short-circuiting reviews.

## When applied
Emitted when experimental deltas fall within statistical noise or evaluation inputs are missing.

## Sub-concepts
none

## Part of
form-factor-evaluation-methodology, review

## Implementation status
defects: internal-contradiction, cross-file-contradiction, missing-path

## Design notes
inconclusive prevents premature optimization or unjustified architectural shifts by treating indeterminate experimental results as a signal to collect more data rather than guessing.
